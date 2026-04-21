"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.log(error.message);
            alert(error.message);
            return;
        }

        alert("Logado!");
    }

    return (
        <div className="container">
            <div className="auth">
                <h1>Login</h1>

                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>Entrar</button>

                <p>
                    Não tem uma conta? <Link href={'/auth/signup'}>Crie uma agora</Link>
                </p>
            </div>
        </div>
    );
}