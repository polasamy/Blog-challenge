import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
function Layout() {

    return <>
        <Navbar />
        <section className=" min-h-screen max-h-full">
            <Outlet />
        </section>
        <Footer />

    </>
}

export default Layout
