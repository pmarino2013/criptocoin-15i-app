import React from "react";
import numeral from "numeral";
import CoinSymbol from "./CoinSymbol";

const CoinTable = ({ coins }) => {
  const { datos } = coins;
  return (
    <table className="table table-coin">
      <thead>
        <tr>
          <th>Rank</th>
          <th className="d-flex justify-content-center">Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>VWAP(24Hr)</th>
          <th>Supply</th>
          <th>Volumen (24Hr)</th>
          <th>Change (24Hr)</th>
        </tr>
      </thead>
      <tbody>
        {datos?.map((coin) => (
          <tr key={coin.id}>
            <td className="fw-bold">{coin.rank}</td>
            <td className="d-flex align-items-center ps-3">
              <CoinSymbol symbol={coin.symbol} />
              {coin.name}
            </td>
            <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
            <td>{numeral(coin.marketCapUsd).format("($ 0.00 a)")}</td>
            <td>{numeral(coin.vwap24Hr).format("$0,0.00")}</td>
            <td>{numeral(coin.supply).format("($ 0.00 a)")}</td>
            <td>{numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")}</td>
            <td
              className={
                coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
              }
            >
              {parseFloat(coin.changePercent24Hr).toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
