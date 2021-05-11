import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import style from './Modal.module.scss'
import Formulario from '../Formulario/Formulario'

export default function Modal (props:any)  {
    return (
        <div className={style['dialog-demo']}>
                <Dialog header="Register" closeOnEscape={true} visible={props.modal} style={{ width: '40vw' }}  onHide={()=> props.setModal(false)}>
                   <Formulario/>
                </Dialog>
        </div>
    )
}