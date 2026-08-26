"use client";

import {
    MessagesSquare,
    UserPlus,
    CircleUserRound,
    House,
    Search,
    Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    return (
        <div className="navbar">
            <nav>
                <Link
                    className={pathname === "/" ? "ativo" : "icons"}
                    href={"/"}
                    title="Início"
                >
                    <House size={25} />
                </Link>
                <Link
                    className={
                        pathname === "/components/chat" ? "ativo" : "icons"
                    }
                    href={"/components/chat"}
                    title="Chats"
                >
                    <MessagesSquare size={25} />
                </Link>
                <Link
                    className={
                        pathname === "/components/procurar" ? "ativo" : "icons"
                    }
                    href={"/components/procurar"}
                    title="Procurar"
                >
                    <Search size={25} />
                </Link>
                <Link
                    className={
                        pathname === "/components/encontrar" ? "ativo" : "icons"
                    }
                    href={"/components/encontrar"}
                    title="Encontrar usuário"
                >
                    <UserPlus size={25} />
                </Link>
                <Link
                    className={
                        pathname === "/components/perfil" ? "ativo" : "icons"
                    }
                    href={"/components/perfil"}
                    title="Perfil"
                >
                    <CircleUserRound size={25} />
                </Link>
                <Link
                    className={
                        pathname === "/components/settings" ? "ativo" : "icons"
                    }
                    href={"/components/settings"}
                    title="Configurações"
                >
                    <Settings size={25} />
                </Link>
            </nav>
        </div>
    );
}
