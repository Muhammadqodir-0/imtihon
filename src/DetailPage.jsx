import Navbar from "./components/Navbar.jsx"
import reklama from "./assets/Rectangle 41.png"
import MiniCard from "./components/Minicard.jsx"
import Footer from "./components/Footer.jsx"
import { Link } from "react-router"
import img1 from './assets/Rectangle 52.png'
import img2 from './assets/Rectangle 10.png'
import img3 from './assets/Rectangle 11.png'
import img4 from './assets/Rectangle 12.png'

function DetailPage() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <div className="container pt-4">
                <div className="row">
                    <div className="col-8 pt-5">
                        <img className="w-100" src={img1} alt="" />
                        <div className="pt-4">
                            <p className="Detail-p"><b>19 мая состоялось видеоселекторное совещание, посвященное дополнительным мерам поддержки предпринимательства.</b></p>
                            <p className="Detail-p">
                                По данным пресс-службы главы государства, из-за пандемии в Узбекистане число бедных и безработных увеличится, а доходы семей уменьшатся. На совещании обсуждены дополнительные меры и приоритетные задачи в этом направлении</p>

                            <p className="Detail-p">
                                Прежде всего, серьезное внимание уделено обеспечению гарантий прав предпринимателей и неприкосновенности их имущества.
                            </p>
                            <p className="Detail-p">
                                Прежде всего, серьезное внимание уделено обеспечению гарантий прав предпринимателей и неприкосновенности их имущества
                            </p>
                            <p className="Detail-p">
                                <b>
                                    «Предупреждаю всех хокимов. Если имущество хоть одного предпринимателя будет изъято незаконно, хоким одной лишь отставкой не отделается, но и ответит перед законом», - подчеркнул Шавкат Мирзиёев.
                                </b>
                            </p>
                            <p className="Detail-p">
                                Компетентным ведомствам даны указания усилить ответственность за нарушение неприкосновенности собственности, обеспечить полноценное исполнение решений суда о компенсации имущества предпринимателей.
                            </p>
                            <p className="Detail-p">
                                Согласно поручению президента деловая активность в каждом районе и городе будет анализироваться на ежемесячной основе.
                            </p>
                            <p className="Detail-p">
                                Бизнес-омбудсман будет вносить правительству информацию о хокимах районов и городов, которые допускают нарушения прав и неприкосновенности собственности предпринимателей.
                            </p>
                            <p className="Detail-p">
                                Кабинетом Министров будет рассматриваться вопрос о соответствии должности хокимов городов и районов, которые не решают проблемы предпринимателей и не работают с ними в достаточной мере.
                            </p>
                            <ul className="list-unstyled d-flex navbar-links navbar-linksm">
                                <li><Link>#хоким</Link></li>
                                <li><Link>#Шавкат</Link></li>
                                <li><Link>Мирзиёев</Link></li>
                                <li><Link>#пандемия</Link></li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row pointer-news px-2">

                            <h5 className="mb-3">Cамые популярные новости</h5>

                            <MiniCard />
                            <div className="mini-card-divider">
                                <hr className="mini-card-divider px-3" />
                            </div>
                            <MiniCard />
                            <div className="mini-card-divider">
                                <hr className="mini-card-divider px-3" />
                            </div>
                            <MiniCard />
                            <div className="mini-card-divider">
                                <hr className="mini-card-divider px-3" />
                            </div>
                            <MiniCard />
                        </div>
                        <img className="img-fluid" src={reklama} alt="" />
                    </div>
                </div>
            </div>

            <div className="container">
                <h5><b>Новости по теме</b></h5>
                <div className="row">
                    <div className="col-4">
                        <img className="w-100 pb-2" src={img2} alt="" />
                        <p className="karantin"><b>Мирзиёев рассказал, зачем было построено
                            Сардобинское водохранилище</b></p>
                        <p className="date">05:28 / 16.05.2020</p>
                    </div>
                    <div className="col-4 ">
                        <img className="w-100 pb-2" src={img3} alt="" />
                        <p className="karantin"><b>Карантин в Узбекистане продлен до 1 июня</b></p>
                        <p className="date">05:28 / 16.05.2020</p>
                    </div>
                    <div className="col-4">
                        <img className="w-100 pb-2" src={img4} alt="" />
                        <p className="karantin"><b>Обмелевшая Сардоба: стихия или
                            человеческий фактор?</b></p>
                        <p className="date">05:28 / 16.05.2020</p>
                    </div>
                </div>

            </div>


            <Footer />
        </>
    )
}
export default DetailPage
