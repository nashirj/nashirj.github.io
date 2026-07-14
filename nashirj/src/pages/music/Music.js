import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Music extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <div style={{ padding: "40px 20px", textAlign: "center" }}>
          <h1>Music</h1>
          <p>Content coming soon...</p>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Music;
