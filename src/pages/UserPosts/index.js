import { Fragment, useState, useEffect } from "react";
import { getUserPostsRequest } from "../../api/services";
import { FeedSection, ImgDiv, InfoDiv, LinkDiv } from "../../components/Feed/style";
import { RowSubtitlePage, SubtitlePage, Wrapper } from "./style";
export default function UserPosts() {
    const [userPosts, setUserPosts] = useState();
    const [loading, setLoading] = useState({status: false, message: 'sucess'});
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const getUserPosts = async () => {
            try{
                const auxUserData = localStorage.getItem('userData').split('-');
                const authorization = JSON.parse(localStorage.getItem('authorization'));
                setUserData(auxUserData);
                const response = await getUserPostsRequest(auxUserData[1], { authorization });
                if(response.status === 200){
                    setLoading({status: true, message: 'sucess'});
                    setUserPosts(response.data);
                }else{
                    setLoading({status: true, message: 'failure'});
                    alert(response.statusText);
                }
            }catch(e){
                console.log(e);
                alert(e.message);
            }
        };
        getUserPosts();
    }, []);
    return (
        <Wrapper>
            {!loading.status && <Fragment>CARREGANDO</Fragment>}
            {loading.status && 
                <Fragment>
                    <RowSubtitlePage>
                        <ImgDiv>
                            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPMOg4Cec9ViNXq6qksj-UbBu3vS5S4j3Zw&usqp=CAU`} alt='user-avatar' />
                        </ImgDiv>
                        <SubtitlePage>{userData[0]}'s Posts</SubtitlePage>
                    </RowSubtitlePage>
                    {userPosts.map((el, index) => (
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
                        ))
                    }
                </Fragment>
            }
        </Wrapper>
    );
}