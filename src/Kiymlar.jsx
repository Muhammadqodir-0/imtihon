
import img1 from './img/plain-white-tshirt-png-1-Transparent-Images 1.png'
import img2 from './img/9-800x800 1.png'
import App from './App'
export default function Kiymlar() {
    return (
        <>

            <div className="row">
                <div className="col-3 "><img src={img1} alt="" />
                    <h3 className='kiym mt-4'>Футболка Белая</h3>
                    <h2 className='kiym'>230₴</h2>

                </div>
                <div className="col-3 "><img src={img2} alt="" />
                    <h3 className='kiym'>Футболка Белая</h3>
                    <h2 className='kiym'>230₴</h2></div>
                <div className="col-3"><img src={img1} alt="" />
                    <h3 className='kiym'>Футболка Белая</h3>
                    <h2 className='kiym'>230₴</h2></div>
                <div className="col-3"><img src={img2} alt="" />
                    <h3 className='kiym'>Футболка Белая</h3>
                    <h2 className='kiym'>230₴</h2></div>
            </div>

        </>
    )
}