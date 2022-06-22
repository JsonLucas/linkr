import { useNavigate } from "react-router";
import { getPostsRequest } from "../../api/services";
import { useEffect, useState } from "react";
import { FeedSection, ImgDiv, InfoDiv, LinkDiv } from "./style";
import Loading from "../Loading";
import Post from "../Post";

export default function Feed() {
    const [counter, setCounter] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loadingFeed, setLoadingFeed] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('authorization'));
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
                const response = await getPostsRequest(config);
                setPosts(response.data);
            } catch (e) {
                alert('algum erro ocorreu.');
                console.log(e.message);
            }
            setLoadingFeed(false);
        }
        getPosts();
    }, [counter]);

    const userPosts = (e) => {
        const user = e.target;
        const data = user.title.split('<>');
        localStorage.setItem('userData', JSON.stringify(data));
        navigate(`/users/${data[1]}`);
    }
    return (
        <>
            <Post counter={counter} setCounter={setCounter} />
            {loadingFeed && <Loading />}
            {!loadingFeed && <Fragment>
                {posts.map((el, index) => {
                    return (
                        <FeedSection key={index}>
                            <ImgDiv isSearchResult={false}>
                                <img src={el.picture} alt="avatar-img" />
                            </ImgDiv>
                            <InfoDiv>
                                <span title={`${el.name}<>${el.id}<>${el.picture}`}
                                    onClick={userPosts}>{el.name}</span>
                                <h2>{el.commenter}</h2>
                                <a href={el.link}>
                                    <LinkDiv>
                                    </LinkDiv>
                                </a>
                            </InfoDiv>
                        </FeedSection>
                    )
                })}
                </>
            }
        </>
    );
}