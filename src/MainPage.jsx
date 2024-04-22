import { Outlet } from 'react-router-dom'
import './index.css'
import NavBar from './components/Navbar'

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
  const token = localStorage.getItem('auth-token')
  const links = !token? [{name: "Get Started", href: "/register"}]: [{name: "Dashboard", href: "/dashboard"}, {name: "Logout >", action: ()=>{localStorage.removeItem("auth-token"); window.location.href = "/login"}}]
  return (
    <>
      <NavBar links={links}/>
      <Outlet />
      <ToastContainer 
        position='bottom-right' 
        autoClose={5000} 
        hideProgressBar={false}
        closeOnClick={true}
        draggable={true}
        theme='dark'
        />
    </>
  )
}

export default MainPage
