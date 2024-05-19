import star from "../../assets/star-solid.svg"
import "./StarRating.scss"

const redStarString = `<img class="star__colored" src=${star} alt="étoile rouge">`
const grayStarString = `<img class="star__gray" src=${star} alt="étoile grise">`

export default function StarRating ({rating}) {
    let greyStars = 5 - rating;
    let output = [];
    for (let i = rating; i >= 1; i--)
        output.push(redStarString);

    for (let j = greyStars; j >= 1; j--)
        output.push(grayStarString)

    return (
        <div className="star" dangerouslySetInnerHTML={{ __html: output.join('') }}>  
            
        </div>
    ) 
}
