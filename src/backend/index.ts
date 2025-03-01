import { v4 as uuidv4 } from "uuid";
import { StableBTreeMap } from "azle";

import express from "express";
import cors from "cors";
import { AuthorData, Distribution, DistributionData } from "./types";


const distributionStore = StableBTreeMap<string, DistributionData>(1);
const studentIndex = StableBTreeMap<string, string>(2); 
const tokens = StableBTreeMap<string, AuthorData>(3)

const app = express();
app.use(cors());
app.use(express.json());


function createKey(year: string, level: string): string {
  return `${year}-${level}`;
}

app.get("/distribution/:year/:level", (req, res) => {
  try {
    const { year, level } = req.params;

    const key = createKey(year, level);
    const data = distributionStore.get(key);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `No distributions found for year ${year} and level ${level}`,
      });
    }

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error retrieving distributions:", error);
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    });
  }
});

app.get("/distribution", (req, res) => {
  try {
    const allData = distributionStore.values();
    const allDistributions = allData.map((data) => data.distributions).flat();

    return res.json({
      success: true,
      count: allDistributions.length,
      data: allData,
    });
  } catch (error) {
    console.error("Error retrieving distributions:", error);
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    });
  }
});

app.post("/distribution", (req, res) => {
  try {
    const { year, level, distributions } = req.body;

    if (!year || !level || !distributions || !Array.isArray(distributions)) {
      return res.status(400).json({
        message:
          "Missing required fields: year, level, and distributions array",
      });
    }

    const key = createKey(year, level);
    const existingData = distributionStore.get(key);

    // Create or update the distribution data
    let distributionData: DistributionData;
    if (existingData) {
      distributionData = existingData;
    } else {
      distributionData = {
        year,
        level,
        distributions: [],
        lastUpdated: new Date(),
      };
    }

    const newDistributions = distributions.map((dist) => {
      const {
        name,
        registrationNumber,
        assignedSchool,
        allocatedCombinations,
        explanation,
        totalMarks,
      } = dist;

      if (!name || !registrationNumber || !assignedSchool) {
        throw new Error(`Invalid distribution data: ${JSON.stringify(dist)}`);
      }

      const newDistribution: Distribution = {
        id: uuidv4(),
        level,
        name,
        registrationNumber,
        assignedSchool,
        allocatedCombinations,
        explanation: explanation || "",
        totalMarks: totalMarks || 0,
        createdAt: new Date(),
      };

      studentIndex.insert(registrationNumber, key);
      return newDistribution;
    });

    distributionData.distributions = [
      ...distributionData.distributions,
      ...newDistributions,
    ];
    distributionData.lastUpdated = new Date();

    distributionStore.insert(key, distributionData);

    return res.status(201).json({
      success: true,
      message: `${newDistributions.length} distribution(s) created successfully`,
      data: newDistributions,
    });
  } catch (error) {
    console.error("Error creating distributions:", error);
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    });
  }
});

app.get("/distribution/student/:registrationNumber", (req, res) => {
  try {
    const { registrationNumber } = req.params;

    const key = studentIndex.get(registrationNumber);

    if (!key) {
      return res.status(404).json({
        success: false,
        message: `No student found with registration number ${registrationNumber}`,
      });
    }

    const data = distributionStore.get(key);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `Distribution data not found for key ${key}`,
      });
    }

    const student = data.distributions.find(
      (d) => d.registrationNumber === registrationNumber
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: `Student not found in distribution data`,
      });
    }

    return res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    console.error("Error searching for student:", error);
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    });
  }
});

// Login endpoint
app.post("/auth/login", async (req, res) => {
  const {token, number } = req.body;

  const authUser = Array.from(users.values()).find(
    (user) => user.email === email
  );

  if (!authUser) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const validPassword = await bcrypt.compare(password, authUser.password);
  if (!validPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Generate new session ID on login
  const sessionId = uuidv4();
  authUser.sessionId = sessionId;
  users.insert(authUser.id, authUser);

  const userProfile = Array.from(userProfiles.values()).find(
    (profile) => profile.id === authUser.id
  );

  return res.json({
    success: true,
    message: "Login successful",
    sessionId,
    userId: authUser.id,
    role: authUser.role,
    firstName: authUser.firstName,
    lastName: authUser.lastName,
    phone: authUser.phone,
    email: authUser.email,
    user: userProfile,
  });
});

// Logout endpoint
app.post("/auth/logout", verifySession, (req, res) => {
  try {
    // Get the user from the verified session
    const user = (req as any).user;
    
    // Invalidate the session by clearing the sessionId
    user.sessionId = "";
    users.insert(user.id, user);

    return res.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during logout",
    });
  }
});


app.use(express.static("/dist"));
app.listen();
