import { Link } from "react-router-dom"

export default function Home () {
    return (
        <div>
            <div className = "homeTopTile">Chez vous, partout et ailleurs</div>
            <div className = "cardWrapper">
                <div className="card">
                    <Link to='/logement'>Titre de la location</Link>
                </div>
            </div>
        </div>
    )
}