import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/cripto-logo.png";

const CoinNav = ({ actualizarData }) => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="d-flex">
        <Navbar.Brand className="d-flex align-items-center">
          <div>
            <img alt="logo" src={logo} className="img-logo" />
            <span>
              <b>CriptoCoin</b>
            </span>
          </div>
        </Navbar.Brand>
        <div>
          <button className="btn btn-coin" onClick={actualizarData}>
            Actualizar
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default CoinNav;
