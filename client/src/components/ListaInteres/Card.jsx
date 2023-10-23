import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../api/api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";

function Card({
  setButtonPopUpVerMas,
  setButtonPopUpCarta,
  setIdUniToShowInfo,
  id_universidad,
}) {
  const [universidad, setUniversidad] = useState(null);

  useEffect(() => {
    (async () => {
      setUniversidad(await get("/get/uni", { id_universidad }));
    })();
  }, [id_universidad]);

  return (
    <>
    {universidad && (
      <>
      <Descriptions
        title={universidad.nombre_universidad}
        items={[
          {
            label: "Dirección",
            children: (
              <a
              href={universidad.maps_universidad}
              target="_blank"
              rel="noreferrer"
              >
                {universidad.direccion_universidad},{" "}
                {universidad.localidad_universidad},{" "}
                {universidad.zona_universidad}
              </a>
            ),
          },
        ]}
        />
        <div className="card w-full h-full">
          <div className="card-body">
            <p className="card-text"></p>
            <br />
            <button
              onClick={() => {
                setIdUniToShowInfo(id_universidad);
                setButtonPopUpVerMas(true);
              }}
              >
              Ver información completa de la universidad
            </button>
            <br />
            <br />
            <Link
              to={`/mapa/@${universidad.Point.x},${universidad.Point.y},13z?selected=${id_universidad}`}
              className="card-link"
              >
              Ver en el mapa
            </Link>
            <br />
            <button
              onClick={() => {
                setIdUniToShowInfo(id_universidad);
                setButtonPopUpCarta(true);
              }}
            >
              Enviar Carta
            </button>
            <h2 className="right-0 inline pl-40">Estado: </h2>
            <p className="inline text-green-500">ACEPTADO</p>
          </div>
        </div>
      </>
      )}
    </>
  );
}
Card.propTypes = {
  setButtonPopUpVerMas: PropTypes.func,
  setButtonPopUpCarta: PropTypes.func,
  setIdUniToShowInfo: PropTypes.func,
  id_universidad: PropTypes.number,
};

export default Card;
