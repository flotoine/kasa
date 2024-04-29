import { Link } from 'react-router-dom'

export default function Header () {
    return (
        <nav>
            <div> Logo Kasa </div> {/*future website logo */}
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </div>

        </nav>
    )
}