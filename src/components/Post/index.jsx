import {PostSection, ImgDiv, InputDiv, UrlInput, ComentInput} from "./style";
import axios from "axios";
export default function Post(){

    function getPosts(){
        axios.get("http://localhost:5000/posts")
    }

    return(
        <PostSection>
            <ImgDiv>
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="avatar-photo" />
            </ImgDiv>
            <InputDiv>
                <h2>What are you going to share today?</h2>
                <UrlInput type="text" placeholder="http://..."/>
                <ComentInput type="text" placeholder="Awesome article about #javascript "/>
                <button>Publish</button>
            </InputDiv>
        </PostSection>
    );
}