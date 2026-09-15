import Link from "next/link";

export default function Signup() {
    return (
        <div className="login-signup">
            <h1>Criar conta</h1>
            <label htmlFor="email">Digite um Email</label>
            <input type="text" placeholder="Digite um Email" id="email" />
            <label htmlFor="senha">Digite uma senha</label>
            <input type="password" placeholder="Digite uma senha" id="senha" />
            <button>Criar conta</button>
            <p>
                Já tem uma conta?
                <Link href="/components/login">Entre na sua conta</Link>
            </p>
        </div>
    );
}
