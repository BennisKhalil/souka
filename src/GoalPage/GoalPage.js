import React, { Component } from "react";
import { Row, Col } from "antd";
import initiave from "../images/intiative.jpg";
import morocco from "../images/morocco.jpg";
import banque from "../images/banque.svg";
import development from "../images/development.png";

export default class GoalPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span="10">
            <img
              src={initiave}
              style={{ width: "100%", height: "80vh" }}
              alt="initiative"
            />{" "}
          </Col>
          <Col span="14" style={{ position: "relative", height: "80vh" }}>
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2.55em"
              }}
            >
              Réaliser 6 Initiatives par année dans le domaine social, solidaire
              et culturel
            </div>
          </Col>
        </Row>
        <Row>
          <Col span="10" style={{ position: "relative", height: "100vh" }}>
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2.55em"
              }}
            >
              Faire bénéficier des actions de nos initiatives 5 différentes
              régions du royaume, pour chaque initiative
            </div>
          </Col>
          <Col span="14">
            {" "}
            <img
              src={morocco}
              style={{ width: "100%", height: "100vh" }}
              alt="initiative"
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col span="10">
            <img
              src={banque}
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#ADD45C"
              }}
              alt="banque"
            />
          </Col>
          <Col
            span="14"
            style={{
              position: "relative",
              height: "100vh"
            }}
          >
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2.55em"
              }}
            >
              Gérer un budget de l’association de 500 000 MAD pour la
              réalisation des initiatives sociales et solidaires
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            span="12"
            style={{
              position: "relative",
              height: "100vh"
            }}
          >
            <div
              style={{
                margin: "0",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2.55em"
              }}
            >
              Participer dans le développement de la vie associative marocaine
              par nos formations et notre accompagnement des jeunes marocains
            </div>
          </Col>
          <Col span="12">
            <img
              src={development}
              style={{
                width: "100%",
                height: "100vh"
              }}
              alt="dev"
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
