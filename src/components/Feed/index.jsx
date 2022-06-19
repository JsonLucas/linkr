import { useNavigate } from "react-router";
import { getPostsRequest } from "../../api/services";
import { useEffect, useState } from "react";
import { FeedSection, ImgDiv, InfoDiv, LinkDiv } from "./style";
import Loading from "../Loading";

export default function Feed({ counter }) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try{
                setLoading(true);
                const authorizaztion = JSON.parse(localStorage.getItem('authorization'));
                const { token } = authorizaztion
                const response = await getPostsRequest({ authorizaztion: token });
                if(response.status === 200){
                    setPosts(response.data);
                }else{
                    alert('algum erro ocorreu.');
                }
            }catch(e){
                console.log(e.message);
            }
            setLoading(false);
        }
        getPosts();
    }, [counter]);

    const userPosts = (e) => {
        const user = e.target;
        const data = user.title.split('<>');
        localStorage.setItem('userData', JSON.stringify(data));
        navigate(`/users/${data[1]}`);
    }

    if (!loading) {
        return (
            <>
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
        );
    }else{
        return (<Loading />);
    }
}