import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "../App.jsx";
import { authRoute } from "./routingAuth";
import { dashboardRoute } from "./routingDashboard";
import { homepageRoute } from "./routingHomepage";

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree = rootRoute.addChildren([authRoute, dashboardRoute, homepageRoute])