import "./style.css";

import {Link, useLocation} from 'react-router-dom'

function Header(){

    const rota = useLocation();
    const nomeRota = rota.pathname;
    return(
    <>
    <header>
        <nav className="NavBar">
            <h1>Sistem L'occitane</h1>

            {nomeRota == '/dados'?
            <div>
            <Link to='/dados' className=" link-nav">DashBoard</Link>
            <Link to='/metricas' className=" link-nav">Metricas</Link>
            <Link to='/mapa' className=" link-nav">Mapa</Link>
            </div>:null}

            {nomeRota == '/mapa'?
            <div>
            <Link to='/dados' className=" link-nav">DashBoard</Link>
            <Link to='/metricas' className=" link-nav">Metricas</Link>
            <Link to='/mapa' className=" link-nav">Mapa</Link>
            </div>:null}

            {nomeRota == '/metricas'?
            <div>
            <Link to='/dados' className=" link-nav">DashBoard</Link>
            <Link to='/metricas' className=" link-nav">Metricas</Link>
            <Link to='/mapa' className=" link-nav">Mapa</Link>
            </div>:null}

            {nomeRota == '/estoque'?
            <div>
            <Link to='/estoque/cadastrar' className=" link-nav">Cadastrar</Link>
            <Link to='/estoque/deletar' className=" link-nav">Deletar</Link>
            </div>:null}

            {nomeRota == '/gestao'?
            <div>
            <Link to='/perfil/cadastrar' className=" link-nav">Cadastrar</Link>
            <Link to='/perfil/deletar' className=" link-nav">Deletar</Link>
            </div>:null}

            {nomeRota == '/perfil/cadastrar' || nomeRota == '/perfil/deletar'?
            <div>
            <Link to='/perfil/cadastrar' className=" link-nav">Cadastrar</Link>
            <Link to='/gestao' className=" link-nav">Listar</Link>
            <Link to='/perfil/deletar' className=" link-nav">Deletar</Link>
            </div>:null}

            {nomeRota == '/estoque/cadastrar' || nomeRota == '/estoque/deletar'?
            <div>
            <Link to='/estoque/cadastrar' className=" link-nav">Cadastrar</Link>
            <Link to='/estoque
            ' className=" link-nav">Listar</Link>
            <Link to='/estoque/deletar' className=" link-nav">Deletar</Link>
            </div>:null}


            {nomeRota == '/config'?
            <div>
            
            </div>:null}

            {nomeRota == '/test'?
            <div>
            <Link to='/test' className=" link-nav">test1</Link>
            <Link to='/test' className=" link-nav">test2</Link>
            <Link to='/test' className=" link-nav">test3</Link>
            </div>:null}
            
        </nav>
     </header>
    </>
    );
}

export default Header;