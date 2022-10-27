import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/Login';
import { SignUpPage } from '../pages/SignUp';

export function AppRoutes (){
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignIn />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}