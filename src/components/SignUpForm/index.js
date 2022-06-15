import { useState } from "react";
import { signUpRequest } from "../../api/services";
import { Link, useNavigate } from "react-router-dom";
import { Container, RowField, RowForm, Field, RowSwitchPage } from "../LoginForm/style";

export default function SignUpForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const navigate = useNavigate();
    const signup = async (e) => {
        e.preventDefault();
        const body = { email, password, username, pictureUrl };
        try{
            const response = await signUpRequest(body);
            alert(response.data);
            if(response.status === 201){
                navigate('/');
            }
        }catch(e){
            alert(e.message);
            console.log(e);
        }
    }
    return(
        <Container>
            <RowForm onSubmit={signup}>
                <RowField>
                    <Field type='email' placeholder='e-mail' value={email} 
                    onChange={({target}) => { setEmail(target.value) }} required />
                </RowField>
                <RowField>
                    <Field type='password' placeholder='password' value={password} 
                    onChange={({target}) => { setPassword(target.value) }} required/>
                </RowField>
                <RowField>
                    <Field type='text' placeholder='username' value={username} 
                    onChange={({target}) => { setUsername(target.value) }} required />
                </RowField>
                <RowField>
                    <Field type='url' placeholder='picture url' value={pictureUrl} 
                    onChange={({target}) => { setPictureUrl(target.value) }} required />
                </RowField>
                <RowField>
                    <Field type='submit' value='Sign Up' />
                </RowField>
                <RowSwitchPage>
                    <Link to='/'>
                        Switch back to log in
                    </Link>
                </RowSwitchPage>
            </RowForm>
        </Container>
    );
}