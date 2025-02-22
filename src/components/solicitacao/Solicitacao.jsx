import NavBar from "../navbar/Navbar";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Deletar from "../../assets/Solicitação/deletar.png";
import Lixeira from "../../assets/Solicitação/lixeira.png";
import Motivo from "../../assets/Solicitação/motivo.png";
import Mais from "../../assets/Solicitação/+.png";
import Check from "../../assets/Solicitação/check.png";
import X from "../../assets/Solicitação/x.png";

function Solicitacao() {
    return (
        <div className={styles.layoutSolicitacao}>
            <NavBar />

            <div className={styles.containerPrincipalDaSolicitacao}>
                <header className={styles.headerSolicitacao}>
                    <img src={Home} alt="Vetor da casinha" />
                    <img src={Seta} alt="Vetor da setinha" />
                    <p>Reembolsos</p>
                    <img src={Seta} alt="Vetor da setinha" />
                    <p>Solicitação de Reembolsos</p>
                </header>

                <main className={styles.mainSolicitacao}>
                    <form className={styles.formSolicitacao}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome Completo</label>
                                <input type="text" name="text" id="text" />
                            </div>

                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input type="text" name="text" id="text" />
                            </div>

                            <div className={styles.inputPrestacao}>
                                <label htmlFor="">Nº Prest. Contas</label>
                                <input type="text" name="text" id="text" />
                            </div>

                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>

                        <div className={styles.barraVertical}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="">Data</label>
                                <input type="date" name="date" id="date"/>
                            </div>

                            <div className={styles.tipoDeDespesas}>
                                <label htmlFor="">Tipo de Despesa</label>
                                <select name="" id="" className={styles.select1}>
                                    <option value="0" disabled selected>Selecionar</option>
                                    <option value="1">Alimentação</option>
                                    <option value="2">Combustível</option>
                                    <option value="3">Condução</option>
                                    <option value="4">Estacionamento</option>
                                    <option value="5">Viagem admin.</option>
                                    <option value="6">Viagem operacional</option>
                                    <option value="7">Eventos de representação</option>
                                </select>
                            </div>

                            <div className={styles.centroDeCusto}>
                                <label htmlFor="">Centro de Custo</label>
                                <select name="" id="">
                                    <option value="0" disabled selected>Selecionar</option>
                                    <option value="1">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                    <option value="2">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    <option value="3">1100110102 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>

                            <div className={styles.ordem}>
                                <label htmlFor="">Ord. Int.</label>
                                <input type="number" name="number" id="number" />
                            </div>

                            <div className={styles.divisoes}>
                                <label htmlFor="">Div.</label>
                                <input type="number" name="number" id="number" />
                            </div>

                            <div className={styles.pep}>
                                <label htmlFor="">PEP</label>
                                <input type="number" name="number" id="number" />
                            </div>

                            <div className={styles.moeda}>
                                <label htmlFor="">Moeda</label>
                                <select name="" id="">
                                    <option value="0" disabled selected>Selecionar</option>
                                    <option value="1">BRL</option>
                                    <option value="2">ARS</option>
                                    <option value="3">USD</option>
                                </select>
                            </div>

                            <div className={styles.distancia}>
                                <label htmlFor="">Dist. / Km</label>
                                <input type="text" name="text" id="text" />
                            </div>

                            <div className={styles.valorKm}>
                                <label htmlFor="">Valor / Km</label>
                                <input type="number" name="number" id="number" />
                            </div>

                            <div className={styles.valorFaturado}>
                                <label htmlFor="">Val. Faturado</label>
                                <input type="number" name="number" id="number" />
                            </div>

                            <div className={styles.despesa}>
                                <label htmlFor="">Despesa</label>
                                <input type="number" name="number" id="number" />
                            </div>

                            <div className={styles.botoes}>
                                <button className={styles.botaoSalvar}><img src={Mais} alt="ícone de sinal de mais" /> Salvar</button>
                                <button className={styles.botaoDeletar}>
                                    <img src={Deletar} alt="ícone de apagar texto" />
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* table é a tag principal que vai definir a tabela. */}
                    {/* thead é a tag que agrupa o cabeçalho. */}
                    {/* tr é a linha da tabela. */}
                    {/* th título da tabela, um para cada título, ex: nome - idade - estado */}
                    {/* tbody agrupa o corpo da tabela (os dados que será recebido) */}
                    <div className={styles.tabelaContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Colaborador(a)</th>
                                    <th>Empresa</th>
                                    <th>Nº Prest.</th>
                                    <th>Data</th>
                                    <th>Motivo</th>
                                    <th>Tipo de despesa</th>
                                    <th>Ctr. Custo</th>
                                    <th>Ord. Int.</th>
                                    <th>Div.</th>
                                    <th>PEP</th>
                                    <th>Moeda</th>
                                    <th>Dist. Km</th>
                                    <th>Val. Km</th>
                                    <th>Val. Faturado</th>
                                    <th>Despesa</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                    <td>Yuri Diogo</td>
                                    <td>WSS001</td>
                                    <td>329456</td>
                                    <td>08/01/2025</td>
                                    <td><img src={Motivo} alt="ícone de folha" /></td>
                                    <td>Desp. de viagem administrativa</td>
                                    <td>1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</td>
                                    <td>0003</td>
                                    <td>002</td>
                                    <td>001</td>
                                    <td>BRL</td>
                                    <td>434Km</td>
                                    <td>0.65</td>
                                    <td>242.10</td>
                                    <td>40.05</td>
                                </tr>

                                <tr>
                                    <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                    <td>Luana Silva</td>
                                    <td>WSS001</td>
                                    <td>329456</td>
                                    <td>08/01/2025</td>
                                    <td><img src={Motivo} alt="ícone de folha" /></td>
                                    <td>Desp. de viagem administrativa</td>
                                    <td>1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</td>
                                    <td>0003</td>
                                    <td>002</td>
                                    <td>001</td>
                                    <td>BRL</td>
                                    <td>434Km</td>
                                    <td>0.65</td>
                                    <td>242.10</td>
                                    <td>40.05</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.rodape}>
                        <div className={styles.totalFaturado}>
                            <label htmlFor="">Total Faturado</label>
                            <input type="number" name="number" id="number" placeholder="0.00" className={styles.placeholder1}/>
                        </div>

                        <div className={styles.totalDespesa}>
                            <label htmlFor="">Total Despesa</label>
                            <input type="number" name="number" id="number" placeholder="0.00" className={styles.placeholder2}/>
                        </div>

                        <div className={styles.botoesRodape}>
                            <button className={styles.enviarAnalise}> <img src={Check} alt="ícone de verificado" /> Enviar para Análise</button>
                            <button className={styles.cancelarSolicitacao}> <img src={X} alt="ícone de um X" /> Cancelar Solicitação</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Solicitacao;