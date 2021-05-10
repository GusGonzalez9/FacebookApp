import Card from '../../components/Card/Card'
import primerPerfil from '../../pngs/man.png'
import segundoPerfil from '../../pngs/programmer.png'
import boca from '../../pngs/boca.jpg'
import montaña from '../../pngs/montaña.jpg'
import icon from '../MenuColumn/MenuColumn'


let publicaciones = [{
    imgPerfil : segundoPerfil,
    namePerfil:'Franco Soldano',
    horario:'8 hs',
    publicacion: montaña,
    reacciones:'3mil',
    comentarios:'100',
    compartidos:'3'
},{
    imgPerfil : primerPerfil,
    namePerfil:'Gus Gonzalez',
    horario:'4 de Abril a las 20 hs',
    publicacion:boca,
    reacciones:'1',
    comentarios:'2',
    compartidos:'1'
}, 
]

export default function Publicaciones (){
// pido las db las publicaciones y las mapeo pasandole props sobre quien publico, que publico y demas.

    return(
        <>
        {publicaciones.map((post,i)=> {
       return  <Card namePerfil={post.namePerfil} horario={post.horario} publicacion={post.publicacion} imgPerfil={post.imgPerfil} comentarios={post.comentarios} compartidos={post.compartidos} key={i} reacciones={post.reacciones}/>
        })}
       
        </>
 )
}