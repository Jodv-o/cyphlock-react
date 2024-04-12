import { Outlet } from 'react-router-dom'
import './index.css'
import NavBar from './components/Navbar'

function MainPage() {
  const token = localStorage.getItem('auth-token')
  const links = !token? [{name: "Get Started", href: "/register"}]: [{name: "Dashboard", href: "/dashboard"}, {name: "Logout >", action: ()=>{localStorage.removeItem("auth-token"); window.location.href = "/login"}}]
  return (
    <>
      <NavBar links={links}/>
      <Outlet />
    </>
  )
}

export default MainPage
