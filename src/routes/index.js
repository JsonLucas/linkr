import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function AppRoutes(){
    return (
        <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route exact path='/sign-up' element={<SignUp />} />
            <Route exact path='/home' element={<Home/>}></Route>
        </Routes>
    );
}