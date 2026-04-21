"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignup() {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.log(error.message);
            alert(error.message);
            return;
        }

        const user = data.user;

        // 🔥 criar profile manualmente
        const { error: profileError } = await supabase
            .from("profiles")
            .insert({
                id: user.id,
                username: email,
            });

        if (profileError) {
            console.log(profileError.message);
            alert(profileError.message);
        }

        alert("Conta criada!");
    }

    return (
        <div className="container">
            <div className="auth">
                <h1>Criar conta</h1>

                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleSignup}>Criar conta</button>

                <p>Já tem uma conta? <Link href={'/auth/login'}>Entre com ela</Link></p>
            </div>
        </div>
    );
}