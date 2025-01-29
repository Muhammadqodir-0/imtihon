import telegramlogo from "../assets/Vector (2).png"
import { Link } from "react-router"
export default function Footer() {
  return (
    <>
      <div className="fotter-div mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <Link to='/' className="navbar-logo footer-logo">NAMANGANLIKLAR24</Link>
            <div className="d-flex">
              <p className="fotter-p d-flex text-white pt-2">Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</p>
              <Link to='https://t.me/fayz_umar_g1' type="button" className="footer-telegram pt-2"><img src={telegramlogo} className="me-2" alt="" />Подписатся</Link>
            </div>
          </div>
          <hr />
          <dir className="row p-0">
            <div className="col-5">
              <p className="text-white">О сайте </p>
              <p className="text-white">Воспроизводство, копирование, тиражирование, распространение и иное использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.</p>
            </div>
            <div className="col-3">
              <p className="text-white">Информация о сайте</p>
              <Link to={'/Login'} className="text-white">Напишите нам</Link>
              <p className="text-white">Реклама</p>
              <p className="text-white">Прислать новость</p>
            </div>
            <div className="col-4">
              <p className="text-white">Использование материалов</p>
              <p className="text-white">Темы дня </p>
              <p className="text-white">Наша команда</p>
            </div>
          </dir>
        </div>
      </div>
    </>)
}

