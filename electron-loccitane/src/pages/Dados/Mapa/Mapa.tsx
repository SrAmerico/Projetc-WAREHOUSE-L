import { useState } from "react";
import Footer from "../../../components/Footer/footer";
import SiderBar from "../../../components/SiderBar/siderbar";
import "./style.css";
import BotaoTema from "../../../hooks/ToggleTheme/BotaoThema";
import ComponenteSetor from "./ComponentSetor";
import ComponenteCorredor from "./ComponentCorredor";
import { dadosEstoque } from "../../../utils/dadosFake";
import ModeloPrateleira from "./ModeloPrateleira";
import Header from "../../../components/Header/header";

function Mapa() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <>
            <div className="divisao">
                <div className={`container1 ${menuOpen ? 'open' : 'close'}`}>
                    <SiderBar click={handleClick} estado={`sliderbar ${menuOpen ? 'open' : 'close'}`} />
                </div>
                <div className={`container2 ${menuOpen ? 'open' : 'close'}`}>
                    <Header/>
                    <div className="tela">

                        {Object.keys(dadosEstoque).map((setor) => (
                            <ComponenteSetor
                                key={setor}
                                setor={setor}
                                corredor={Object.keys(dadosEstoque[setor]).map((corredor) => (
                                    <ComponenteCorredor
                                        key={corredor}
                                        corredor={corredor}
                                        quantidade={Object.keys(dadosEstoque[setor][corredor]).map((prateleira) => (
                                            <ModeloPrateleira key={prateleira} 
                                            status1={dadosEstoque[setor][corredor][prateleira].nivel1} 
                                            status2={dadosEstoque[setor][corredor][prateleira].nivel2} 
                                            status3={dadosEstoque[setor][corredor][prateleira].nivel3} 
                                            status4={dadosEstoque[setor][corredor][prateleira].nivel4} 
                                            />
                                        ))}
                                    />
                                ))}
                            />
                        ))}


                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}



export default Mapa;