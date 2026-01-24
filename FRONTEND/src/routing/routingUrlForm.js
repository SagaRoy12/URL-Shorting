import { createRoute } from "@tanstack/react-router"
import { dashboardRoute } from "./routingDashboard.js"
import UrlForm from "../components/UrlForm"

export const urlRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: "shorten",
    component: UrlForm,
})
