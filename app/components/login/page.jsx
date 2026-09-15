import Link from "next/link";

export default function Login() {
    return (
        <div className="login-signup">
            <h1>Entrar na sua conta</h1>
            <label htmlFor="email">Digite seu Email</label>
            <input type="text" placeholder="Digite seu Email" id="email" />
            <label htmlFor="senha">Digite sua senha</label>
            <input type="password" placeholder="Digite sua senha" id="senha" />
            <button>Entrar</button>
            <p>
                Não tem uma conta?
                <Link href="/components/signup">Crie uma agora</Link>
            </p>
        </div>
    );
}
