import axios from "axios";
import { useEffect, useState } from "react";

import { FeedSection, ImgDiv, InfoDiv, LinkDiv } from "./style";

export default function Feed() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    function getPosts() {

    }

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
    }, [])

    if (!loading) {
        return (
            <>
                {posts.map(el => {
                    return (
                        <FeedSection>
                            <ImgDiv>
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar-img" />
                                {/* BOTÃO DE LIKE AQUI */}
                            </ImgDiv>
                            <InfoDiv>
                                <span>Juvenal Juvêncio</span>
                                <h2>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</h2>
                                <a href="#">
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