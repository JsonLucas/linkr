import { MainTimeline, Posts, TimelineTittle } from "./style";
import Feed from "../../components/Feed";
import Header from "../../components/Header";

export default function Timeline() {
    return (
        <MainTimeline>
            <Header />
            <Posts>
                <TimelineTittle>timeline</TimelineTittle>
                <Feed />
            </Posts>
        </MainTimeline>
    )
}