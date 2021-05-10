import style from "./Item.module.scss";
import Tooltip from '@material-ui/core/Tooltip';

export default function MenuItem(props: any) {
  return (
    <>
    <Tooltip title="Delete">
        <div className={style[props.type]} onClick={
          () => {
            if(props.modal){
              props.setModal(true)
            }
          }
        }>{props.icon}{ props.label ?  <span>{props.label}</span>:null}</div>
        </Tooltip>
        </>
  );
}
//Ver lo de pasarle un title para el tooltip

