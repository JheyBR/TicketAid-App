import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BarraSuperior } from '../../ppal/BarraSuperior';
import { BarraSecundaria } from '../../ppal/BarraSecundaria';
import { FooterApp } from '../../ppal/FooterApp';
import { LeftBarra } from '../../ppal/LeftBarra';
import { MenuLeftBarra } from '../../ppal/MenuLeftBarra';
import { defaulttitleleftbarra} from '../../App_data';
import { CostumerPage } from './CostumerPage';
import { CostumerList } from './CostumerList';
import { CostumerSearch } from './CostumerSearch';
import { CostumerSection } from './CostumerSection';
import { CostumerAll } from './CostumerAll';
import React from 'react';
import '../../App.css';
import './css-c/Costumer.css';


function Costumer() {
  return (
      <React.Fragment>
        
          <BarraSuperior />
          <BarraSecundaria />
       
            <CostumerSection   >
                <CostumerSearch></CostumerSearch>
                <CostumerList></CostumerList>
            </CostumerSection>
 
            <MenuLeftBarra >
                  {defaulttitleleftbarra.map(titleleftarray => (
                    <LeftBarra
                    key={titleleftarray.leftoption} 
                    leftoption={titleleftarray.leftoption} 
                    iconleft={titleleftarray.iconleft}
                    linkleft={titleleftarray.linkleft}
                    /> ))}  
                </MenuLeftBarra>  
          <FooterApp />
      </React.Fragment>
      );
}



export default Costumer;