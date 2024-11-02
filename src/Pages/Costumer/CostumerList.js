
import React from 'react';
//import './ToDoList.css';
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";
//import { ToDoContext } from '../ToDoContext';
//import { defaulttitleleftbarra, defaulListToDo, defaultImgUseEffect } from '../../../App_data';


function CostumerList(props) {
 
 return (
    <article className="costumerList">
    
      <p 
        className={`costumerList-p`}
      >
        {props.titleCostumer}
      </p>
      <input/>
    </article>
  );
}

export { CostumerList};