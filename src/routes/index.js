import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Timeline from "../pages/Timeline";
import UserPosts from "../pages/UserPosts";

export default function AppRoutes(){
    return (
        <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/timeline' element={<Timeline/>} />
            <Route path='/users/:userId' element={<UserPosts />} />
        </Routes>
    );
}