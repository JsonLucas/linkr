import { MainHome, Posts } from "./style";
import Post from "./../../components/Post";

export default function Home(){
    return (
        <MainHome>
            <Posts>
            <h1>timeline</h1>
                <Post/>
            </Posts>
        </MainHome>
    )
}