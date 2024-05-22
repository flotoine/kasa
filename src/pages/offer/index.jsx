import { useParams } from "react-router-dom"
import adList from "../../database/logements.json"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";
import StarRating from "../../components/StarRating";
import Tags from "../../components/Tags";

import "./offer.scss"

export default function Offer () {
    let { offerId } = useParams();
    let adExists = (adList.map((ad) => (ad.id))).includes(offerId)

    return (
        <div className="pageContainer">
            <Header />
            {adExists ? (
                adList.map((ad) => (ad.id === offerId ? 
                    <div key={ad.id} className="offer">
                                <div>
                                    <Slideshow
                                        pictures = {ad.pictures}
                                    />
                                </div>
                                <div className="offer__info"> 
                                    <h1 className="offer__info__title">{ad.title}</h1>
                                    <p className="offer__info__location">{ad.location}</p>
                                    
                                    <div className="offer__info__host">
                                        <div className="offer__info__host__name">{ad.host.name}</div>
                                        <div className="offer__info__host__pic">
                                            <img src={ad.host.picture} alt ="propriétaire"/>
                                        </div>
                                    </div>
                                    <div className="offer__info__stars">
                                        <StarRating 
                                            rating = {ad.rating}
                                        />
                                    </div>
                                    
                                    <div className="offer__info__tags">
                                        <Tags
                                            tags = {ad.tags}
                                        />
                                    </div>
                                </div>
                                <div className="offer__collapses">
                                    <Collapse 
                                        title = "Description"
                                        content = {ad.description}
                                    />
                                    <Collapse 
                                        title = "Équipements"
                                        content = {ad.equipments.map((equipment) => (<div>{equipment}</div>))}
                                    />
                                </div>
                    </div>
                    :null))
                ) : 
                window.location.href = "/logement-non-trouve"}
            <Footer />
        </div>
    )
}