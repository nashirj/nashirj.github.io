import React, { Component } from "react";
import Header from "../../components/header/Header";
import ContactContent from "../../containers/contact/ContactContent";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <ContactContent theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
