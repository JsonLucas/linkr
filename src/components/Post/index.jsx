import { useState } from "react";
import { setNewPost } from "../../api/services";
import { PostSection, ImgDiv, InputForm, UrlInput, ComentInput } from "./style";

export default function Post({ counter, setCounter }) {
    const [postInfos, setPostInfos] = useState({
        link: '',
        commenter: ''
    });
    const [loadingPost, setLoadingPost] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    async function postPost(e) {
        e.preventDefault();
        setLoadingPost(true);
        try {
            const { link, commenter } = postInfos;
            const token = JSON.parse(localStorage.getItem("authorization"));
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const body = { link, commenter };
            const response = await setNewPost(body, config);
            if (response.status === 201) {
                alert("Publicação postada!");
                setPostInfos({ link: '', commenter: '' });
                setCounter(counter + 1);
            } else {
                alert("Houve um erro ao publicar seu link");
            }
            setLoadingPost(false);
        } catch (e) {
            console.log(e.message);
        }
    }
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
                    disabled={loadingPost}
                    onChange={e => setPostInfos({ ...postInfos, link: e.target.value })}
                />
                <ComentInput
                    cols="30"
                    value={postInfos.commenter}
                    rows="10"
                    disabled={loadingPost}
                    placeholder="Awesome article about #javascript"
                    onChange={e => setPostInfos({ ...postInfos, commenter: e.target.value })}
                ></ComentInput>
                <button disabled={loadingPost} type="submit">{!loadingPost ? 'Publish' : 'Publishing...'}</button>
            </InputForm>
        </PostSection>
    );
}
