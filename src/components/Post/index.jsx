import { PostSection, ImgDiv, InputForm, UrlInput, ComentInput } from "./style";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Post() {

    const navigate = useNavigate();

    const authorization = JSON.parse(localStorage.getItem("authorization"));

    const [postInfos, setPostInfos] = useState({
        link: '',
        commenter: ''
    });

    function postPost(e) {
        e.preventDefault();
        const { link, commenter } = postInfos;
        console.log(postInfos)
        console.log(authorization);
        const config = {
            headers: {
                "Authorization": `${authorization}`
            }
        }
        axios.post("http://localhost:5000/newPost", {
            link,
            commenter
        }, config)
            .then(() => {
                alert("Publicação postada!");
                navigate("/timeline");
            })
            .catch(e => {
                console.log(e);
                alert("Opa, houve um erro ao tentar fazer sua publicação");
            });
    }

    return (
        <PostSection>
            <ImgDiv>
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="avatar-photo" />
            </ImgDiv>
            <InputForm onSubmit={postPost}>
                <h2>What are you going to share today?</h2>
                <UrlInput
                    type="text"
                    value={postInfos.link}
                    placeholder="http://..."
                    required
                    onChange={e => setPostInfos({ ...postInfos, link: e.target.value })}
                />
                <ComentInput
                    cols="30"
                    value={postInfos.commenter}
                    rows="10"
                    placeholder="Awesome article about #javascript"
                    onChange={e => setPostInfos({ ...postInfos, commenter: e.target.value })}
                ></ComentInput>
                <button type="submit">Publish</button>
            </InputForm>
        </PostSection>
    );
}