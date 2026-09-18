"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="auth-container">
            <div className="auth">
                <h1>Criar conta</h1>

                <div className="text-field">
                    <label htmlFor="email">Digite um Email</label>
                    <input
                        type="email"
                        placeholder="Digite um Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="text-field">
                    <label htmlFor="senha">Digite uma senha</label>
                    <input
                        type="password"
                        placeholder="Digite uma senha"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <button>Criar conta</button>

                <p>
                    Já tem uma conta?
                    <Link href="/components/login">Entre na sua conta</Link>
                </p>
            </div>
        </div>
    );
}