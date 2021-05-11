import style from "./Formulario.module.scss";
import Input from "../../components/InputForm/Input";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { errForm, Countries } from "../../Utils/funcionValidator";
import { Errors, User } from "./InterfaceForm";
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';

export default function Formulario(props: any) {

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    name:"",
    birthay:false,
    country:''
  });

  const [errorRegisterFront, setErrorRegisterFront] = useState<Errors>({
    email: "",
    password: "",
    name:'',
    birthay:'',
    country:''
  });

  const [selectedCountry, setSelectedCountry] = useState<String>("");

  const [date, setSelectedDate] = useState<Date | Date[] | undefined>(undefined);


  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmitUser = () => {
    setErrorRegisterFront({});
    let objError = errForm(user.email, user.password,user.name,user.birthay);
    
    if (objError.email || objError.password || objError.name || objError.birthay) {
      setErrorRegisterFront({
        ...errorRegisterFront,
        email: objError.email,
        password: objError.password,
        name: objError.name,
        birthay:objError.birthay
      });
   
    }else{
        setErrorRegisterFront({})
    }

    if (!objError.email || !objError.password) {
      //aca hace el axios, o dispatch del user.
      console.log('...Registrando usuario',user)
    }
  };

  return (
    <div className={style.Formulario}>
      <Input
        label="Email"
        name="email"
        type="text"
        error={errorRegisterFront.email ? errorRegisterFront.email : false}
        handleOnChange={handleOnChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        error={errorRegisterFront.password ? errorRegisterFront.password : false}
        handleOnChange={handleOnChange}
      />
      <Input label="Name" name="name" type="text"
       handleOnChange={handleOnChange}
       error={errorRegisterFront.name ? errorRegisterFront.name : false}
       />

     <div  style={{ width: "95%", margin: "1rem 1rem 1.2rem 1rem" }}>
     <Calendar placeholder='select your date of birth' className={style.Drop} required id="icon" icon='pi pi-calendar' value={date} onChange={(e: any) => setSelectedDate(e.value)} />
     </div>

      <div className={style.Dropdown}>
        <Dropdown
          className={style.Drop}
          placeholder="select a city"
          value={selectedCountry}
          options={Countries}
          onChange={(e) => setSelectedCountry(e.target.value)}
        />
      </div>
      <div  style={{ width: "95%", margin: "1rem 1rem 1.2rem 1rem" }}>      
      <Button
        label="Register"
        icon="pi pi-check"
        style={{width:'100%'}}
        onClick={() => handleSubmitUser()}
      />
      </div>
    </div>
  );
}

