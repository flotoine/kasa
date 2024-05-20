import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import aboutList from "../../database/about.json"

export default function About () {
    return (
        <div className="pageContainer">
            <Header />
            <Banner />
            <div className="collapse-container">
                {aboutList.map((aboutItem) => 
                    <div key ={aboutItem.id}>
                        <Collapse 
                            title = {aboutItem.title}
                            content = {aboutItem.content}
                        />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}