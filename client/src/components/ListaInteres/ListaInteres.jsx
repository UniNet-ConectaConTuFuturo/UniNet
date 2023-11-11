import { useState } from "react";
/* Icons */

/* css */
import "./ListaInteres.css";
/* Components */
import Item from "./Item";
import Modal from "../UI/Modal";
import { Empty, List, theme } from "antd";
import { useLoaderData } from "react-router-dom";
import CarrerasUni from "../Mapa/OutMapComponents/AsideInfo/CarrerasUni";
import GuiaUsoIngresante from "./GuiaUsoIngresante";
import Carta from "./Carta/Carta";
import ListaProvider from "./ListaProvider";
/* Scrollbar */
import "simplebar";
import "simplebar/dist/simplebar.css";


function ListaInteres() {
  //Lista
  const favoritas = useLoaderData();
  //Modal
  const [buttonPopUpCarta, setButtonPopUpCarta] = useState(false);
  const [buttonPopUpVerMas, setButtonPopUpVerMas] = useState(false);
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);
  const { ["token"]: antd } = theme.useToken();
  console.log(favoritas);
  return (
    <ListaProvider>
      <main className="bg-teal-700 h-screen py-8">
        <div data-simplebar className="ml-40 mr-4 pr-8 h-full ">
          <div className="float-right">
            <GuiaUsoIngresante />
          </div>
          <h1
            style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
            className="text-6xl mb-4 px-2 pb-2 inline-block font-sans"
          >
            Lista de Interés
          </h1>
          {favoritas.length ? (
            <List
              pagination={{ align: "center", pageSize: 3 }}
              dataSource={favoritas}
              renderItem={(u) => (
                <Item
                  key={u.id_universidad}
                  setButtonPopUpVerMas={setButtonPopUpVerMas}
                  setButtonPopUpCarta={setButtonPopUpCarta}
                  id_universidad={u.id_universidad}
                  setIdUniToShowInfo={setIdUniToShowInfo}
                />
              )}
            />
          ) : (
            <div
              style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
              className="p-4"
            >
              <Empty
                imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
                style={{ fontWeight: 700 }}
                description="Lista vacia"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            </div>
          )}
        </div>

        <Modal trigger={buttonPopUpVerMas} setTrigger={setButtonPopUpVerMas}>
          <CarrerasUni id_universidad={idUniToShowInfo} />
        </Modal>

        <Modal trigger={buttonPopUpCarta} setTrigger={setButtonPopUpCarta}>
          <Carta id_universidad={idUniToShowInfo} />
        </Modal>
      </main>
    </ListaProvider>
  );
}

export default ListaInteres;
