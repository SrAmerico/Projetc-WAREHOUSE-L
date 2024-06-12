import "./style.css";

import DadosSvg from "../../assets/svg/svgButtos/Dados.svg";
import EstoqueSvg from "../../assets/svg/svgButtos/Estoque.svg";
import GestaoSvg from "../../assets/svg/svgButtos/Gestao.svg";
import ConfigSvg from "../../assets/svg/svgButtos/Perfil.svg";
import PerfilSvg from "../../assets/svg/svgButtos/Configuracoes.svg";
import Foto from "../../assets/img/user.jpg"

import { useState } from "react";
import { Link } from "react-router-dom";

const SiderBar = (props: any) => {

    const [estado,setEstado] = useState('close')


    return (
    <>
        
        <div className={props.estado + ' sidebar'}>
            <div className="foto-container" onClick={props.click}>
                <div>
                    <img className="Foto" src={Foto}/>   
                </div>
                    <span>Cleriston</span>
                </div>
            <div className="divMenu">

                <div className="divBotaoMenu">
                <Link to={'/dados'} className="containerBotaoHover"><span className="botaoMenu"><img className="svgImg" src={DadosSvg}/><p>Dados</p></span></Link>
                <Link to={'/estoque'} className="containerBotaoHover"><span className="botaoMenu"><img className="svgImg" src={EstoqueSvg}/><p>Estoque</p></span></Link>
                <Link to={'/gestao'} className="containerBotaoHover"><span className="botaoMenu"><img className="svgImg" src={GestaoSvg}/><p>Gestão</p></span></Link>
                </div>

                <div className="divBotaoMenu">
                <Link to={'/perfil'} className="containerBotaoHover"><span className="botaoMenu"><img className="svgImg" src={PerfilSvg}/><p>Perfil</p></span></Link>
                <Link to={'/config'} className="containerBotaoHover"><span className="botaoMenu"><img className="svgImg" src={ConfigSvg}/><p>Configurações</p></span></Link>
                </div>

            </div>
            
        </div>

    </>
    );
  };
  
  export default SiderBar;

