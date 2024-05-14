import { useParams } from "react-router-dom"
import offer from "../../database/logements.json"


export default function Offer () {
    let { offerId } = useParams();
    console.log(offerId);

    console.log(offer[1])
    return (
        <div>
            <img src={offer[1].pictures[1]} alt = "logement"></img>
            <h1>{offer[1].title}</h1>
            <p>{offer[1].location}</p>
            <div>{offer[1].equipments}</div>
            <div>{offer[1].host.name}</div>
            <img src={offer[1].host.picture} alt ="propriétaire"/>
            <div>{offer[1].rating}</div>
            <div>
                {offer[1].description}
            </div>
            <div>
                 {offer[1].tags}
            </div>
        </div>
    )
}