import styles from "./Navbar.module.scss";
import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png"
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()

    return (
        <nav className={styles.navBarEstilo}>
            <button>
                <img src={Fechar} alt="botão de abrir e fechar" />
            </button>

            <section>
                <img src={Perfil} alt="imagem do perfil" />

                <div className={styles.boxBotoes}>
                    <button onClick={() => { navigate("/reembolsos") }}>
                        <img src={Home} alt="imagem home" />
                    </button>

                    <button onClick={() => { navigate("/solicitacao") }}>
                        <img src={Reembolso} alt="imagem reembolso" />
                    </button>

                    <button onClick={() => { navigate("/reembolsos") }}>
                        <img src={Pesquisa} alt="imagem pesquisa" />
                    </button>

                    <button onClick={() => { navigate("/solicitacao") }}>
                        <img src={Historico} alt="imagem histórico" />
                    </button>
                </div>
            </section>

            <button className={styles.botaoSair} onClick={() => { navigate("/") }}>
                <img src={Sair} alt="imagem sair" />
            </button>
        </nav>
    );
}

export default NavBar;