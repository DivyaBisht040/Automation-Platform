import DashboardLayout from "../components/layout/DashboardLayout";

function OrganizationsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Organizations
      </h1>

      <div className="bg-white p-5 rounded-xl shadow">
        Organizations List
      </div>
    </DashboardLayout>
  );
}

export default OrganizationsPage;