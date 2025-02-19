import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";
import NavBar from "../navbar/Navbar.jsx";

function Reembolsos() {
    return (
        <div className={styles.containerReembolsos}>
            <NavBar />
            
            <header>
                <img src={Home} alt="ícone de casinha" />
                <img src={Seta} alt="ícone de sinal de maior" />
                <p>Reembolsos</p>
            </header>

            <main className={styles.mainReembolso}>
                <section className={styles.centralizar}>
                    <h1>Sistema de Reembolsos</h1>
                    <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>

                    <section className={styles.containerCards}>
                        <article className={styles.card}>
                            <img src={SolicitarReembolso} alt="ícone de uma prancheta com um sinal de somar ao lado" />
                            <p>Solicitar Reembolso</p>
                        </article>

                        <article className={styles.card}>
                            <img src={Analises} alt="ícone de uma lista" />
                            <p>Verificar análises</p>
                        </article>

                        <article className={styles.card}>
                            <img src={SolicitarHistorico} alt="ícone de um relógio em formato de seta de recarregamento" />
                            <p>Histórico</p>
                        </article>
                    </section>

                    <section className={styles.containerStatus}>
                        <div>
                            <img className={styles.img1} src={NumeroSolicitados} alt="ícone de seta para a esquerda" />
                            <h2>182</h2>
                            <p>Solicitados</p>
                        </div>

                        <div>
                            <img className={styles.img2} src={NumeroAnalises} alt="ícone de relógio" />
                            <h2>74</h2>
                            <p>Em análise</p>
                        </div>

                        <div>
                            <img className={styles.img3} src={NumeroAprovados} alt="ícone de verificado com uma barra embaixo" />
                            <h2>195</h2>
                            <p>Aprovados</p>
                        </div>

                        <div>
                            <img className={styles.img4} src={NumeroRejeitados} alt="ícone de x" />
                            <h2>41</h2>
                            <p>Rejeitados</p>
                        </div>
                    </section>

                    <section className={styles.containerSistema}>
                        <img src={Sistema} alt="ícone de nuvem com um sinal de verificado dentro" />
                        <p>Sistema atualizado.</p>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Reembolsos;