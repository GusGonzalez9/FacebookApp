import style from './Card.module.scss'
import Avatar from '../Avatar/Avatar'
import like from '../../pngs/like.png'
import corazon from '../../pngs/corazon.png'
import {icon} from '../../views/MenuColumn/MenuColumn'




//suponiendo que traemos las publicaciones de una base de datos, mappearimos en Home el componente Card pasandole por props comentarios, perfil, etc, por lo que debo emular este comportamiento.

export default function Card (props:any){
    return(
        <div className={style.Card}>
            <div className={style.Profile}>
                <div className={style.User}>
                <Avatar avatar={props.imgPerfil}/>
                <div className={style.spans}>
                    <span>{props.namePerfil}</span>
                    <span>{props.horario}</span>
                </div>
                </div>
                <div>
                    
                </div>
            </div>
            <div className={style.Publicacion}>
                <img src={props.publicacion}></img>
            </div>
            <div className={style.Reviews}>
                <div className={style.reacciones}>
                   <>{icon(like,'16px')}{icon(corazon,'15px')}</>
                    <span>{props.reacciones}</span>
                </div>
                <div className={style.comentarios}>
                    <span>{props.comentarios} comentarios y {props.compartidos} compartidos</span>
                </div>
            </div>
            <div className={style.Buttons}></div>
        </div>
    )
}
