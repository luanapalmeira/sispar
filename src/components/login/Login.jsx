import Logo from "../../assets/Tela Login/logo-ws.png"

function Login() {
    return (
        <>
            <main>
                <section>
                    <p>Reservado para a imagem do navio</p>
                </section>

                <section>
                    <img src={Logo} alt="Logo da Wilson Sons" />
                    <h1>Boas vindas ao Novo Porta SISPAR</h1>
                    <p>Sistema de Emissão de Boletos e Parcelamento</p>

                    <form action="">
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="password" name="senha" id="senha" placeholder="Senha" />

                        <a href="">Esqueci minha senha</a>

                        <div>
                            <button>Entrar</button>
                            <button>Criar conta</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Login;