import React, { Component } from "react";
import Header from "../../components/header/Header";
import Bio from "../../containers/bio/Bio";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Bio theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
