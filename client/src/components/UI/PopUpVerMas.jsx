import React from 'react'
import "./popup.css";

function PopUpCarta(props) {
  return (props.trigger) ? (
    <div className='popup z-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center'>
        <div className='popup-cont relative p-8 w-full bg-white'>
            <button className='close absolute top-4 left-4 text-red-600' onClick={()=> props.setTrigger(false)}
            ><b>Cerrar</b></button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default PopUpCarta