import './style.css'

function Deletar(props:any){
    return(
    <>
        <>
            {props.usuario === true?
        <div className='formBox'>
            
            
            <form className='form'>
                <h1>Remover</h1>
                <label htmlFor=""><span>Email</span>  <input type="text" name="" id="" /></label>
                <button className='botaoEditarPerfil'>Deletar</button>
            </form>
            
        </div>:null}
            {props.estoque === true?
            <div className='formBox'>

                <form className='form'>
                    <h1>Remover</h1>

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
                            <option value="opcao4">4</option>
                            <option value="opcao5">5</option>
                            <option value="opcao6">6</option>
                            <option value="opcao7">7</option>
                            <option value="opcao8">8</option>
                            <option value="opcao9">9</option>
                            <option value="opcao10">10</option>
                            <option value="opcao11">11</option>
                            <option value="opcao12">12</option>
                            <option value="opcao13">13</option>
                            <option value="opcao14">14</option>
                            <option value="opcao15">15</option>
                            <option value="opcao16">16</option>
                            <option value="opcao17">17</option>
                            <option value="opcao18">18</option>
                            <option value="opcao19">19</option>
                            <option value="opcao20">20</option>
                            <option value="opcao21">21</option>
                            <option value="opcao22">22</option>
                            <option value="opcao23">23</option>
                            <option value="opcao24">24</option>
                            <option value="opcao25">25</option>
                            <option value="opcao26">26</option>
                            <option value="opcao27">27</option>
                            <option value="opcao28">28</option>
                            <option value="opcao29">29</option>
                            <option value="opcao30">30</option>
                            <option value="opcao31">31</option>
                        </select>
                    </label>

                    <label htmlFor="nivel">
                    <span>Nível</span>
                        <select name="nivel" id="nivel" className='opcaoForm'>
                            <option value="opcao1">1</option>
                            <option value="opcao2">2</option>
                            <option value="opcao3">3</option>
                            <option value="opcao4">4</option>
                            <option value="opcao5">5</option>
                        </select>
                    </label>

                    <label htmlFor="codigo">
                        <span>Código</span>
                        <input type="text" name="codigo" id="codigo" />
                    </label>

                    <button className='botaoEditarPerfil'>Deletar</button>
                </form>

            </div>
            :null}
        </>
    </>
    )
}

export default Deletar