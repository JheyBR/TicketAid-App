import React from 'react';
import './ToDoList.css';
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";
import { ToDoContext } from '../ToDoContext';
import { defaulttitleleftbarra, defaulListToDo, defaultImgUseEffect } from '../../../App_data';


function ToDoLIst(props) {
 
 return (
    <article className="toDoList">
      <CiCircleCheck
          onClick={props.onComplete} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}  
          size={30} 
      />
      <p 
        className={`toDoList-p
        ${props.completed && "toDoList-p--complete"}`}
      >
        {props.titleToDo}
      </p>
      <CiCircleRemove
          onClick={props.onDelete} className="Icon Icon-delete" 
          size={30} 
      />
    </article>
  );
}

export { ToDoLIst };


// function ToDoLIst() {
 
//   const { 
//     searchValue, 
//     setSearchValue, 
//     todoTotal,
//     todocompleted, 
//     todoRest, 
//     ValToDox,
//     completeToDo,
//     deleteToDo,
//     searchedToDo,
//     defaulttitleleftbarra,
//     loading,
//     error,
//     onComplete,
//     onDelete
                
//    } = React.useContext(ToDoContext);
  

//   return (
//      <article className="toDoList">
//        <CiCircleCheck
//            onClick={onComplete} className={`Icon Icon-check ${completed && "Icon-check--active"}`}  
//            size={30} 
//        />
//        <p 
//          className={`toDoList-p
//          ${completed && "toDoList-p--complete"}`}
//        >
//          {titleToDo}
//        </p>
//        <CiCircleRemove
//            onClick={onDelete} className="Icon Icon-delete" 
//            size={30} 
//        />
//      </article>
//    );
//  }
 
//  export { ToDoLIst };

