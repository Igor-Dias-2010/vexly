"use client";

import NavBar from "./navbar";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Home() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function checkUser() {
            const { data } = await supabase.auth.getUser();

            if (!data.user) {
                router.push("/auth/login");
            } else {
                setUser(data.user);
            }
        }

        checkUser();
    }, []);

    if (!user) return <p>Carregando...</p>;

    return (
        <div>
            <NavBar />
            <h1>Vexly</h1>
            <p>Logado como: {user.email}</p>
        </div>
    );
}