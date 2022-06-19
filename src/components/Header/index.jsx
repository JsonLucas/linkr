import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { getUserByQuery } from "../../api/services";
import { ImgDiv, InfoDiv } from "../Feed/style";
import { 
    HeaderHeader, 
    MenuDiv, 
    HeaderTittle, 
    RowSearchField, 
    SearchField, 
    SearchResults, 
    SingleSearchResult, 
    SectionIconField
} from "./style";
import { IoIosClose, IoMdSearch } from 'react-icons/io';

export default function Header({ userInfo }) {
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();
    const searchUsers = async () => {
        try{
            const authorization = JSON.parse(localStorage.getItem('authorization'));
            setLoaded(false);
            setHidden(false);
            if(search.length > 0){
                const users = await getUserByQuery(search, { authorization });
                setSearchResult([...users.data, users.status]);
                setLoaded(true);
            }
        }catch(e){
            console.log(e.message);
        }
    }
    const userPosts = (e) => {
        const user = e.target;
        const data = user.title.split('<>');
        localStorage.setItem('userData', JSON.stringify(data));
        navigate(`/users/${data[1]}`);
    }
    return (
        <HeaderHeader>
            <section>
                <HeaderTittle>linkr</HeaderTittle>
                <RowSearchField>
                    <SearchField placeholder='Search for people' type='text' value={search} 
                    onChange={(e) => { setSearch(e.target.value); searchUsers(); }} 
                    onFocus={() => { search ? setHidden(false) : setHidden(true) }} />
                    <SectionIconField>
                        <div>
                            {search !== '' && <IoIosClose size={25} onClick={() => { setSearch(''); }} 
                            style={{cursor: 'pointer'}}  /> }
                            {search === '' && <IoMdSearch size={23} />}
                        </div>
                    </SectionIconField>
                    {!loaded && <SearchResults hidden={hidden}><h2>
                            <ThreeCircles height={30} width={30} color='#000000' /></h2>
                        </SearchResults>}
                    {loaded && 
                    <SearchResults hidden={hidden} resultCount={searchResult.length}>
                        {searchResult.map((item) => (
                                <SingleSearchResult>
                                    <ImgDiv>
                                        <img src={item.picture} alt='profile-avatar'/>
                                    </ImgDiv>
                                    <InfoDiv searchResult={true}>
                                        <span title={`${item.name}<>${item.id}<>${item.picture}`}
                                        onClick={userPosts}>{item.name}</span>
                                    </InfoDiv>
                                </SingleSearchResult>
                            ))
                        }
                    </SearchResults>}
                </RowSearchField>
                <MenuDiv>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    <img src={userInfo.picture} alt="user-avatar" />
                </MenuDiv>
            </section>
        </HeaderHeader>
    );
}