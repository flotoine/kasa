import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import aboutList from "../../database/about.json"

export default function About () {
    return (
        <div>
            <Banner />
            {aboutList.map((aboutItem) => 
                <div key ={aboutItem.id}>
                    <Collapse 
                        title = {aboutItem.title}
                        content = {aboutItem.content}
                    />
                </div>
            )}
        </div>
    )
}