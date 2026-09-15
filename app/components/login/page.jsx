import Link from "next/link";

export default function Login() {
    return (
        <div className="auth-container">
            <div className="auth">
                <h1>Entrar na sua conta</h1>
                <div className="text-field">
                    <label htmlFor="email">Digite seu Email</label>
                    <input type="text" placeholder="Digite seu Email" id="email" />
                </div>
                <div className="text-field">
                    <label htmlFor="senha">Digite sua senha</label>
                    <input type="password" placeholder="Digite sua senha" id="senha" />
                </div>
                <button>Entrar</button>
                <p>
                    Não tem uma conta?
                    <Link href="/components/signup">Crie uma agora</Link>
                </p>
            </div>
        </div>
    );
}
