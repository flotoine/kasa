import unrollArrow from "../../assets/chevron-up-solid.svg"
import "./Collapse.scss"

export default function Collapse ({title, content}) {
    return (
            <div className="collapseWrapper"> 
                <div className="collapseWrapper__top">
                    <div className="collapseWrapper__top__title"> 
                    {title}
                    </div>
                    <img className="collapseWrapper__top__arrow" src={unrollArrow} alt="bouton dérouler" />
                </div >
                <div className="collapseWrapper__textContainer">
                <p>{content}</p>
                </div>
            </div>
    )
}
