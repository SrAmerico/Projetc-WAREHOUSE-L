import "./style.css";
import Foto from '../../assets/img/user.jpg'
import fotoEstoque from '../../assets/img/fotoEstoque.png'
import { useLocation } from "react-router-dom";

function PaginaCard() {

    const caminho = useLocation()
    const nomeCaminho = caminho.pathname

    return (
        <>
            {nomeCaminho == '/paginacardestoque' ?
                <div>
                    <header className="headerPalete">
                        <div>
                            <img src={fotoEstoque} alt="" />
                            <span className="headerTextPalete">BROBVKI00059 - OB KIT BAR SOAP 4X75G</span>
                        </div>
                    </header>

                    <footer className="footerPalete">
                        <div className="infoPaleteFooter">
                            <div className="infoPalete">
                                <div className="infoPaleteBox"><span>Data de Entrada:</span><span>15/05/2024</span></div>
                                <div className="infoPaleteBox"><span>Data de Saida:</span><span>01/06/2024</span></div>
                                <div className="infoPaleteBox"><span>Urgencia:</span><span>Dentro do prazo</span></div>
                                <div className="infoPaleteBox"><span>Registro Usuario:</span><span>ENascimento</span></div>
                                <div className="botaoEditarPerfil"><button>Pedir Retirada</button></div>
                            </div>
                            <div className="infoDescricao">
                            <h3>INGREDIENTES:</h3>
                            <p>SAL SÓDICO DE PALMA - ESTEARATO DE SÓDIO - SAL SÓDICO DE SEMENTE DE PALMA - ÁGUA - GLICEROL - SACAROSE - AMIDO - PERFUME - MANTEIGA DA SEMENTE DE CUPUAÇU - CLORETO DE SÓDIO - DECIL GLICOSÍDEO - ÁCIDO CÍTRICO - EDETATO DE SÓDIO - ÁCIDO ETIDRÔNICO - HIDRÓXIDO DE SÓDIO - TOCOFEROL - LINALOL - HEXIL CINAMAL - ALFA-ISOMETIL IONONA - LIMONENO - CITRONELOL - GERANIOL - DIÓXIDO DE TITÂNIO.</p>
                            </div>
                        </div>

                    </footer>
                </div> : null}


            {nomeCaminho == '/paginacardperfil' ?
                <div>
                    <header className="perfilHeader">
                        <img src={Foto} alt="" />
                        <div className="nomeCargo">
                            <h1 className="nomeApresentacao">Edson Nascimento</h1>
                            <h2 className="cargoApresentacao">Operador de Estoque</h2>
                        </div>

                    </header><section className="secaoPerfil">
                        <div className="containerPerfil1">
                            <span><h1>Nome</h1> <b className="naoEditavel">Edson </b></span>
                            <span><h1>Sobrenome</h1> <b className="naoEditavel">Nascimento </b></span>
                            <span><h1>Email</h1> <b className="naoEditavel">edson@email</b></span>
                            <span><h1>Endereco</h1> <b className="naoEditavel">rua madalena </b></span>
                            <span><h1>Numero</h1> <b className="naoEditavel">254 </b></span>
                            <span><h1>Cargo</h1> <b className="naoEditavel">operador de produção</b></span>
                            <span><h1>Senha</h1> <b className="naoEditavel">operador de produção </b></span>
                        </div>
                        <div className="containerPerfil2">
                            <span><p className="descricao">Descricão:</p> ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</span>

                        </div>
                    </section>
                </div> : null}

        </>
    );
}

export default PaginaCard