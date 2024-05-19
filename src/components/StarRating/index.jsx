import star from "../../assets/star-solid.svg"

export default function StarRating ({rating}) {
    let greyStars = 5 - rating;
    let output = [];
    for (var i = rating; i >= 1; i--)
        output.push('<img src={star} alt="étoile rouge">');
/*
    return (
        <div className="ratingStars">  
            {console.log(output.join(''))}  
        </div>
    ) */
}

//travailler le join