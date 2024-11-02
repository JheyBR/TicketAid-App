import React from 'react';
//import '../../App.css';
import '../ToDos.css';
import './TodosEmpty.css';




function TodosEmpty(props) {
   
 

  return (

    <article className="sklLoading">
    <img className='sklimgLoad' src='https://cdn-icons-gif.flaticon.com/8716/8716767.gif' label='Empty' />
    <h2 className="titleSklLoad">Agregar</h2>
    <p className="pSklLoad">Puedes Agregar una tarea por hacer a la lista</p>
    </article>


  );

     
}

export {TodosEmpty};