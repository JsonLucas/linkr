import { useState } from 'react';
import { loginRequest } from '../../api/services';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Field, SubmitButton, RowField, RowForm, RowSwitchPage } from "./style";

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        const body = { email, password };
        try{
            setDisabled(true);
            const response = await loginRequest(body);
            if(response.status === 200){
                localStorage.setItem('authorization', JSON.stringify(response.data.token));
                alert('login efetuado com sucesso.');
                navigate('/timeline');
            }else{
                alert(response.data);
            }
        }catch(e){
            alert(e.message);
            console.log(e);
        }
        setDisabled(false);
    }
    return (
        <Container>
            <RowForm onSubmit={login}>
                <RowField>
                    <Field type='email' placeholder='e-mail' value={email} 
                    onChange={({target}) => { setEmail(target.value) }} disabled={disabled} required />
                </RowField>
                <RowField>
                    <Field type='password' placeholder='password' value={password} 
                    onChange={({target}) => { setPassword(target.value) }} disabled={disabled} required />
                </RowField>
                <RowField>
                    <SubmitButton type='submit' disabled={disabled}>
                        {!disabled && 'Log In'}
                        {disabled && <div><ThreeCircles 
                            color='#FFFFFF' 
                            height={20} 
                            width={20} 
                            ariaLabel='Loading. . .' 
                        /></div>}
                    </SubmitButton>
                </RowField>
                <RowSwitchPage>
                    <Link to='/sign-up'>
                        First time? Create an account
                    </Link>
                </RowSwitchPage>
            </RowForm>
        </Container>
    );
}