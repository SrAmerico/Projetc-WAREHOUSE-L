import { useState } from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import PaginaCard from '../../components/PaginaCard/PaginaCard';
import SiderBar from '../../components/SiderBar/siderbar';
import './style.css'

function CardView(){
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
                    <PaginaCard/>
                <Footer />
                </div>
            </div>
        </>
    );
}

export default CardView