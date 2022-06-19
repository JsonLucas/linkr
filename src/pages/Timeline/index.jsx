import { MainTimeline, Posts } from "./style";
import Feed from "../../components/Feed";
import Header from "../../components/Header";

export default function Timeline() {
    return (
        <MainTimeline>
            <Header />
            <Posts>
                <h1>timeline</h1>
                <Feed />
            </Posts>
        </MainTimeline>
    )
}