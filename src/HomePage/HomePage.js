import React, { Component } from "react";
import { Row, Col, Carousel, Typography, Divider } from "antd";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    const { Title, Text } = Typography;
    return (
      <div>
        <Row>
          <Col span={12} push={3} style={{ marginTop: "20px" }}>
            <Carousel vertical autoplay autoplaySpeed="30">
              <div>
                <Text style={{ color: "white" }}>
                  Image 1 Here + description
                </Text>
              </div>
              <div>
                <Text style={{ color: "white" }}>
                  Image 2 Here + description
                </Text>
              </div>
              <div>
                <Text style={{ color: "white" }}>
                  Image 3 Here + description
                </Text>
              </div>
              <div>
                <Text style={{ color: "white" }}>
                  Image 4 Here + description
                </Text>
              </div>
            </Carousel>
          </Col>
          <Col
            span={5}
            push={4}
            style={{ marginTop: "20px", height: "70vh", overflowY: "scroll" }}
          >
            <Title level={4} style={{ color: "#5B92E5" }}>
              News
            </Title>
            <Divider
              style={{
                marginTop: "0px",
                marginBottom: "10px",
                backgroundColor: "#5B92E5"
              }}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              rerum assumenda facere modi, iste nihil laboriosam, repellendus
              labore eaque cumque voluptate. Ipsum in quia asperiores incidunt
              alias itaque praesentium eius!
            </div>
            <Divider
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "#bfbfbf"
              }}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              rerum assumenda facere modi, iste nihil laboriosam, repellendus
              labore eaque cumque voluptate. Ipsum in quia asperiores incidunt
              alias itaque praesentium eius!
            </div>
            <Divider
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "#bfbfbf"
              }}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              rerum assumenda facere modi, iste nihil laboriosam, repellendus
              labore eaque cumque voluptate. Ipsum in quia asperiores incidunt
              alias itaque praesentium eius!
            </div>
            <Divider
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "#bfbfbf"
              }}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              rerum assumenda facere modi, iste nihil laboriosam, repellendus
              labore eaque cumque voluptate. Ipsum in quia asperiores incidunt
              alias itaque praesentium eius!
            </div>
            <Divider
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "#bfbfbf"
              }}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              rerum assumenda facere modi, iste nihil laboriosam, repellendus
              labore eaque cumque voluptate. Ipsum in quia asperiores incidunt
              alias itaque praesentium eius!
            </div>
            <Divider
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "#bfbfbf"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="card" span={18} push={3}>
            <div className="card--content">image 1</div>
            <div className="card--content">image 2</div>
            <div className="card--content">image 3</div>
            <div className="card--content">image 4</div>
            <div className="card--content">image 5</div>
            <div className="card--content">image 6</div>
            <div className="card--content">image 7</div>
            <div className="card--content">image 8</div>
            <div className="card--content">image 9</div>
            <div className="card--content">image 10</div>
            <div className="card--content">image 11</div>
            <div className="card--content">image 12</div>
            <div className="card--content">image 13</div>
          </Col>
        </Row>
      </div>
    );
  }
}
