import React, { Component } from "react";
import Header from "../../components/header/Header";
import MusicContent from "../../containers/music/MusicContent";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Music extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <MusicContent theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Music;
