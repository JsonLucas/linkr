import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { getUserByQuery } from "../../api/services";
import { ImgDiv, InfoDiv } from "../Feed/style";
import { 
    RowSearchField, 
    SearchField, 
    SearchResults, 
    SingleSearchResult, 
    SectionIconField
} from "./style";
import { IoIosClose, IoMdSearch } from 'react-icons/io';

export default function SearchSection () {
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loadedSearch, setLoadedSearch] = useState(true);
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();
    const searchUsers = async () => {
        try{
            if(search.length > 0){
                setLoadedSearch(false);
                setHidden(false);
                const token = JSON.parse(localStorage.getItem('authorization'));
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
                const users = await getUserByQuery(search, config);
                const { data } = users;
                setSearchResult(data);
                setLoadedSearch(true);
            }else{
                alert('O campo não pode ser vazio');
            }
        }catch(e){
            if(e.response){
                const { data } = e.response;
                setSearchResult(data);
            }
            console.log(e.message);
        }
    }
    const userPosts = (e) => {
        const user = e.target;
        const data = user.title.split('<>');
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(data);
        navigate(`/users/${data[1]}`);

    }
    return (
        <RowSearchField>
            <SearchField placeholder='Search for people' type='text' value={search} 
            onChange={(e) => { setSearch(e.target.value); }} 
            onFocus={() => { search ? setHidden(false) : setHidden(true) }} />
            <SectionIconField>
                <div>
                    {!loadedSearch && <IoIosClose size={25} onClick={() => { setSearch(''); setHidden(true); setLoadedSearch(true); }} 
                    style={{cursor: 'pointer'}}  /> }
                    {loadedSearch && <IoMdSearch size={23} onClick={searchUsers} 
                    style={{cursor: 'pointer'}}/>}
                </div>
            </SectionIconField>
            {!loadedSearch && <SearchResults hidden={hidden}><h2>
                    <ThreeCircles height={30} width={30} color='#000000' /></h2>
                </SearchResults>}
            {loadedSearch && 
            <SearchResults hidden={hidden} resultCount={searchResult.length}>
                {searchResult.map((item, index) => (
                        <SingleSearchResult key={index}>
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
    );
}