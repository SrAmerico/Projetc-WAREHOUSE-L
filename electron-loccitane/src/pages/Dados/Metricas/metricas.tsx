import { useState } from 'react';
import Footer from '../../../components/Footer/footer';
import SiderBar from '../../../components/SiderBar/siderbar';
import './style.css'
import Header from '../../../components/Header/header';

function Metricas() {
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
                    <div className='pageSeparar'>
                        <div>
                        <div className="blocoInfo">Em Estoque <div>230</div></div>
                        <div className="blocoInfo">Entregues<div>700</div></div>
                        <div className="blocoInfo">Urgente<div>53</div></div>
                        <div className="blocoInfo">Bloqueado<div>17</div></div>
                        <div className="blocoInfo">Em Estoque <div>230</div></div>
                        <div className="blocoInfo">Entregues<div>700</div></div>
                        <div className="blocoInfo">Urgente<div>53</div></div>
                        <div className="blocoInfo">Bloqueado<div>17</div></div>
                        </div>

                        <div className='painel'> Painel</div>
                    </div>


                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Metricas;