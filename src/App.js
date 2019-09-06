import React,{Component} from 'react';
import './lux.min.css';
import Hedaer from './Component/Header';
import Nuevacita from './Component/NuevaCita';
class App extends Component {
  state = { 
citas:[]
   }
   crearNuevaCita=datos=>{
//copias el state actual
const citas=[...this.state.citas,datos]

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
    </div>
    </div>
    );
  }
}
 
export default App;

