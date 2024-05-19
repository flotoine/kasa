import left from "../../assets/chevron-left-solid.svg"
import right from "../../assets/chevron-right-solid.svg"
import "./Slideshow.scss"

function NextSlide () {
    let currentSlide = document.querySelector(".slideshow-container__picture--displayed")
    let nextSlide = currentSlide.nextElementSibling
    if (nextSlide.className === "slideshow-container__buttons") {
        currentSlide.className = ""
        currentSlide.className = "slideshow-container__picture--hidden"

        let firstSlide = document.getElementById("picture-0")
        firstSlide.className = ""
        firstSlide.className = "slideshow-container__picture--displayed"
    } else {
    currentSlide.className = ""
    currentSlide.className = "slideshow-container__picture--hidden"
    
    nextSlide.className = ""
    nextSlide.className = "slideshow-container__picture--displayed"
    }
}

function PreviousSlide () {
    let currentSlide = document.querySelector(".slideshow-container__picture--displayed")
    let previousSlide = currentSlide.previousElementSibling

    if (previousSlide === null) {

    } else {
        currentSlide.className = ""
    currentSlide.className = "slideshow-container__picture--hidden"

    previousSlide.className = ""
    previousSlide.className = "slideshow-container__picture--displayed"
    }
}

export default function Slideshow ({pictures}) {
    return (
    <div className="slideshow-container">
        {pictures.map((picture, index) => (index===0) ? (
            <div key={index} className="slideshow-container__picture--displayed" id={`picture-${index}`}>
                <img src={picture} alt="logement"/>
                <div className="slideshow-container__picture__subtext">{index+1}/{pictures.length}</div>
            </div>
        ):
        (
            <div key={index} className="slideshow-container__picture--hidden">   
                <img src={picture} alt="logement"/>
                <div className="slideshow-container__picture__subtext">{index+1}/{pictures.length}</div>
            </div>
        )
        
        )}
        <div className="slideshow-container__buttons">
            <img className="slideshow-container__button" src={left} alt="bonton précédent" onClick={PreviousSlide}/>
            <img className="slideshow-container__button" src={right} alt="bouton suivant" onClick={NextSlide}/>
        </div>
    </div>)
}