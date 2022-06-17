import { MainTimeline, Posts } from "./style";
import Post from "./../../components/Post";
import Feed from "../../components/Feed";
import Header from "../../components/Header";

export default function Timeline() {
    return (
        <MainTimeline>
            <Header />
            <Posts>
                <h1>timeline</h1>
                <Post />
                <Feed />
            </Posts>
        </MainTimeline>
    )
}