import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Card from "../../components/Card"


export default function Home () {
    return (
        <div className="pageContainer">
            <Header />
            <Banner />
            <Card />
            <Footer />
        </div>
    )
}