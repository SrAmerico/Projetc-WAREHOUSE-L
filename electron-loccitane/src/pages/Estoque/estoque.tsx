import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import SiderBar from "../../components/SiderBar/siderbar";
// import fotoEstoque from '../../assets/img/fotoEstoque.png';
import Lupa from '../../assets/svg/lupa.svg'
import CardEstoque from "../../components/Cards/CardEstoque/CardEstoque";

interface FiltroState {
    urgencia: string | null;
    dataInicio: string;
    dataFinal: string;
}

const Estoque: React.FC = () => {
    const [filtro, setFiltro] = useState<FiltroState>({
        urgencia: null,
        dataInicio: '',
        dataFinal: '',
    });

    const handleRadioChange = (value: string) => {
        setFiltro({ ...filtro, urgencia: value });
    };

    const handleDateChange = (campo: 'dataInicio' | 'dataFinal', value: string) => {
        setFiltro({ ...filtro, [campo]: value });
    };

    const limparFiltro = () => {
        setFiltro({
            urgencia: null,
            dataInicio: '',
            dataFinal: '',
        });
    };

    const aplicarFiltro = () => {
        // Lógica para aplicar o filtro (pode ser personalizada conforme necessário)
        console.log('Filtro aplicado:', filtro);
    };

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
                    <div className="page">
                        <div className="footer2">
                            <span className="caixaOpcao">
                                Filtro
                                <div className="orgFiltro">

                                    <label htmlFor="comUrgencia">
                                        <input
                                            type="radio"
                                            id="comUrgencia"
                                            name="urgencia"
                                            value="ComUrgencia"
                                            checked={filtro.urgencia === 'ComUrgencia'}
                                            onChange={() => handleRadioChange('ComUrgencia')}
                                        />
                                        Sem Urgência
                                    </label>

                                    <label htmlFor="semUrgencia">
                                        <input
                                            type="radio"
                                            id="semUrgencia"
                                            name="urgencia"
                                            value="SemUrgencia"
                                            checked={filtro.urgencia === 'SemUrgencia'}
                                            onChange={() => handleRadioChange('SemUrgencia')}
                                        />
                                        Com Urgência
                                    </label>

                                    <div>
                                        <label htmlFor="dataInicio">Data Início<input type="date" id="dataInicio" value={filtro.dataInicio} onChange={(e) => handleDateChange('dataInicio', e.target.value)} /></label>
                                        <label htmlFor="dataFinal">Data Final<input type="date" id="dataFinal" value={filtro.dataFinal} onChange={(e) => handleDateChange('dataFinal', e.target.value)} /></label>
                                    </div>

                                    <div className="OrgFiltroButton">
                                        <button type="button" onClick={limparFiltro}>Limpar</button>
                                        <button type="button" onClick={aplicarFiltro}>Aplicar</button>
                                    </div>

                                </div>
                            </span>


                            <span className="caixaOpcao">Ordenar
                                <div className="ordem">

                                    <label htmlFor="html">Primeiros
                                        <input type="radio" id="html" name="fav_language" defaultValue="HTML" checked />
                                    </label>

                                    <label htmlFor="css">Ultimos
                                        <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                                    </label>

                                    <label htmlFor="css">Setor
                                        <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                                    </label>

                                </div>
                            </span>

                            <div className="caixaOpcao"><input type="text" name="" id="" className="pesquisa" placeholder="pesquisar" /><img src={Lupa} alt="" /></div>
                        </div>

                        <div className="pageCard">
                            <CardEstoque/>
                            <CardEstoque/>
                            <CardEstoque/>
                            <CardEstoque/>
                            <CardEstoque/>
                            <CardEstoque/>
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        </>
    );
}

export default Estoque;