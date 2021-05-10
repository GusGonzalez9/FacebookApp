import Input from '../../components/Input/Input'
import style from './Form.module.scss'
import Avatar from '../../components/Avatar/Avatar'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import MenuItem from '../../components/MenuItem/MenuItem'
import avatar from '../../pngs/avatar.png'
let icons = [
    {icon: <VideocamIcon style={{color:'red'}}/>,label:'Video en vivo'},
    {icon: <PhotoCameraOutlinedIcon style={{color:'#38b000'}}/>,label:'Foto/Video'}
]

export default function Formulario(){
    return (
        <div className={style.formulario}>
            <div className={style.subForm}>
            <Avatar avatar={avatar}/>
            <div className={style.input}>
            <Input placeholder='Que estas pensando, Gus?' type='formInput' />
            </div>
            </div>
            <div style={{width:'95%',display:'flex',justifyContent:'center',marginBottom:'.9rem'}}>
                {icons.map((icon,i) => {
                    return <MenuItem icon={icon.icon} label={icon.label} type='twoRectangle' key={i}/>
                })}
            </div>
        </div>      
    )
}
