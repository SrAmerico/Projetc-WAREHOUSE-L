import './style.css'

function Cadastrar(props: any) {

    return (
        <>
            {props.usuario === true?
        <div className='formBox'>
            
            <form className='form'>
                <h1>Cadastro</h1>
                <label htmlFor=""><span>Nome</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Sobrenome</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Telefone</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Email</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Senha</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Endreço</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Cargo</span>  <input type="text" name="" id="" /></label>
                <button className='botaoEditarPerfil'>salvar</button>
            </form>
            
        </div>:null}
            {props.estoque === true?
            <div className='formBox'>

                <form className='form'>
                    <h1>Cadastro</h1>

                    <label htmlFor="setor">
                        <span>Rua</span>
                        <select name="setor" id="setor" className='opcaoForm'>
                            <option value="opcao1">A</option>
                            <option value="opcao2">B</option>
                            <option value="opcao3">C</option>
                            <option value="opcao4">D</option>
                            <option value="opcao5">E</option>
                            <option value="opcao6">F</option>
                            <option value="opcao7">G</option>
                            <option value="opcao8">H</option>
                            <option value="opcao9">H2</option>
                            <option value="opcao10">I</option>
                            <option value="opcao11">J</option>
                            <option value="opcao12">K</option>
                            <option value="opcao13">L</option>
                            <option value="opcao14">M</option>
                            <option value="opcao15">N</option>
                            <option value="opcao16">O</option>
                            <option value="opcao17">P</option>
                            <option value="opcao18">Q</option>
                            <option value="opcao19">R</option>
                            <option value="opcao20">S</option>
                            <option value="opcao21">T</option>
                        </select>
                    </label>

                    <label htmlFor="corredor">
                        <span>Posição</span>
                        <select name="corredor" id="corredor" className='opcaoForm' >
                            <option value="opcao1">1</option>
                            <option value="opcao2">2</option>
                            <option value="opcao3">3</option>
                            <option value="opcao3">4</option>
                            <option value="opcao3">5</option>
                            <option value="opcao3">6</option>
                            <option value="opcao3">7</option>
                            <option value="opcao3">8</option>
                            <option value="opcao3">9</option>
                            <option value="opcao3">10</option>
                            <option value="opcao3">11</option>
                            <option value="opcao3">12</option>
                            <option value="opcao3">13</option>
                            <option value="opcao3">14</option>
                            <option value="opcao3">15</option>
                            <option value="opcao3">16</option>
                            <option value="opcao3">17</option>
                            <option value="opcao3">18</option>
                            <option value="opcao3">19</option>
                            <option value="opcao3">20</option>
                            <option value="opcao3">21</option>
                            <option value="opcao3">22</option>
                            <option value="opcao3">23</option>
                            <option value="opcao3">24</option>
                            <option value="opcao3">25</option>
                            <option value="opcao3">26</option>
                            <option value="opcao3">27</option>
                            <option value="opcao3">28</option>
                            <option value="opcao3">29</option>
                            <option value="opcao3">30</option>
                            <option value="opcao3">31</option>
                        </select>
                    </label>

                    <label htmlFor="nivel">
                        <span>Nível</span>
                        <select name="nivel" id="nivel" className='opcaoForm'>
                            <option value="opcao1">1</option>
                            <option value="opcao2">2</option>
                            <option value="opcao3">3</option>
                            <option value="opcao3">4</option>
                            <option value="opcao3">5</option>
                        </select>
                    </label>

                    <label htmlFor="codigo">
                        <span>Código</span>
                        <input type="text" name="codigo" id="codigo" />
                    </label>

                    <button className='botaoEditarPerfil'>Salvar</button>
                </form>

            </div>
            :null}
        </>
    )
}

export default Cadastrar