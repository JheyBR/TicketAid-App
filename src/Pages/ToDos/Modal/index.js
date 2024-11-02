import React from "react";
// import { ReactDOM } from "react-router-dom";
import { createPortal} from 'react-dom'

function Modal ({ children }) {
    return createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('modal')
     );
}

export {Modal}