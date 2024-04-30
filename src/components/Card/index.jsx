import adList from "../../database/logements.json"

export default function Card () {
    return (
        <div className="cards">
            {adList.map((ad) => (
                <div className="card" key={ad.id}> 
                    <p className="card__text">{ad.title}</p> 
                    
                </div>
            ))}
        </div>
    )
} 
