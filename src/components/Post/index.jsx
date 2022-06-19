import { PostSection, ImgDiv, InputForm, UrlInput, ComentInput } from "./style";
import axios from "axios";
import { useState, useEffect, setUserInfo } from "react";

export default function Post({ userInfo, setCounter }) {

    const authorization = JSON.parse(localStorage.getItem("authorization"));
    const [postInfos, setPostInfos] = useState({
        link: '',
        commenter: ''
    });
    const [loading, setLoading] = useState(false);
    function postPost(e) {
        e.preventDefault();
        setLoading(true);
        const { link, commenter } = postInfos;
        const config = {
            headers: {
                "authorization": `${authorization}`
            }
        }
        axios.post("http://localhost:5000/newPost", {
            link,
            commenter
        }, config)
            .then(() => {
                alert("Publicação postada!");
                setPostInfos({ link: '', commenter: '' });
                setCounter();
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
                "authorization": `${authorization}`
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
                <img src={userInfo.picture} alt="user avatar" />
            </ImgDiv>
            <InputForm onSubmit={postPost}>
                <h2>What are you going to share today?</h2>
                <UrlInput
                    type="text"
                    value={postInfos.link}
                    placeholder="http://..."
                    required
                    disabled={loading}
                    onChange={e => setPostInfos({ ...postInfos, link: e.target.value })}
                />
                <ComentInput
                    cols="30"
                    value={postInfos.commenter}
                    rows="10"
                    disabled={loading}
                    placeholder="Awesome article about #javascript"
                    onChange={e => setPostInfos({ ...postInfos, commenter: e.target.value })}
                ></ComentInput>
                <button disabled={loading} type="submit">{!loading ? 'Publish' : 'Publishing...'}</button>
            </InputForm>
        </PostSection>
    );
}
