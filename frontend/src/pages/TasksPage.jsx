import DashboardLayout from "../components/layout/DashboardLayout";

function TasksPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Tasks
      </h1>

      <div className="bg-white p-5 rounded-xl shadow">
        Task Table
      </div>
    </DashboardLayout>
  );
}

export default TasksPage;