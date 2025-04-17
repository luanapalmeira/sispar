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
import { useState, useEffect } from "react";
import Api from "../../Services/Api.jsx";

function Solicitacao() {
    const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
    const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
    const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
    const [data, setData] = useState(""); // Estado para o campo data
    const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
    const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
    const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
    const [ordemInterna, setOrdemInterna] = useState(""); // Estado para o campo ordem interna
    const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
    const [pep, setPep] = useState(""); // Estado para o campo pep
    const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
    const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
    const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
    const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
    const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

    const [dadosReembolso, setDadosReembolso] = useState([]);

    //Função para enviar os dados para API
    const [foiEnviado, setFoiEnviado] = useState(false);  //Serve para saber se o formulário foi enviado.

    //Essa função captura os valores dos estados, coloca eles organizados em objetos que serão adicionados no array dadosReembolso para serem exibidos no map
    //Função que é chamada quando o formulário é enviado. Ela será ativada no botão enviar, e armazenada na tabela.
    const handleSubmit = () => {
        const objetoReembolso = {
            colaborador,
            empresa,
            nPrestacao,
            data,
            motivo,
            tipoReembolso,
            centroCusto,
            ordemInterna,
            divisao,
            pep,
            moeda,
            distanciaKm,
            valorKm,
            valorFaturado,
            despesa
        }
        setDadosReembolso(dadosReembolso.concat(objetoReembolso));
        limparCampos();
    };

    //Função para limpar os campos (inputs)
    const limparCampos = () => {
        setColaborador(""),
        setEmpresa(""),
        setnPrestacao(""),
        setData(""),
        setMotivo(""),
        setTipoReembolso(""),
        setCentroCusto(""),
        setOrdemInterna(""),
        setDivisao(""),
        setPep(""),
        setMoeda(""),
        setDistanciaKm(""),
        setValorKm(""),
        setValorFaturado(""),
        setDespesa("")
    };

    //Função async(assícrona) permite que o código espere algo (resposta do servidor) sem travar o resto do programa.
    const enviarParaAnalise = async () => {
        try {
            //Aqui colocamos o que queremos "tentar" fazer.
            //1º argumento é o caminho da rota "/refunds/new", é a rota do seu back-end 
            // 2º argumento é o que será enviado: dadosReembolso, os dados do formulário.
            // Faz a requisição POST para o endpoint /refunds/new
            //Enviando junto os dados que estão salvos no estado "dadosReembolso"
            const response = await Api.post("/refunds/new", dadosReembolso);  
            console.log("Resposta da API", response)  //Mostra no console a resposta da API.
            alert("Reembolso solicitado com sucesso!")  //Mostra um alerta avisando que deu certo.
            setFoiEnviado(true);  //Está ativando o estado "foiEnviado" para true(verdadeiro).
        } catch (error) {
            //Caso dê erro na hora de enviar, ele mostar o erro no console(console.log).
            console.log("Erro ao enviar", error);
        }
    };

    //Hook useEffect, serve para reagir a mudanças nos estados.
    useEffect(()=>{
        if (foiEnviado){
            setDadosReembolso([])  //Limpa os dados do formulário, ou seja, zera o estado.
            setFoiEnviado(false);  //foiEnviado volta a ser (false)
        }
    }, [foiEnviado]);  //Esse efeito só roda quando "foiEnviado" mudar

    //O if (foiEnviado) serve para executar algo somente quando o envio foi concluído.
    //O estado começa como false, mas vira true quando o envio é feito com sucesso.
    //O useEffect só roda quando essa variável muda, e por isso o if é necessário para não rodar à toa.

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
                {/* (e) => e.preventDefault():Essa é uma função que bloqueia o comportamento padrão do formulário (que seria o recarregamento automático da página). */}
                    <form className={styles.formSolicitacao} onSubmit={(event) => event.preventDefault()}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="nome">Nome Completo</label>
                                {/* onChange = Faz a mudança do estado do input. */}
                                {/* (e) => = É uma arrow function que recebe o evento (e) como argumento. Esse 'e' representa o evento que foi disparado quando o valor do input mudou.*/}
                                {/* e.target = Se refere ao próprio elemento input. */}
                                {/* .value = É o valor digitado pelo usuário. */}
                                <input type="text" name="colaborador" value={colaborador} onChange={(event) => setColaborador(event.target.value)} />
                            </div>

                            <div className={styles.inputEmpresa}>
                                <label htmlFor="empresa">Empresa</label>
                                <input type="text" name="empresa" value={empresa} onChange={(event) => setEmpresa(event.target.value)} />
                            </div>

                            <div className={styles.inputPrestacao}>
                                <label htmlFor="prestacao">Nº Prest. Contas</label>
                                <input type="number" name="nPrestacao" value={nPrestacao} onChange={(event) => setnPrestacao(event.target.value)} />
                            </div>

                            <div className={styles.inputMotivo}>
                                <label htmlFor="motivo">Descrição / Motivo do Reembolso</label>
                                <textarea name="motivo" value={motivo} onChange={(event) => setMotivo(event.target.value)} ></textarea>
                            </div>
                        </div>

                        <div className={styles.barraVertical}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="date">Data</label>
                                <input type="date" name="data" className={styles.customDate} value={data} onChange={(event) => setData(event.target.value)} />
                            </div>

                            <div className={styles.tipoDeDespesas}>
                                <label htmlFor="tipoReembolso">Tipo de Despesa</label>
                                <select name="tipoReembolso" value={tipoReembolso} onChange={(event) => setTipoReembolso(event.target.value)} >
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
                                <label htmlFor="custo">Centro de Custo</label>
                                <select name="centroCusto" value={centroCusto} onChange={(event) => setCentroCusto(event.target.value)} >
                                    <option value="0" disabled selected>Selecionar</option>
                                    <option value="1">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                    <option value="2">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    <option value="3">1100110102 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>

                            <div className={styles.ordem}>
                                <label htmlFor="ordemInterna">Ord. Int.</label>
                                <input type="text" name="ordemInterna" value={ordemInterna} onChange={(event) => setOrdemInterna(event.target.value)} />
                            </div>

                            <div className={styles.divisoes}>
                                <label htmlFor="divisao">Div.</label>
                                <input type="text" name="divisao" value={divisao} onChange={(event) => setDivisao(event.target.value)} />
                            </div>

                            <div className={styles.pep}>
                                <label htmlFor="pep">PEP</label>
                                <input type="text" name="pep" value={pep} onChange={(event) => setPep(event.target.value)} />
                            </div>

                            <div className={styles.moeda}>
                                <label htmlFor="moeda">Moeda</label>
                                <select name="moeda" value={moeda} onChange={(event) => setMoeda(event.target.value)} >
                                    <option value="0" disabled selected>Selecionar</option>
                                    <option value="1">BRL</option>
                                    <option value="2">ARS</option>
                                    <option value="3">USD</option>
                                </select>
                            </div>

                            <div className={styles.distancia}>
                                <label htmlFor="distancia">Dist. / Km</label>
                                <input type="number" name="distanciaKm" value={distanciaKm} onChange={(event) => setDistanciaKm(event.target.value)} />
                            </div>

                            <div className={styles.valorKm}>
                                <label htmlFor="valor">Valor / Km</label>
                                <input type="number" name="valorKm" value={valorKm} onChange={(event) => setValorKm(event.target.value)} />
                            </div>

                            <div className={styles.valorFaturado}>
                                <label htmlFor="faturado">Val. Faturado</label>
                                <input type="number" name="valorFaturado" value={valorFaturado} onChange={(event) => setValorFaturado(event.target.value)} />
                            </div>

                            <div className={styles.despesa}>
                                <label htmlFor="taxa">Despesa</label>
                                <input type="number" value={despesa} name="despesa" onChange={(event) => setDespesa(event.target.value)} />
                            </div>

                            <div className={styles.botoes}>
                                <button className={styles.botaoSalvar} onClick={handleSubmit}>
                                    <img src={Mais} alt="ícone de sinal de mais" /> Salvar
                                </button>

                                <button className={styles.botaoDeletar} onClick={limparCampos} >
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
                                {dadosReembolso.map((item, index) => (
                                    //key={index} : é uma exigência do React para identificar cada elemento único na renderização (evita bugs e deixa o React mais rápido).
                                    //key:  é uma identificação única que o React usa pra saber qual item
                                    //index: número da posição do item
                                    <tr key={index}>
                                        <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                        <td>{item.colaborador}</td>
                                        <td>{item.empresa}</td>
                                        <td>{item.nPrestacao}</td>
                                        <td>{item.data}</td>
                                        <td><img src={Motivo} alt="ícone de folha" /></td>
                                        <td>{item.tipoReembolso}</td>
                                        <td>{item.centroCusto}</td>
                                        <td>{item.ordemInterna}</td>
                                        <td>{item.divisao}</td>
                                        <td>{item.pep}</td>
                                        <td>{item.moeda}</td>
                                        <td>{item.distanciaKm}</td>
                                        <td>{item.valorKm}</td>
                                        <td>{item.valorFaturado}</td>
                                        <td>{item.despesa}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.rodape}>
                        <div className={styles.totalFaturado}>
                            <label htmlFor="">Total Faturado</label>
                            <input type="number" name="number" id="number" placeholder="0.00" className={styles.placeholder1} />
                        </div>

                        <div className={styles.totalDespesa}>
                            <label htmlFor="">Total Despesa</label>
                            <input type="number" name="number" id="number" placeholder="0.00" className={styles.placeholder2} />
                        </div>

                        <div className={styles.botoesRodape}>
                            <button className={styles.enviarAnalise} onSubmit={(event) => event.preventDefault()} onClick={enviarParaAnalise}> 
                                <img src={Check} alt="ícone de verificado" /> Enviar para Análise
                            </button>

                            <button className={styles.cancelarSolicitacao}>
                                <img src={X} alt="ícone de um X" /> Cancelar Solicitação
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Solicitacao;