import Navbar from "./components/Navbar.jsx"
import reklama from"./assets/Rectangle 41.png"
import virusIcon from './assets/virus@2x.png'
import NewCard from "./components/NewCard.jsx"
import MiniCard from "./components/Minicard.jsx"
import Footer from "./components/Footer.jsx"
import { Link } from "react-router"
import telegramlogo from "./assets/Vector (2).png"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
          <Navbar/>
          <div className="container mt-4">
        <div className="row subheading px-4">
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <h4>Политика</h4>
        <div className="row">
          <div className="col-8">

          <NewCard img="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgaQ4COK8puNLcFD2R9r9rkl8wyVO-slKhPq~-wslAfqjMusTZ5x5kbN3dt-V0wysIoGiQaIWPBIihB7SmNUeBhQiO-LrBg69HOju4s3UUyBws0l4~xc22ZlUFSWFB1nWS-zpVJh7hcyQnBsh8JSzqoNAzl3U0uwGYPU4sMv6GKJEHe7q5UNQ7q3xTVhIF0czEl0MmzXuyrVc7Y2S9WgFKf15okZPhBBUFyIRi~~msKSmvYhFJJbFX2LQX0iVzpXCGCwgpWqjtny9~KHiv9dNg~K~DceLhJAbg1v9sgiZir6PCwfkpT8PbLky86~JF97wP2WlvZ43mj8ggkR3DDJzg__"
            p1="По факту прорыва Сардобинского водохранилища 
возбуждено уголовное дело"
            p2="После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/c0f3/1d6e/4008ba3214bf3516140990d3b4535a71?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czecs7vpUCxrCth6Y4GTigsju3ak2Lhfqg~JrJHc2p8pmwj7E89kcgp3F6yQqekr~iJclaTBvx6EmjFLKhhgprY7IaUsk01kKjHcuzLNA0XvrSfGe0YFDvehdo36O3BGDtaSMWDnkVaBI-zu9~KklPxAVvcY1cD3tSoHHoGo3j07PhIaUbamol--BlsbF03Qg73lmf80RLH27eLGFBw7BoZFUeyDxNxo1MaSWUq7DiW7sV2xJ0P~w61ZcNzimF5Qm-GzQuRsCwxd-LZTALvgkjiIsMPX7ZKBRM3M8aCgODgDozS4GjOEBZkM9gok46Gh-OuSBkffuupyZd47ytss4w__"
            p1="Мирзиёев: «Нам следовало бы принять некоторые правила 
карантина как часть повседневной жизни»"
p2="Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/a2e6/4bc3/dad2f19f59ada22009fde0e8a4256c23?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6FKLlKW3m0PaICEQdvK346U97fmPFs2wuM4PQo3jZW1-7N4zRu2yb~l56ybszb4I6H726dSPMRKrFny0GvrM4XurVbtyJuZl2R~V1qynQS~7Zbzl5cQZfm4bOUCNIZ5OJYw8PKPSwtjzI3tgq0WFFUYBRXZCz7m6BpzGUYQWjlctbcp03-RnFBj9T8lHegULgY2ixO~Zi2CxRL3-tOzf8~9nLTTb4ChaiAPv6iGYApMq-yMaB6umn5pJK-mbttjwSZ9QsgDBXkwe0bV5EzLBgt6TxAVYAZMwop7ZFU2dJMte2f2V0NNXb9~~Yt4c24HZKAa~NLwIdfz07SCGpSscA__"
            p1="В Ташкенте планируют ввести новую систему электронных проездных билетов"
            p2="Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgaQ4COK8puNLcFD2R9r9rkl8wyVO-slKhPq~-wslAfqjMusTZ5x5kbN3dt-V0wysIoGiQaIWPBIihB7SmNUeBhQiO-LrBg69HOju4s3UUyBws0l4~xc22ZlUFSWFB1nWS-zpVJh7hcyQnBsh8JSzqoNAzl3U0uwGYPU4sMv6GKJEHe7q5UNQ7q3xTVhIF0czEl0MmzXuyrVc7Y2S9WgFKf15okZPhBBUFyIRi~~msKSmvYhFJJbFX2LQX0iVzpXCGCwgpWqjtny9~KHiv9dNg~K~DceLhJAbg1v9sgiZir6PCwfkpT8PbLky86~JF97wP2WlvZ43mj8ggkR3DDJzg__"
            p1="По факту прорыва Сардобинского водохранилища 
возбуждено уголовное дело"
            p2="После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/c0f3/1d6e/4008ba3214bf3516140990d3b4535a71?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czecs7vpUCxrCth6Y4GTigsju3ak2Lhfqg~JrJHc2p8pmwj7E89kcgp3F6yQqekr~iJclaTBvx6EmjFLKhhgprY7IaUsk01kKjHcuzLNA0XvrSfGe0YFDvehdo36O3BGDtaSMWDnkVaBI-zu9~KklPxAVvcY1cD3tSoHHoGo3j07PhIaUbamol--BlsbF03Qg73lmf80RLH27eLGFBw7BoZFUeyDxNxo1MaSWUq7DiW7sV2xJ0P~w61ZcNzimF5Qm-GzQuRsCwxd-LZTALvgkjiIsMPX7ZKBRM3M8aCgODgDozS4GjOEBZkM9gok46Gh-OuSBkffuupyZd47ytss4w__"
            p1="Мирзиёев: «Нам следовало бы принять некоторые правила 
карантина как часть повседневной жизни»"
p2="Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/a2e6/4bc3/dad2f19f59ada22009fde0e8a4256c23?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6FKLlKW3m0PaICEQdvK346U97fmPFs2wuM4PQo3jZW1-7N4zRu2yb~l56ybszb4I6H726dSPMRKrFny0GvrM4XurVbtyJuZl2R~V1qynQS~7Zbzl5cQZfm4bOUCNIZ5OJYw8PKPSwtjzI3tgq0WFFUYBRXZCz7m6BpzGUYQWjlctbcp03-RnFBj9T8lHegULgY2ixO~Zi2CxRL3-tOzf8~9nLTTb4ChaiAPv6iGYApMq-yMaB6umn5pJK-mbttjwSZ9QsgDBXkwe0bV5EzLBgt6TxAVYAZMwop7ZFU2dJMte2f2V0NNXb9~~Yt4c24HZKAa~NLwIdfz07SCGpSscA__"
            p1="В Ташкенте планируют ввести новую систему электронных проездных билетов"
            p2="Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/a2e6/4bc3/dad2f19f59ada22009fde0e8a4256c23?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6FKLlKW3m0PaICEQdvK346U97fmPFs2wuM4PQo3jZW1-7N4zRu2yb~l56ybszb4I6H726dSPMRKrFny0GvrM4XurVbtyJuZl2R~V1qynQS~7Zbzl5cQZfm4bOUCNIZ5OJYw8PKPSwtjzI3tgq0WFFUYBRXZCz7m6BpzGUYQWjlctbcp03-RnFBj9T8lHegULgY2ixO~Zi2CxRL3-tOzf8~9nLTTb4ChaiAPv6iGYApMq-yMaB6umn5pJK-mbttjwSZ9QsgDBXkwe0bV5EzLBgt6TxAVYAZMwop7ZFU2dJMte2f2V0NNXb9~~Yt4c24HZKAa~NLwIdfz07SCGpSscA__"
            p1="В Ташкенте планируют ввести новую систему электронных проездных билетов"
            p2="Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgaQ4COK8puNLcFD2R9r9rkl8wyVO-slKhPq~-wslAfqjMusTZ5x5kbN3dt-V0wysIoGiQaIWPBIihB7SmNUeBhQiO-LrBg69HOju4s3UUyBws0l4~xc22ZlUFSWFB1nWS-zpVJh7hcyQnBsh8JSzqoNAzl3U0uwGYPU4sMv6GKJEHe7q5UNQ7q3xTVhIF0czEl0MmzXuyrVc7Y2S9WgFKf15okZPhBBUFyIRi~~msKSmvYhFJJbFX2LQX0iVzpXCGCwgpWqjtny9~KHiv9dNg~K~DceLhJAbg1v9sgiZir6PCwfkpT8PbLky86~JF97wP2WlvZ43mj8ggkR3DDJzg__"
            p1="По факту прорыва Сардобинского водохранилища 
возбуждено уголовное дело"
            p2="После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана."
            />
            <NewCard img="https://s3-alpha-sig.figma.com/img/c0f3/1d6e/4008ba3214bf3516140990d3b4535a71?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czecs7vpUCxrCth6Y4GTigsju3ak2Lhfqg~JrJHc2p8pmwj7E89kcgp3F6yQqekr~iJclaTBvx6EmjFLKhhgprY7IaUsk01kKjHcuzLNA0XvrSfGe0YFDvehdo36O3BGDtaSMWDnkVaBI-zu9~KklPxAVvcY1cD3tSoHHoGo3j07PhIaUbamol--BlsbF03Qg73lmf80RLH27eLGFBw7BoZFUeyDxNxo1MaSWUq7DiW7sV2xJ0P~w61ZcNzimF5Qm-GzQuRsCwxd-LZTALvgkjiIsMPX7ZKBRM3M8aCgODgDozS4GjOEBZkM9gok46Gh-OuSBkffuupyZd47ytss4w__"
            p1="Мирзиёев: «Нам следовало бы принять некоторые правила 
карантина как часть повседневной жизни»"
p2="Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни."
            />

          </div>
          <div className="col-4">
            <div className="row pointer-news px-2">

           <h5 className="mb-3">Cамые популярные новости</h5>

           <MiniCard/>
           <div className="mini-card-divider">
           <hr className="mini-card-divider px-3"/>
           </div>
           <MiniCard/>
           <div className="mini-card-divider">
           <hr className="mini-card-divider px-3"/>
           </div>
           <MiniCard/>
           <div className="mini-card-divider">
           <hr className="mini-card-divider px-3"/>
           </div>
           <MiniCard/>
            </div>
            <img className="img-fluid" src={reklama} alt="" />
          </div>
        </div>
      </div>
       <Footer/>
    </>
  )
}

export default App
