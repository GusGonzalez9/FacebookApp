export interface Errors{
    email?:string,
    password?:string,
   name?:string,
    birthay?:string,
    country?:string 
}
export interface User{
    email:string,
    password: string,
    name: string,
    birthay:boolean,
    country?:string 
}

