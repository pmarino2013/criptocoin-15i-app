import React, { useEffect, useState } from "react";
import { getCoins } from "../helpers/fetchCoins";
import CoinNav from "../components/CoinNav";
import CoinTable from "../components/CoinTable";
const HomeScreen = () => {
  const [coins, setCoins] = useState({
    datos: [],
    loading: true,
    update: true,
  });

  //Monta
  useEffect(() => {
    getCoins().then((respuesta) => {
      setCoins({
        datos: respuesta,
        loading: false,
        update: false,
      });
      // console.log(respuesta);
    });
  }, [coins.update]);

  //Actualiza
  const actualizarData = () => {
    setCoins({
      ...coins,
      update: true,
    });
  };
  //desmonta

  //fetch
  // getCoins().then((respuesta) => {
  //   console.log(respuesta);
  // });

  return (
    <div>
      <CoinNav actualizarData={actualizarData} />
      {/* 
     navbar
     
     ----------
     barra de busqueda
     -------------------
     tabla 
     --------------------
     */}

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            {coins.loading ? (
              <h3 className="text-white text-center">Cargando...</h3>
            ) : (
              <CoinTable coins={coins} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
