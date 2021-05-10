import style from './Navbar.module.scss'
import logo from '../../pngs/loupe.png'
import faceLogo from '../../pngs/facebook.png'
import Input from '../../components/Input/Input'
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuItem from '../../components/MenuItem/MenuItem'
import AddIcon from '@material-ui/icons/Add';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { ReactElement } from 'react';
import {icon} from '../MenuColumn/MenuColumn'

export default function Navbar(props:any){

    const iconsIzquierda:ReactElement[] = [<HomeIcon />, <OndemandVideoIcon />,<StorefrontIcon />, <PeopleOutlineIcon />, <DashboardIcon/>]

    const iconsDerecha : ReactElement[] = [<AddIcon/>,<ChatOutlinedIcon/>,<NotificationsNoneOutlinedIcon/>,<ArrowDropDownOutlinedIcon/>]
    return(
        <div className={style.Navbar}>
            <div className={style.InputAndLogo}>
                <div>
               <a href="#"><img src={faceLogo} alt='none' style={{ width: '2.5rem' }}></img></a>
               </div>
               <div >
                <Input placeholder='Buscar en Facebook' type='NavbarInput' icon={icon(logo)}/>
                </div>
            </div>

            <div className={style.CenterNavContainer}>
            {iconsIzquierda.map((icon,i) => { 
                return  <MenuItem icon={icon} modal={i == 3 ? true : false } key={i} type='normal' setModal={props.setModal}/>
            })}
            </div>

            <div className={style.RightNavContainer}>
            {iconsDerecha.map((icon,i) => { 
                return  <MenuItem icon={icon} key={i} type='rounded' />
            })}
            </div> 
        </div>
    )
}