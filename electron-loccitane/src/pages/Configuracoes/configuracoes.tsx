import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import SiderBar from "../../components/SiderBar/siderbar";

function Configuracoes(){
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
                    <Header />
                    <div className="pageConfig">
                        <span className="textoInformativo">Esta pagina está fechada😊</span>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Configuracoes;