import Link from "next/link";

export default function Signup() {
    return (
        <div className="auth-container">
            <div className="auth">
                <h1>Criar conta</h1>
                <div className="text-field">
                    <label htmlFor="email">Digite um Email</label>
                    <input type="text" placeholder="Digite um Email" id="email" />
                </div>
                <div className="text-field">
                    <label htmlFor="senha">Digite uma senha</label>
                    <input type="password" placeholder="Digite uma senha" id="senha" />
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
