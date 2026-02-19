
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Dashboard as DashboardView } from "./views/DashboardView";
import { Profile as ProfileView } from "./views/ProfileView";
import { About as AboutView } from "./views/AboutView";
import { Login as LoginView } from "./views/LoginView";
import { Register as RegisterView } from "./views/RegisterView";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route element={<Layout />}>
                    <Route path="/" element={<DashboardView />} />
                    <Route path="/profile" element={<ProfileView />} />
                    <Route path="/about" element={<AboutView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
