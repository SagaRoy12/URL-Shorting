import { redirect } from "@tanstack/react-router"
import { frontendUserGetMe } from "../APIs/userApiFrontend"
import { login } from "../reduxStore/slice/authSlice"

export const checkAuth = async ({ context }) => {
    const { queryClient, store } = context

    try {
        const user = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: frontendUserGetMe,
            retry: false,
        })

        if (!user) {
            throw redirect({ to: "/login" })
        }

        store.dispatch(login(user))

        const { isAuthenticated } = store.getState().auth    // from redux store

        if (!isAuthenticated) {
            throw redirect({ to: "/login" })
        }

        return true
    } catch (error) {
        throw redirect({ to: "/" })
    }
}
