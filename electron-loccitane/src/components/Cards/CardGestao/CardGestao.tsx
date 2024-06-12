import { Link } from 'react-router-dom'
import fotoUser from '../../../assets/img/user.jpg'
import './style.css'

function CardGestao() {
    return (
        <>
        <Link to={'/paginacardperfil'}>
            <div className="cardPerfil">
                <img src={fotoUser} alt="" />
                <span>nome: user</span>
                <span>cargo: Coordenador</span>
                <span>status: ativo</span>
            </div>
        </Link>
        </>
    )
}

export default CardGestao