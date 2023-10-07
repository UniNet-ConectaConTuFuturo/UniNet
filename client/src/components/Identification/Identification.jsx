import "./form.css";
import "./Registro/registro.css";

import { useRef, useState, useTransition } from "react";
import Login from "./Login/Login";
import Registro from "./Registro/Registro";
function Identification() {
  const [, startTransition] = useTransition();
  const mainRef = useRef(null);
  const loginRef = useRef(null);
  const registroRef = useRef(null);
  const [isEntrant, setIsEntrant] = useState(true);
  function change() {
    console.log("cambiando");
  }
  function changeRegistro() {
    startTransition(() => {
      setIsEntrant(!isEntrant);
    });
  }
  return (
    <main
      ref={mainRef}
      className={"transition-colors duration-700 overflow-hidden h-screen"}
    >
      <video
        className="w-full h-screen absolute object-cover left-0 opacity-50"
        autoPlay
        muted
        loop
        src="/images/unlam.mp4"
        type="video/mp4"
      />
      <Login ref={loginRef} changeToRegistro={change} />
      <Registro
        ref={registroRef}
        changeToLogin={change}
        changeRegistro={changeRegistro}
        otroRegistroText={isEntrant ? "Soy RECTOR" : "Soy INGRESANTE"}
        isEntrant={isEntrant}
      />
    </main>
  );
}

export default Identification;
