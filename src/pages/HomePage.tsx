import {Layout} from "../components/layout/Layout";
import {Card} from "../components/ui/Card";

import "./HomePage.scss"

export function HomePage() {
    return (
        <Layout>
            <Card className={"profile"}>
                <div className={"image"}>
                    <img src={"/image/erick-ruiz-01.jpg"}/>
                </div>
                <div className={"section"}>
                    <div className={"title"}>Erick Ruiz</div>
                    <div className={"subtitle"}>Software Engineer</div>
                    <div className={"subtitle"}>Fullerton, CA</div>
                </div>
            </Card>
        </Layout>
    )
}