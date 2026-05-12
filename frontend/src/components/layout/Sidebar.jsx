import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Tasks",
      path: "/tasks",
    },
    {
      name: "Organizations",
      path: "/organizations",
    },
    {
      name: "Notifications",
      path: "/notifications",
    },
  ];

  return (
    <div className="w-[260px] min-h-screen bg-[#111827] text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        Automation Platform
      </h1>

      <div className="flex flex-col gap-2">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            to={menu.path}
            className={`px-4 py-3 rounded-lg transition-all ${
              location.pathname === menu.path
                ? "bg-blue-600"
                : "hover:bg-[#1f2937]"
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;