import calendarIcon from '../assets/ic_outline-date-range.png'
import { Link } from 'react-router'
function NewCard(props){
return(
    <>
    <div className="row news-card my-3">
              <div className="col-4">
                <img className="img-fluid" src={props.img} alt="" />
              </div>
              <div className="col-8 d-flex flex-column justify-content-between">
                <Link to='/Detail'  className="title navbar-links">{props.p1}</Link>
                <p className="content">{props.p2}</p>
                <p className="date m-0"><img src={calendarIcon} alt="" />11:31 / 15.05.2020</p>
              </div>
            </div>
    </>
)
}


export default NewCard