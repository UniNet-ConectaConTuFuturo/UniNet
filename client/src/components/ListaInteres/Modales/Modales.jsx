import { useLista } from "../../../hooks/useContexts";
import CarrerasUni from "../../Mapa/OutMapComponents/AsideInfo/CarrerasUni";
import Modal from "../../UI/Modal";
import Carta from "./Carta";

function Modales() {
  const {
    idUniToShowInfo,
    popUpVerMas,
    setPopUpVerMas,
    popUpCarta,
    setPopUpCarta,
  } = useLista();
  return (
    <>
      <Modal trigger={popUpVerMas} setTrigger={setPopUpVerMas}>
        <div className="max-h-[75vh] overflow-y-scroll">
          <CarrerasUni id_universidad={idUniToShowInfo} />
        </div>
      </Modal>

      <Modal trigger={popUpCarta} setTrigger={setPopUpCarta}>
        <Carta id_universidad={idUniToShowInfo} />
      </Modal>
    </>
  );
}

export default Modales;
