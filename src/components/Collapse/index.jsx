import unrollArrow from "../../assets/chevron-up-solid.svg"
import "./Collapse.scss"

export default function Collapse ({title, content}) {
    function toggleDrawer () {
        let drawer = document.getElementById(`collapseWrapper__textContainer${title}`)
        drawer.className === "collapseWrapper__textContainer--closed collapseWrapper__textContainer" || 
        drawer.className === "collapseWrapper__textContainer" ?
            drawer.className = "collapseWrapper__textContainer--open collapseWrapper__textContainer" :
            drawer.className = "collapseWrapper__textContainer--closed collapseWrapper__textContainer"

        let arrow = document.getElementById(`collapseWrapper__top__arrow${title}`)
        arrow.className === "collapseWrapper__top__arrow collapseWrapper__top__arrow--closed" ?
            arrow.className = "collapseWrapper__top__arrow collapseWrapper__top__arrow--open" :
            arrow.className = "collapseWrapper__top__arrow collapseWrapper__top__arrow--closed"
    }

    return (
            <div className="collapseWrapper"> 
                <div className="collapseWrapper__top">
                    <div className="collapseWrapper__top__title"> 
                        {title}
                    </div>
                    <img onClick={toggleDrawer} id={`collapseWrapper__top__arrow${title}`} className="collapseWrapper__top__arrow collapseWrapper__top__arrow--closed" src={unrollArrow} alt="bouton dérouler" />
                </div>
                <div id={`collapseWrapper__textContainer${title}`} className="collapseWrapper__textContainer">
                <p>{content}</p>
                </div>
            </div>
    )
}
