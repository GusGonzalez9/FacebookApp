import style from "./Input.module.scss";
import { InputText } from "primereact/inputtext";
import { spawn } from "child_process";

export default function Input(props: any) {

  return (
    <div className={style.InputCorrect}>
      <span className="p-float-label" style={{ width: "100%" }}>
        <InputText
          id="in"
          style={{ width: "100%" }}
          className={props.error ? "p-invalid p-d-block" : "p-d-block"}
          autoComplete="off"
          onChange={(e) => props.handleOnChange(e)}
          name={props.name}
          autoFocus
          type={props.type}
        />
        <label htmlFor="in">{props.label}</label>
      </span>
      {props.error ? (
        <span className={style.spanError}>{props.error}</span>
      ) : null}
    </div>
  );
}
//setearlo con un className no con style
