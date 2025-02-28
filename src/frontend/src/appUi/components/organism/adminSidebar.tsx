import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchInput } from "../molecules/searchInput";
import { Texts } from "../atoms/text";

interface AdminLink {
  id: string;
  name: string;
  path: string;
}

export const AdminSidebar: React.FC = () => {
  const [sidebarSearch, setSidebarSearch] = useState<string>("");

  const adminLinks: AdminLink[] = [
    {
      id: "distributed",
      name: "Distributed Students List",
      path: "/portal/distributed",
    },
    { id: "locate", name: "Locate Students", path: "/portal/locate" },
  ];

  const filteredLinks = adminLinks.filter((link) =>
    link.name.toLowerCase().includes(sidebarSearch.toLowerCase())
  );

  return (
    <aside className="w-64 mt-4 rounded-xl bg-white p-4 ring-1 ring-secondary">
      <div className="mb-6">
        <SearchInput
          placeholder="Search options..."
          value={sidebarSearch}
          onChange={setSidebarSearch}
        />
      </div>

      <div className="mt-6">
        <Texts variant="label" className="mb-2 block">
          Admin Options
        </Texts>
        <div className="space-y-1">
          {filteredLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `block p-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
};
