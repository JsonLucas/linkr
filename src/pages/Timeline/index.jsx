import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MainTimeline, Posts } from "./style";
import Post from "./../../components/Post";
import Feed from "../../components/Feed";
import Header from "../../components/Header";

export default function Timeline() {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    return (
        <MainTimeline>
            <Header />
            <Posts>
                <h1>timeline</h1>
                <Post counter={counter}  setCounter={setCounter} />
                <Feed counter={counter} />
            </Posts>
        </MainTimeline>
    )
}