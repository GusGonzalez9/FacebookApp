import {validateExp,regex,passwordRegex,nameRegex,isRequired} from './Validators'

export  const errForm = function (
    emailUser : string,
    passwordUser:string,
    nameUser:string,
    birthay:boolean
  ) {
    const err = {email:'',password:'',name:'',birthay:''};
    if (!validateExp(emailUser,regex)) {
      err.email = 'Email Invalid';
    }
    if (!validateExp(passwordUser,passwordRegex)) {
      err.password = 'Must have letters, numbers, and more of 8 characters';
    }
    if(!validateExp(nameUser,nameRegex)){
      err.name = 'Name Invalid, must have only letters'
    }
    if(isRequired(birthay)){
      err.birthay = 'Checked is required'
    }
    return err;
  };

export const Countries = ['Argentina','Peru','Austria','Jordania','Italia','Panama','Chile']

//Email te pide @, mas de 2 caracteres luego del @ y luego del .

//Password te pide mayusculas, minusculas, numeros (cualquiera entre 0 y 9) y mas de 8 caracteres.


