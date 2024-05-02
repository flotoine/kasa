import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

export default function About () {
    return (
        <div>
            <Banner />
            <ul>
                <Collapse />
                <li>Fiabilité</li>
                <li>Respect</li>
                <li>Service</li>
                <li>Sécurité</li>
            </ul>
        </div>
    )
}