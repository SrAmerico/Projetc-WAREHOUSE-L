import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import SiderBar from "../../components/SiderBar/siderbar";
import Foto from '../../assets/img/user.jpg'
import Lapis from '../../assets/svg/lapis.svg'

function Perfil() {
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

                    <header className="perfilHeader">
                        <img src={Foto} alt=""/>
                        <div className="nomeCargo">
                            <h1 className="nomeApresentacao">Willian Cezar</h1>
                            <h2 className="cargoApresentacao">Coordenador de Manufatura</h2>
                        </div>

                    </header>
                    <section className="secaoPerfil">
                        <div className="containerPerfil1">
                            <span><h1>Nome</h1> <div><input type="text" value={'Willian'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <span><h1>Sobrenome</h1> <div><input type="text" value={'Cesar'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <span><h1>Email</h1> <b className="naoEditavel">williancesar@email</b></span>
                            <span><h1>Cargo</h1> <b className="naoEditavel">Coordenador de Manufatura</b></span>
                            <span><h1>Senha</h1> <div><input type="password" value={'********'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <div className="botaoEditarPerfil"><button>Confirmar Alterações</button><button>Reverter</button></div>
                        </div>
                        <div className="containerPerfil2">
                            <span><p className="descricao">Descricão:</p>Descrição de usuário/Funcionário</span>

                        </div>
                    </section>
                    


                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Perfil;