import style from './Avatar.module.scss'
export default function Avatar (props:any){
    return(
        <div className={style.Avatar}>
          <img src={props.avatar} style={{width:'100%',borderRadius:'50%',height:'100%'}}></img>
        </div>
    )
}


