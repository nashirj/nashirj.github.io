import React, { Component } from "react";
import Header from "../../components/header/Header";
import QuintessenceContent from "../../containers/quintessence/QuintessenceContent";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Quintessence extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <QuintessenceContent theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Quintessence;
