import React, { useState, useEffect } from "react";
import { Texts } from "../../appUi/components/atoms/text";

const DistributedStudentsList: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStudents([
        { id: 1, name: "John Doe", district: "Kigali", school: "GS Kigali" },
        {
          id: 2,
          name: "Jane Smith",
          district: "Musanze",
          school: "GS Musanze",
        },
        {
          id: 3,
          name: "Mike Johnson",
          district: "Rubavu",
          school: "GS Rubavu",
        },
        { id: 4, name: "Sarah Williams", district: "Huye", school: "GS Huye" },
        {
          id: 5,
          name: "David Brown",
          district: "Nyagatare",
          school: "GS Nyagatare",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <Texts variant="title" className="mb-4">
        Distributed Students List
      </Texts>

      {loading ? (
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
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
                District
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                School
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.district}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.school}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DistributedStudentsList;
