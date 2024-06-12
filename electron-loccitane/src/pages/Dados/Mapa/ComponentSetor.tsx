import './style.css';

function ComponenteSetor(props:any) {
    return (
        <>
            <div className='setorEspaco'>
                <span className="textSetor">{props.setor}</span>
                {props.corredor}
            </div>
        </>
    );
}

export default ComponenteSetor;