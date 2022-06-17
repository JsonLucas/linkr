import axios from "axios";
import { useEffect, useState } from "react";

import { FeedSection, ImgDiv, InfoDiv, LinkDiv } from "./style";

export default function Feed() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/getPosts')
            .then((res) => {
                setPosts(res.data);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(false);
            })
    }, []);

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
                                <span>{el.name}</span>
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