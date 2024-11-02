

// import {useLocalStorage} from './Components/useLocalStorage';
import React from 'react';
import { TodoUI } from './TodoUI';
import { ToDoProvider } from './ToDoContext';
//import { Logo } from '/Users/usuario/Desktop/VSC/My Projects/TicketAid/react-intro/src/ppal/Logo';
//import { defaulListToDo } from '../../App_data';
// import { defaulttitleleftbarra  } from '../../App_data';

// localStorage.removeItem('LSListToDO');

// const defaulListToDo =[ 
//   {titleToDo: 'Revisar el PH en Enrtrada de Agua y Tanques', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Revisar Ph y Cloro en Llaves 1, 2, llenado de botellon y Bolsas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Hacer retrolavado de Arena, Zeolita y Carbon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Hacer lavado de Microfiltros', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Dos ciclos de ozono en cada jornada', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Hacer los arreglos de botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Lavar estibas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Dejar seco el area de Produccion', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false },
//   {titleToDo: 'Vaciar el agua de Saniger en la maquina de Botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Dejar todas las pacas en Bodega', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'NO dejar Botellones Vacios', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false}
// ];

// localStorage.setItem('LSListToDO',JSON.stringify(defaulListToDo))
  
function ToDos() {
 
   return (
    <ToDoProvider>
      
      <TodoUI/>
    
    </ToDoProvider>
      );

}

export default ToDos;



