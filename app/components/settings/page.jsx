"use client";

import { Trash2, Plus, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import NavBar from "../../navbar";
import TitleBar from "../../titlebar";
import Link from "next/link";

export default function Settings() {
    const [tema, setTema] = useState("dark-theme");

    useEffect(() => {
        document.body.className = tema;
    }, [tema]);

    return (
        <div>
            <TitleBar />
            <h1>Configurações</h1>

            <div className="configs">
                <label htmlFor="temas">Selecione um tema</label>
                <select
                    title="Selecione um tema"
                    name="temas"
                    id="temas"
                    value={tema}
                    onChange={(e) => setTema(e.target.value)}
                    className="temas"
                >
                    <option value="dark-theme">Escuro</option>

                    <option value="light-theme">Claro</option>
                </select>
                <section className="danger">
                    <h3>Zona perigosa</h3>
                    <Link href="/components/login">
                        <button title="Bloquear app">
                            <Lock size={20} />
                            Bloquear app
                        </button>
                    </Link>
                    <Link href="/components/signup">
                        <button title="Adicionar conta">
                            <Plus size={20} />
                            Adicionar conta
                        </button>
                    </Link>
                    <button title="Deletar conta">
                        <Trash2 size={20} />
                        Deletar conta
                    </button>
                </section>
            </div>

            <NavBar />
        </div>
    );
}
