import style from './Input.module.scss'
export default function Input (props:any){
    return(
        
        <div className={style[props.type]}>
            {props.icon ? <i>{props.icon}</i> : null}
            <input placeholder={props.placeholder} ></input>
        </div>
    )
}

