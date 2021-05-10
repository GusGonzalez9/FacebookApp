import style from './Menu.module.scss'
import MenuItem from '../../components/MenuItem/MenuItem'
import shop from '../../pngs/shop.png'
import group from '../../pngs/grupo.png'
import video from '../../pngs/video.png'
import recuerdos from '../../pngs/recuerdos.png'
import guardado from '../../pngs/guardado.png'
import evento from '../../pngs/evento.png'
import coronavirus from '../../pngs/coronavirus.png'
import pages from '../../pngs/pages.png'
import avatar from '../../pngs/avatar.png'


export function icon(src='https://www.flaticon.es/premium-icon/icons/svg/4015/4015804.svg',width='18px'){
    return <i><img src={src} width={width}></img></i>
}


let icons= [
    {label: 'Gus Gonzalez',icon:icon(avatar)},
    {label: 'COVID-19: Centro de informacion',icon:icon(coronavirus)},
    {label: 'Amigos',icon:icon()},
    {label: 'Paginas',icon:icon(pages)},
    {label: 'Grupos',icon:icon(group)},
    {label: 'Marketplace',icon:icon(shop)},
    {label: 'Watch',icon:icon(video)},
    {label: 'Eventos',icon:icon(evento)},
    {label: 'Recuerdos',icon:icon(recuerdos)},
    {label: 'Guardados',icon:icon(guardado)}
]

export default function MenuColumn (){

    return(
        <div className={style.Menu}>
            {icons.map((icon,i) => {
          return  <MenuItem icon={icon.icon} label={icon.label} type='rectangle' key={i}/>
            })}
            
        </div>
    )
}