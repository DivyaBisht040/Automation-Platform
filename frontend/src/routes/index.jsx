import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import TasksPage from "../pages/TasksPage";
import OrganizationsPage from "../pages/OrganizationsPage";
import NotificationsPage from "../pages/NotificationsPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route
                path="/dashboard"
                element={<DashboardPage />}
            />

            <Route
                path="/tasks"
                element={<TasksPage />}
            />

            <Route
                path="/organizations"
                element={<OrganizationsPage />}
            />

            <Route
                path="/notifications"
                element={<NotificationsPage />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
}

export default AppRoutes;