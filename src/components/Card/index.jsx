import adList from "../../database/logements.json"
import "./Card.scss"

export default function Card () {
    
    
    return (
        <div className="cards">
            {adList.map((ad) => (
                    <a className="card" key={ad.id} href={`/logement/${ad.id}`} style={{backgroundImage: `linear-gradient(#ffffff00, #00000050), url(${ad.cover})` }}> 
                        <p className="card__text">{ad.title}</p>
                    </a>
            ))}
        </div>
    )
} 
