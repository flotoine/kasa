import adList from "../../database/logements.json"
import "./Card.scss"

export default function Card () {
    return (
        <div className="cards">
            {adList.map((ad) => (
                <div className="card" key={ad.id} style={{backgroundImage: `linear-gradient(#ffffff00, #00000050), url(${ad.cover})` }}> 
                   {/* <img className="card__image" src={ad.cover} alt={ad.title} />  Style dans div ???? */}
                    <p className="card__text">{ad.title}</p>
                </div>
            ))}
        </div>
    )
} 
