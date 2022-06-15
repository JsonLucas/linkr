import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function AppRoutes(){
    return (
        <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route exact path='/sign-up' element={<SignUp />} />
        </Routes>
    );
}