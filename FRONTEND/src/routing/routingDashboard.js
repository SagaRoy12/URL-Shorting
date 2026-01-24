import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import DashboardPage from "../pages/DashboardPage.jsx";
import { checkAuth } from "../utility/helperfunction.utility";

export const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/dashboard`,
    component: DashboardPage,
    beforeLoad: checkAuth,
})