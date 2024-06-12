import './style.css';
import Prateleira from '../../assets/svg/prateleira/prateleira.svg'
import Palete from '../../assets/svg/prateleira/palete.svg'
import Base from '../../assets/svg/prateleira/base.svg'

function ComponenteCorredor(props: any) {
    return (
        <>
            <div className='corredor'>
                <span>{props.corredor}</span>
                {props.prateleira}
                {props.quantidade}
                
            </div>
        </>
    );
}

export default ComponenteCorredor;