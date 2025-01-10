import Navbar from "./navbar";
import { Outlet } from "react-router";

export default function MainLayout(){
    return(<>
    <div className="container bg-black">
     <Navbar/>
     <div >
        <Outlet/>
     </div>
     </div>
    </>)
}