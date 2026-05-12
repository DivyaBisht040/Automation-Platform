import DashboardLayout from "../components/layout/DashboardLayout";

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your enterprise workflows and activities
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-gray-500 text-sm mb-2">
            Total Tasks
          </h2>

          <p className="text-3xl font-bold">
            124
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-gray-500 text-sm mb-2">
            Active Users
          </h2>

          <p className="text-3xl font-bold">
            48
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-gray-500 text-sm mb-2">
            Notifications
          </h2>

          <p className="text-3xl font-bold">
            16
          </p>
        </div>
      </div>

      <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-4">
          <div className="border-b pb-3">
            Task "API Integration" completed
          </div>

          <div className="border-b pb-3">
            New organization invited
          </div>

          <div className="border-b pb-3">
            Payment workflow updated
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;