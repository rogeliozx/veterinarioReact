import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListasCitas = ({citas,eliminarCita}) =>
{
    const mensaje=Object.keys(citas).length===0 ? 'Inserte una cita' : 'Citas del usuario';
    return(
<div className='card mt-2 py-5'>
<div className='card-bory'>
    <h2 className='card-title text-center'>{mensaje}</h2>
    <div className='lista-citas'>
    {citas.map((cita) =><Cita 
    key={cita.id} 
    eliminarCita={eliminarCita}
    cita={cita}/>)}
    </div>
</div>
</div>
)};
  
  ListasCitas.propTypes={
    citas:PropTypes.array.isRequired,
    eliminarCita:PropTypes.func.isRequired
  }
  
 
export default ListasCitas;