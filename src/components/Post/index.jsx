import { PostSection, ImgDiv, InputForm, UrlInput, ComentInput } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Post() {

    const authorization = JSON.parse(localStorage.getItem("authorization"));
    const [userInfo, setUserInfo] = useState({
        name: '',
        picture: ''
    });
    const [postInfos, setPostInfos] = useState({
        link: '',
        commenter: ''
    });
    const [loading, setLoading] = useState(false);

    function postPost(e) {
        setLoading(true);
        e.preventDefault();
        const { link, commenter } = postInfos;
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
            })
            .catch(e => {
                console.log(e);
                alert("Houve um erro ao publicar seu link");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `${authorization}`
            }
        }
        axios.get("http://localhost:5000/getUser", config)
            .then((res) => {
                const { data } = res;
                setUserInfo(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <PostSection>
            <ImgDiv>
                <img src={userInfo.picture} alt="avatar-photo" />
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
                <button disabled={loading} type="submit">{!loading ? 'Publish' : 'Publishing...'}</button>
            </InputForm>
        </PostSection>
    );
}
