export const validateExp = (value:string,regex:RegExp)=>{
    const expresion = new RegExp(regex)
    return expresion.test(value)
  }
  
  export const isRequired = (value:boolean):boolean =>{
   if(value) return true 
   return false 
}

  export const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  export const nameRegex = /^[A-Za-z]+$/;

