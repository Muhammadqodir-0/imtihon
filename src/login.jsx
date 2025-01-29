import Navbar from "./components/Navbar.jsx"
import { Link } from "react-router"
import Footer from "./components/Footer.jsx"
import fezbok from "./assets/facebook-r 1.png"
import qush from "./assets/twitter-r 1.png"
import odam from "./assets/odnoklasnik-r 1.png"
import telegramlogo from "./assets/Vector (2).png"
import app from "./assets/appleStore-w 1.png"
import pley from "./assets/googlePlay-w 1.png"


export default function Login() {
    return (
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
                            <div className="align-items-center d-flex  g-3 ">
                                <input placeholder="Код" type="text" className="form-control w-25" />
                                <p className="m-0">4 k 7 Z a</p>
                            </div>
                            <button type="submit" className="submit-btn">Отправить</button>
                        </form>
                    </div>
                    <div className="col-6 ">
                        <div className="ligin-silka ms-5">
                            <h5 to='/' className=" navbar-logo  login-logo">NAMANGANLIKLAR24</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p className="login-p">Электронная почта</p>
                                    <p className="login-p">Социальные сети</p>
                                    <p className="login-p">Телеграм канал </p>
                                    <p className="login-p">Мобильная приложение </p>
                                </div>
                                <div className="col-6">
                                    <p className="login-p y">info@namanganliklar24.uz </p>
                                    <div className="text-end">
                                        <img src={fezbok} alt="" />
                                        <img className="px-3" src={qush} alt="" />
                                        <img src={odam} alt="" />
                                    </div>
                                    <div className="text-end">
                                        <Link to='https://t.me/fayz_umar_g1' type="button" className="navbar-telegram d-inline-block"><img src={telegramlogo} className="me-2" alt="" />Подписатся</Link>
                                    </div>
                                    <div className="mt-2 text-end">
                                        <img className="me-3" src={app} alt="" />
                                        <img src={pley} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}