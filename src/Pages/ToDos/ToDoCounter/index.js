import React from 'react';
//import '../../App.css';
import '../ToDos.css';
import { ToDoContext } from '../ToDoContext';




// function ToDoCounter() {
//    const { 
//    todoTotal,
//                 todocompleted, 
//                 todoRest, 
//                 ValToDox,
               
//   } = React.useContext(ToDoContext);
 

//    return (
//     <div className="counterToDo">
//       <p className={`${props.valToDox && "withoutToDos"}`}> Has realizado 
    
//         <span> {props.todocompleted} </span> 
//         tareas de 
//         <span> {props.todoTotal} </span> 
//         listadas 
//       </p>
//       <p> Tienes pendientes 
//         <span> {props.todoRest} </span> 
//         por hacer 
//       </p>
//       <p className= {`counterInfo ${props.ValToDox && "withoutToDosShow"}`}> Muy Bien ya no tienes Tareas Pendientes</p>
//     </div>
//       );

     
// }

// export default ToDoCounter;

function ToDoCounter() {
  const { 
  todoTotal,
               todocompleted, 
               todoRest, 
               ValToDox,
              
 } = React.useContext(ToDoContext);


  return (
   <div className="counterToDo">
     <p className={`${ValToDox && "withoutToDos"}`}> Has realizado 
   
       <span> {todocompleted} </span> 
       tareas de 
       <span> {todoTotal} </span> 
       listadas 
     </p>
     <p> Tienes pendientes 
       <span> {todoRest} </span> 
       por hacer 
     </p>
     <p className= {`counterInfo ${ValToDox && "withoutToDosShow"}`}> Muy Bien ya no tienes Tareas Pendientes</p>
   </div>
     );

    
}

export default ToDoCounter;