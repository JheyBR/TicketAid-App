import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { defaulttitleleftbarra, defaulListToDo, defaultImgUseEffect } from '../../../App_data';


const ToDoContext = React.createContext();

function ToDoProvider({children}){
    // function ToDoProvider(props) {
        const {
            item: ToDos, 
            saveItem: saveToDos,
            loading,
            error,
          }  
            = useLocalStorage('LSListToDO', []); 
      
        const [searchValue, setSearchValue] = React.useState('');
        const [openModal, setOpenModal] = React.useState(true);
       
      
        const searchedToDo = ToDos.filter(
          (toDo)=> {  
            const toDotext = toDo.titleToDo.toLowerCase();
            const searchtoDo = searchValue.toLowerCase();
            return toDotext.includes(searchtoDo);
          }
        );
      
        const completeToDo = (titleToDo) => {
          let newToDos = [...ToDos];
          let toDoIndex = newToDos.findIndex(
            (toDo) => toDo.titleToDo === titleToDo
          );
          newToDos[toDoIndex].completed = true;
            saveToDos(newToDos);
        };
      
        const deleteToDo = (titleToDo) => {
          let newToDos = [...ToDos];
          console.log(newToDos);
          let toDoIndex = newToDos.findIndex(
            (toDo) => toDo.titleToDo === titleToDo
          );
          newToDos.splice(toDoIndex, 1);
          saveToDos(newToDos);
          
        };
      
      
        const todoTotal = ToDos.length;
        const todocompleted = ToDos.filter(
          ToDoc => ToDoc.completed).length;
        const todoRest = todoTotal - todocompleted;
      
        const valToDo = (todoRest) => {
          if (todoRest===0){
             return true
           } else {
            return false
           }
        }
      
        const ValToDox = valToDo(todoRest);
    
        return(
            <ToDoContext.Provider value={{
                searchValue, 
                setSearchValue, 
                todoTotal,
                todocompleted, 
                todoRest, 
                ValToDox,
                completeToDo,
                deleteToDo,
                searchedToDo,
                defaulttitleleftbarra,
                loading,
                error,
                setOpenModal,
                openModal
            }}>
               {children}
            </ToDoContext.Provider>   
        );
    }



export {ToDoContext, ToDoProvider};
