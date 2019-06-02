import React, { Component } from "react";
import { Row, Col } from "antd";
import hands from "../images/hands-orange.png";
import parrainer from "../images/parrainer.png";
import train from "../images/train.png";
import beneficier from "../images/beneficier.png";
import { Button } from "antd";

export default class whoWeAre extends Component {
  state = {
    hoverJoinUs: false
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            {" "}
            <div
              style={{
                backgroundImage: `url(${hands})`,
                height: "50vh",
                textAlign: "center",
                position: "relative",
                opacity: "0.6"
              }}
            >
              <div
                style={{
                  opacity: "1",
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "2.55em"
                }}
              >
                <span>
                  {" "}
                  Nous sommes un groupe d’ingénieurs, qui ont voulu passer à
                  l’action, d’où le nom de notre association « Yo Act ». Notre
                  association vise à encourager les jeunes Marocains à
                  participer vivement dans la vie associative.
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                height: "40vh",
                textAlign: "center",
                position: "relative"
              }}
            >
              <div
                style={{
                  opacity: "1",
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "1.6em"
                }}
              >
                <span>
                  {" "}
                  Pour atteindre notre ambitieux objectif nous essayons de
                  développer l’esprit d’initiative chez les Jeunes Marocaines et
                  Marocains, suivant 3 étapes clairement définies
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: "auto", textAlign: "center" }}>
          <Col span={8} style={{ position: "relative", minHeight: "25vh" }}>
            <div
              style={{
                opacity: "1",
                margin: "0",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.6em"
              }}
            >
              <img src={parrainer} style={{ height: "150px" }} />
              <br />
              <br />

              <div>Parrainer et accompagner</div>
            </div>
          </Col>
          <Col span={8} style={{ position: "relative", minHeight: "25vh" }}>
            <div
              style={{
                opacity: "1",
                margin: "0",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.6em"
              }}
            >
              <img src={train} style={{ height: "150px" }} />
              <br />
              <br />

              <div>Former les Jeunes</div>
            </div>
          </Col>
          <Col span={8} style={{ position: "relative", minHeight: "25vh" }}>
            <div
              style={{
                opacity: "1",
                margin: "auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.6em"
              }}
            >
              <img src={beneficier} style={{ height: "150px" }} />
              <br />
              <br />

              <div>benefique pour la population</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              marginTop: "200px",
              padding: "50px 0px",
              backgroundColor: "#91C9D3",
              textAlign: "center",
              fontSize: "2.5em",
              position: "relative"
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                borderTop: "30px solid #F0F2F5",
                position: "absolute",
                top: "0%",
                left: "50%",
                transform: "translate(-50%, 0%)"
              }}
            />
            <div style={{ width: "50%", margin: "auto" }}>
              Conscient du fait que le bénévolat et le sens de partage sont des
              choses inhérentes dans l’humanité, nous nous engageons à établir
              un bon environnement de travail pour joindre l’action au terrain.
            </div>
            {!this.state.hoverJoinUs ? (
              <div
                style={{
                  margin: " 30px auto 20px auto",
                  width: "30%",
                  border: "2px solid black",
                  verticalAlign: "center",
                  lineHeight: "normal",
                  borderRadius: "5px",
                  fontSize: "0.8em",
                  padding: "15px 0px"
                }}
                onMouseEnter={() => this.setState({ hoverJoinUs: true })}
              >
                Rejoingnez nous
              </div>
            ) : (
              <div
                style={{
                  margin: " 30px auto 20px auto",
                  width: "30%",
                  backgroundColor: "#75a0a8",
                  border: "2px solid black",
                  verticalAlign: "center",
                  lineHeight: "normal",
                  borderRadius: "5px",
                  fontSize: "0.8em",
                  padding: "15px 0px",
                  cursor: "pointer"
                }}
                onMouseLeave={() => this.setState({ hoverJoinUs: false })}
              >
                Rejoignez nous
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
