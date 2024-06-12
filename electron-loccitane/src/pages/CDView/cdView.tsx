import { useState } from "react";
import Footer from "../../components/Footer/footer";
import SiderBar from "../../components/SiderBar/siderbar";
import "./style.css";
import BotaoTema from "../../hooks/ToggleTheme/BotaoThema";
import Header from "../../components/Header/header";
import Cadastrar from "../../components/CadastrarDeletar/Cadastrar/cadastrar";
import Deletar from "../../components/CadastrarDeletar/Deletar/deletar";
import { useLocation, useParams } from "react-router-dom";

function CDView() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    const caminho = useLocation().pathname

    return (
        <>

            <div className="divisao">
                <div className={`container1 ${menuOpen ? 'open' : 'close'}`}>
                    <SiderBar click={handleClick} estado={`sliderbar ${menuOpen ? 'open' : 'close'}`} />
                </div>
                <div className={`container2 ${menuOpen ? 'open' : 'close'}`}>
                    <Header />
                    {caminho == '/estoque/cadastrar' || caminho == '/estoque/deletar' ?
                        <>
                            {caminho == '/estoque/cadastrar' ! ?

                                <Cadastrar estoque={true} usuario={false} />
                                : null}
                            {caminho == '/estoque/deletar' ?
                                <Deletar estoque={true} usuario={false} />
                                : null}
                        </>
                        : null}

                    {caminho == '/perfil/cadastrar' || caminho == '/perfil/deletar'?
                        <>
                            {caminho == '/perfil/cadastrar'?

                                <Cadastrar estoque={false} usuario={true} />
                                : null}
                            {caminho == '/perfil/deletar'?
                                <Deletar estoque={false} usuario={true} />
                                : null}
                        </>
                        : null}
                    <Footer />
                </div>
            </div>
        </>
    );
}



export default CDView;