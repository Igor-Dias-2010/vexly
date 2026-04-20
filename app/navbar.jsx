'use client'

import { MessagesSquare, UserPlus, CircleUserRound, House } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const pathname = usePathname()
    return (
        <div className="navbar">
            <nav>
                <Link className={pathname === '/' ? 'ativo' : 'icons'} href={'/'}><House size={25} /></Link>
                <Link className={pathname === '/chat' ? 'ativo' : 'icons'} href={'/chat'}><MessagesSquare size={25} /></Link>
                <Link className={pathname === '/encontrar' ? 'ativo' : 'icons'} href={'/encontrar'}><UserPlus size={25} /></Link>
                <Link className={pathname === '/perfil' ? 'ativo' : 'icons'} href={'/perfil'}><CircleUserRound size={25} /></Link>
            </nav>
        </div>
    )
}