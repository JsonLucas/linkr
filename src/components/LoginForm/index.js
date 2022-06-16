import { useState } from 'react';
import { loginRequest } from '../../api/services';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Field, RowField, RowForm, RowSwitchPage } from "./style";

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        const body = { email, password };
        try{
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
    }
    return (
        <Container>
            <RowForm onSubmit={login}>
                <RowField>
                    <Field type='email' placeholder='e-mail' value={email} 
                    onChange={({target}) => { setEmail(target.value) }} required />
                </RowField>
                <RowField>
                    <Field type='password' placeholder='password' value={password} 
                    onChange={({target}) => { setPassword(target.value) }} required />
                </RowField>
                <RowField>
                    <Field type='submit' value='Log In' />
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