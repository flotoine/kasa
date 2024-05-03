import kasaLogoWhite from '../../assets/kasa-logo-white.svg'
import './Footer.scss'

export default function Footer () {
    return (
        <footer className='footer'>
            <img src={kasaLogoWhite} alt="logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}