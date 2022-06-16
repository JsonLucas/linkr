import { useState } from "react";
import { ThreeCircles } from 'react-loader-spinner';
import { signUpRequest } from "../../api/services";
import { Link, useNavigate } from "react-router-dom";
import { Container, RowField, RowForm, Field, RowSwitchPage, SubmitButton } from "../LoginForm/style";

export default function SignUpForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const signup = async (e) => {
        e.preventDefault();
        const body = { email, password, username, pictureUrl };
        try{
            setDisabled(true);
            const response = await signUpRequest(body);
            alert(response.data);
            if(response.status === 201){
                navigate('/');
            }
        }catch(e){
            alert(e.message);
            console.log(e);
        }
        setDisabled(false);
    }
    return(
        <Container>
            <RowForm onSubmit={signup}>
                <RowField>
                    <Field type='email' placeholder='e-mail' value={email} disabled={disabled} 
                    onChange={({target}) => { setEmail(target.value) }} required />
                </RowField>
                <RowField>
                    <Field type='password' placeholder='password' value={password} disabled={disabled}  
                    onChange={({target}) => { setPassword(target.value) }} required/>
                </RowField>
                <RowField>
                    <Field type='text' placeholder='username' value={username} disabled={disabled} 
                    onChange={({target}) => { setUsername(target.value) }} required />
                </RowField>
                <RowField>
                    <Field type='url' placeholder='picture url' value={pictureUrl} disabled={disabled} 
                    onChange={({target}) => { setPictureUrl(target.value) }} required />
                </RowField>
                <RowField>
                    <SubmitButton type='submit' disabled={disabled}>
                        {!disabled && 'Sign Up'}
                        {disabled && <div><ThreeCircles 
                            color='#FFFFFF' 
                            height={20} 
                            width={20} 
                            ariaLabel='Loading. . .' 
                        /></div>}
                    </SubmitButton>
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