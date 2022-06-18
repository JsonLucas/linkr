import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FeedSection, ImgDiv, InfoDiv, LinkDiv } from "./style";

export default function Feed({ counter }) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoading(true);
        const authorizaztion = JSON.parse(localStorage.getItem('authorization'));
        axios.get('http://localhost:5000/getPosts', {headers: { authorizaztion }})
            .then((res) => {
                setPosts(res.data);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(false);
            })
    }, [counter]);

    const userPosts = (e) => {
        const userId = e.target;
        localStorage.setItem('userData', userId.className);
        navigate(`/users/${userId.innerHTML}`);
    }

    if (!loading) {
        return (
            <>
                {posts.map((el, index) => {
                    return (
                        <FeedSection key={index}>
                            <ImgDiv>
                                <img src={el.picture} alt="avatar-img" />
                            </ImgDiv>
                            <InfoDiv>
                                <span className={`${el.name}-${el.id}`} onClick={userPosts}>{el.name}</span>
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
        );
    }
}