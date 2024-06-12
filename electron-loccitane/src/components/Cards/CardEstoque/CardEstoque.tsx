import { Link } from 'react-router-dom'
import fotoEstoque from '../../../assets/img/fotoEstoque.png'
import './style.css'

function CardEstoque() {
    return (
        <>
            <Link to={'/paginacardestoque'}>
            <div className="cardEstoque">
                <img src={fotoEstoque} alt="" />
                <span>Prod: BROBVKI00059</span>
                <span>Data: 10/10/2024</span>
                <span>Há 6 dias em estoque</span>
            </div>
            </Link>
            <Link to={'/paginacardestoque'}>
            <div className="cardEstoque">
                <img src={fotoEstoque} alt="" />
                <span>Prod: BROBVKI00059</span>
                <span>Data: 10/10/2024</span>
                <span>Há 6 dias em estoque</span>
            </div>
            </Link>
            <Link to={'/paginacardestoque'}>
            <div className="cardEstoque">
                <img src={fotoEstoque} alt="" />
                <span>Prod: BROBVKI00059</span>
                <span>Data: 10/10/2024</span>
                <span>Há 6 dias em estoque</span>
            </div>
            </Link>
        </>
    )
}

export default CardEstoque