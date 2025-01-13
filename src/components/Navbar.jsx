import { Link } from "react-router"
import '../index.css'

export default function Navbar() {


    return (
        <>

            <div className="my-navbar pt-5">
                <div className="container">
                    <div>
                        <div>
                            <Link to={'/'} className="navbar-logo">NAMASGANLIKLAR24</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}