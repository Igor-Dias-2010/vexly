"use client";

import NavBar from "./navbar";
import TitleBar from "./titlebar";

export default function Home(){
    return(
        <div>
            <TitleBar />
            <h1>Início</h1>
            <NavBar />
        </div>
    )
}