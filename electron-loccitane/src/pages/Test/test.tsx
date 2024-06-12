import { useState } from "react";
import Footer from "../../components/Footer/footer";
import SiderBar from "../../components/SiderBar/siderbar";
import "./style.css";
import BotaoTema from "../../hooks/ToggleTheme/BotaoThema";
import Header from "../../components/Header/header";
import PaginaCard from "../../components/PaginaCard/PaginaCard";
import Cadastrar from "../../components/CadastrarDeletar/Cadastrar/cadastrar";

function Test() {
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
                    <Cadastrar estoque={true} usuario={false}/>
                <Footer />
                </div>
            </div>
        </>
    );
}



export default Test;