import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#f3f4f6] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;