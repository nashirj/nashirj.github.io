import React, { Component } from "react";
import Header from "../../components/header/Header";
import TechnicalContent from "../../containers/technical/TechnicalContent";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Technical extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <TechnicalContent theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Technical;
