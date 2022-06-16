import { MainTimeline, Posts } from "./style";
import Post from "./../../components/Post";
import Feed from "../../components/Feed";

export default function Timeline() {
    return (
        <MainTimeline>
            <Posts>
                <h1>timeline</h1>
                <Post />
                <Feed />
            </Posts>
        </MainTimeline>
    )
}