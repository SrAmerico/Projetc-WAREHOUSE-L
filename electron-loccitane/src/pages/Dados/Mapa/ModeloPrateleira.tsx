import './style.css'
import Prateleira from '../../../assets/svg/prateleira/prateleira.svg'
import Palete from '../../../assets/svg/prateleira/palete.svg'
import Base from '../../../assets/svg/prateleira/base.svg'

function ModeloPrateleira(props:any){
    return(<>
    <div className='prateleira'>
                    <div className='baseVertical'>
                        <img src={Base} className='primeira-base'/>
                        <img src={Base} className='segunda-base'/>
                    </div>
                    <div className='baseHorizontal'>
                        <div className='prateleiraBase'>
                            {props.status1 == 'preenchido'?<img src={Palete} className='palete'/> : null}
                            <img src={Prateleira} className='prateleira-b'/>
                        </div>
                        <div className='prateleiraBase'>
                            {props.status2 == 'preenchido'?<img src={Palete} className='palete'/> : null}
                            <img src={Prateleira} className='prateleira-b'/>
                        </div>
                        <div className='prateleiraBase'>
                            {props.status3 == 'preenchido'?<img src={Palete} className='palete'/> : null}
                            <img src={Prateleira} className='prateleira-b'/>
                        </div>
                        <div className='prateleiraBase'>
                            {props.status4 == 'preenchido'?<img src={Palete} className='palete'/> : null}
                            <img src={Prateleira} className='prateleira-b'/>
                        </div>
                    </div>
                    <div className='baseVertical ultima-base'>
                        <img src={Base} className='primeira-base'/>
                        <img src={Base} className='segunda-base'/>
                    </div>
                </div>
    </>);
}

export default ModeloPrateleira