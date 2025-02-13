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

function Reembolsos() {
    return (
        <>
            <header>
                <img src={Home} alt="ícone de casinha" />
                <img src={Seta} alt="ícone de sinal de maior" />
                <p>Reembolsos</p>
            </header>

            <main className={styles.containerReembolso}>
                <h1>Sistema de Reembolsos</h1>
                <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>

                <section className={styles.containerCards}>
                    <article className={styles.card}>
                        <img src={SolicitarReembolso} alt="ícone de uma prancheta com um sinal de somar" />
                        <p>Solicitar Reembolso</p>
                    </article>

                    <article className={styles.card}>
                        <img src={Analises} alt="ícone de uma lista" />
                        <p>Verificar análises</p>
                    </article>

                    <article className={styles.card}>
                        <img src={SolicitarHistorico} alt="ícone de um relógio" />
                        <p>Histórico</p>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Reembolsos;