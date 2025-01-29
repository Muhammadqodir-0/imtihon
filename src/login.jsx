import Navbar from "./components/Navbar.jsx"
import { Link } from "react-router"
import Footer from "./components/Footer.jsx"

export default function Login(){
    return(
        <>
    <Navbar />
    <div className="container pt-3">
        <h5>Напишите нам</h5>
        <div className="row">

            <div className="col-6">
                <form className="contact-form" action="">
                <input placeholder="Имя" type="text" className="form-control " />
                <input placeholder="Электронная почта" type="email" className=" form-control" />
                <input placeholder="Номер телефона" type="text" className="form-control" />
                <input placeholder="Тема" type="text" className="form-control" />
                <textarea maxLength={1000} rows={10} placeholder="Текст" className="form-control" name="" id=""></textarea>
                <input className="w-25" type="file" />
                <div className= "align-items-center d-flex  g-3 ">
                <input placeholder="Код" type="text" className="form-control w-25" />
                <p className="m-0">4 k 7 Z a</p>
                </div>
                </form>
            </div>
            <div className="col-6"></div>
        </div>
    </div>
    <Footer />  
        </>
    )
}