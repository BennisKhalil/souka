import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import HomePage from "./HomePage/HomePage";
import GoalPage from "./GoalPage/GoalPage";
import whoWeAre from "./Presentation/whoWeAre";
import logo from "./images/logo.png";
import "./MainLayout.css";
export default class MainLayout extends Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img src={logo} alt="" width="95px" />
          </div>
          <div style={{ position: "relative" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{
                lineHeight: "64px",
                fontSize: "1.3em",
                position: "absolute",
                right: "0"
              }}
            >
              <Menu.Item key="1">
                <Link to="/acceuil">Acceuil</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">Qui somme nous?</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/goal">Objectif</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/presentation">Presentation</Link>
              </Menu.Item>

              <Menu.Item
                className="donate"
                key="8"
                style={{ backgroundColor: "white", color: "#001529" }}
              >
                Donate
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content>
          <Switch>
            <Route path="/acceuil" component={HomePage} />
            <Route path="/goal" component={GoalPage} />
            <Route path="/about" component={whoWeAre} />
            {/* <Route path="/about" component={HomePage} />
            
            <Route path="/presentation" component={HomePage} /> */}

            {/* <Route  component={}/> */}
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
