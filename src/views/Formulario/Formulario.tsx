import style from './Formulario.module.scss'
import Input from '../../components/InputForm/Input'
import { Dropdown } from 'primereact/dropdown';
import {useState} from 'react'

interface Errors{
    email?:string,
    password?:string,
/*     name:string,
    birthay:string,
    checkbox:string */
}
interface User{
    email:string,
    password: string,
}

 const errForm = function (
    email : string,
    password:string
  ) {
    const err = {email,password};
    if (!email.length || !email.includes('@')) {
      err.email = 'Email Invalid';
    }
    if (password.length <5) {
      err.password = 'Password Invalid';
    }
    return err;
  };
  

export default function Formulario(props:any){
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
      });
    const [errorRegisterFront, setErrorRegisterFront] = useState<Errors>({
          email:'',
          password:'',
      /*     name:'',
          birthay:'',
          checkbox:'' */
      });

      const handleOnChange = (event:any) => {

        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
// ver porque se setea el error siempre.
     const handleSubmitUser= () => {
        setErrorRegisterFront({});
         let objError = errForm(user.email,user.password)
       console.log(objError)
        if(objError.email){
            console.log(objError.email)
            setErrorRegisterFront({...errorRegisterFront,email:objError.email})
        }
        if(objError.password){
            setErrorRegisterFront({...errorRegisterFront,password:objError.password})
        }
        if(!objError.email || !objError.password){
            //aca hace el axios, o dispatch
            console.log(user.email,user.password)
        }

     }

    return(
     
        <div className={style.Formulario}> 
           <Input label='Email' name='email' type='text'  handleOnChange={handleOnChange}/>
           <Input label='Password' name='Password' type='password'  handleOnChange={handleOnChange}/>
       {/*     <Input label='Name' name='name'/>
           <Input label='Fecha de cumple' name='cumple'/> */}
           <Dropdown placeholder='select a city'/> 
           <button onClick={() => handleSubmitUser()}>Registrarme</button>
        </div>
    )
}

//Tomar los cambios en el input y setear estados locales con el Custom input. Luego cuando mando 'Registrarme' debo verificar que los campos tengan las sig:

//Email: Si o si el arroba o mail correcto.
//Password : Mas de 7 Caracteres, numeros.
//Name: Solo letras.
//Birthay: Calendar y fecha. 
//Agregar checkbox  

//En que momento cambio el estilo por uno que tenga border rojos?

//En el HandleSubmit al back, valido que este todo ok, si esta todo bien pimba, y sino que pinte eso de colores.

//No tiene sentido validar eso mientras escribo ya que no seria bueno mostrar errores mientras escribe.

//El error mostrara un borde rojo y un small abajo que diga el error!!!