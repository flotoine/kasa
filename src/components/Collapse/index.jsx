import unrollArrow from "../../assets/chevron-up-solid.svg"
import "./Collapse.scss"

export default function Collapse () {
    return (
        
        <div className="collapseWrapper">
            <div className="collapseWrapper__top">
                <div className="collapseWrapper__top__title"> 
                Fiabilité
                </div>
                <img className="collapseWrapper__top__arrow" src={unrollArrow} alt="dérouler" />
            </div >
            <div className="collapseWrapper__textContainer">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
        </div>
    )
}