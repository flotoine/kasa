import { useParams } from "react-router-dom"
import adList from "../../database/logements.json"
import ErrorPage from "../error-page";

export default function Offer () {
    let { offerId } = useParams();
    let adExists = (adList.map((ad) => (ad.id))).includes(offerId)

    return (
        <div>
            {adExists ? (
                adList.map((ad) => (ad.id === offerId ? 
                    <div>
                                <img src={ad.pictures[1]} alt = "logement"></img>
                                <h1>{ad.title}</h1>
                                <p>{ad.location}</p>
                                <div>{ad.equipments}</div>
                                <div>{ad.host.name}</div>
                                <img src={ad.host.picture} alt ="propriétaire"/>
                                <div>{ad.rating}</div>
                                <div>
                                    {ad.description}
                                </div>
                                <div>
                                    {ad.tags}
                                </div>
                    </div>
                    :null))
                ) : 
                (ErrorPage())}
        </div>
    )
}