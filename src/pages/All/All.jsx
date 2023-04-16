
import Footer from "../../components/Footer/Footer"

import Navbar from "../../components/Navbar/Navbar"
import Search from "../../components/Search/Search";
import { Outlet } from "react-router-dom"

const All = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default All