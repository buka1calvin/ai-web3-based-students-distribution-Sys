import React, { useState } from "react";
import { Texts } from "../../appUi/components/atoms/text";

const LocateStudents: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = () => {
    if (!searchQuery) return;

    // Simulate API call
    setTimeout(() => {
      const demoResults = [
        {
          id: 1,
          name: "John Doe",
          location: "Kigali",
          school: "GS Kigali",
          status: "Active",
        },
        {
          id: 2,
          name: "Jane Smith",
          location: "Musanze",
          school: "GS Musanze",
          status: "Active",
        },
      ].filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.location.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(demoResults);
      setSearchPerformed(true);
    }, 500);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <Texts variant="title" className="mb-4">
        Locate Students
      </Texts>

      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or location..."
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Search
          </button>
        </div>
      </div>

      {searchPerformed && (
        <div>
          <Texts variant="subtitle" className="mb-2">
            Search Results ({results.length})
          </Texts>

          {results.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No students found matching your search.
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    School
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.school}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default LocateStudents;
