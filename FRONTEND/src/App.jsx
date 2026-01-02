import HomePage from './pages/HomePage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import NavBar from './components/NavBarComponent.jsx'
import { Outlet } from "@tanstack/react-router";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />

    </>
  )
}

export default RootLayout