import style from './Input.module.scss';
import { InputText } from 'primereact/inputtext';

export default function Input(props:any){
    return(
        <div className={style.InputCorrect}>
          <InputText style={{width:'100%'}} name={props.name} autoFocus type={props.type} autoComplete='off' onChange={(e) => props.handleOnChange(e)}/>
            <label>{props.label}</label>
        </div>
    )
}

