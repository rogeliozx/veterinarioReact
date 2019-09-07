import React,{Component} from 'react';
import './lux.min.css';
import Hedaer from './Component/Header';
import Nuevacita from './Component/NuevaCita';
import ListaCitas from './Component/ListasCitas';
class App extends Component {
  state = { 
citas:[]
   }
   //cuando aplicacion carga
   componentDidMount(){
     const citasLS=localStorage.getItem('citas');
    
     if(citasLS){
       this.setState({
        citas:JSON.parse(citasLS)
       })
     
     }

   }
   //cuando eliminamos o agregamos
   componentDidUpdate(){
     localStorage.setItem('citas',JSON.stringify(this.state.citas));

   }
   crearNuevaCita=datos=>{
//copias el state actual
const citas=[...this.state.citas,datos]

this.setState({
  citas
})
   }
   //eliminar citas
   eliminarCita=id=>{
//tomar copia state
const citasActuales=[...this.state.citas]
//utilizar filter
const citas=citasActuales.filter(cita=>cita.id!==id)
//actualizar state
this.setState({
  citas
})
   }
  render() { 
    return ( 
      <div className='container'>
    <Hedaer
    titulo='Veterinaria Puppy Magic'
    />
    <div className='row'>
      <div className='col-md-10 mx-auto'>
      <Nuevacita
      crearNuevaCita={this.crearNuevaCita}
      />
      </div>
      <div className='mt-5 col-md-10 mx-auto'>
      <ListaCitas
      citas={this.state.citas}
      eliminarCita={this.eliminarCita}
      />
      </div>
    </div>
    </div>
    );
  }
}
 
export default App;

