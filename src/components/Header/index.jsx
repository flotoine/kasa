import { Link } from 'react-router-dom'
import kasaLogo from '../../assets/kasa-logo.svg'

export default function Header () {
    return (
        <div className='navbar'>
            <img src={kasaLogo} alt="logo Kasa" className='navbar__logo'/> 
            <nav className='navbar__navlinks'>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>

        </div>
    )
}