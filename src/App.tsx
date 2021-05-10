import Navbar from './views/Navbar/Navbar'
import Formulario from './views/FormPublicar/FormPublicar'
import MenuColumn from './views/MenuColumn/MenuColumn'
import Card from './components/Card/Card'
import Publicaciones from './views/Publicacion/Publicaciones'
import Modal from './views/Modal/Modal'
import {useState} from 'react'
import  './App.scss'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

function App() {

  const [modal,setModal] = useState<Boolean>(false) 

  return (
    <div className="App">
     <Navbar setModal={setModal}/>
     <Modal setModal={setModal} modal={modal}/>
     <div className="Home">
     <div className="MenuColumn">
     <MenuColumn/>
     </div>
     <div className="HomeCenter">
     <Formulario/>
     <Publicaciones/>
     </div>
     <div className="MenuDerecha">
     </div>
     </div>
    </div>
  );
}

export default App;
