"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function TesteSupabase() {
    useEffect(() => {
        const supabase = createClient();

        console.log(supabase);
    }, []);

    return <h1>Teste Supabase</h1>;
}
