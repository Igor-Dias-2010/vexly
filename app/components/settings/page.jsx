"use client";

import { useEffect, useState } from "react";
import NavBar from "../../navbar";
import TitleBar from "../../titlebar";

export default function Settings() {
    const [tema, setTema] = useState("dark-theme");

    useEffect(() => {
        document.body.className = tema;
    }, [tema]);

    return (
        <div>
            <TitleBar />
            <h1>Configurações</h1>

            <section className="configs">
                <label htmlFor="temas">Selecione um tema</label>
                <select
                    name="temas"
                    id="temas"
                    value={tema}
                    onChange={(e) => setTema(e.target.value)}
                    className="temas"
                >
                    <option value="dark-theme">Escuro</option>

                    <option value="light-theme">Claro</option>
                </select>
            </section>

            <NavBar />
        </div>
    );
}
