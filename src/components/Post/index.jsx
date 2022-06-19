import { setNewPost } from "../../api/services";
import { useState, useEffect } from "react";
import { PostSection, ImgDiv, InputForm, UrlInput, ComentInput } from "./style";

export default function Post({ counter, setCounter }) {
    const [postInfos, setPostInfos] = useState({
        link: '',
        commenter: ''
    });
    const [loading, setLoading] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    async function postPost(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const authorization = JSON.parse(localStorage.getItem("authorization"));
            const { token } = authorization;
            const { link, commenter } = postInfos;
            const body = { link, commenter };
            const response = await setNewPost(body, { authorization: token });
            if (response.status === 201) {
                alert("Publicação postada!");
                setPostInfos({ link: '', commenter: '' });
                setCounter(counter + 1);
            } else {
                alert("Houve um erro ao publicar seu link");
            }
            setLoading(false);
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
