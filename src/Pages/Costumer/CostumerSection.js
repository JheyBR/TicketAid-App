import React from 'react';
import { CostumerList } from './CostumerList';
//import Costumer from '.';
import { defaultCostumer } from '../../App_data';
import { CostumerPage } from './CostumerPage';



function CostumerSection(props,{ setOpenModal }) {
    return(
        <div>
          <div className="costumerSection">
            <h2 className="costumerHeader">Reportes y PQRS</h2>
            <div>   
            <CostumerPage>
            {defaultCostumer.map(Costumer => (
                <CostumerList
                key={Costumer.titleCostumer} 
                titleCostumer={Costumer.titleCostumer} 
                /> ))} 
            </CostumerPage>
            </div>        
            <article className="btnToDoHeader">
                <button 
                  className="btnAddToDo"
                  onClick={
                    // (
                  ()=>{
                       setOpenModal(state => !state);
                  }     
                  }
                  >
                                  
                </button>
            </article>
          </div>
          <div >
          </div>
        </div>
      )
}

export { CostumerSection};