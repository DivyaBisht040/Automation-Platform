import DashboardLayout from "../components/layout/DashboardLayout";

function NotificationsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      <div className="bg-white p-5 rounded-xl shadow">
        Live Notifications
      </div>
    </DashboardLayout>
  );
}

export default NotificationsPage;