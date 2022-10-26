import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignUpPage } from '../pages/SignUp';

export function AppRoutes (){
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
}