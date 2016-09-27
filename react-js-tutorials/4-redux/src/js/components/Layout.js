import React from "react";

import Footer from "./Footer.js";
import Header from "./Header.js";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "weome",
    };
  }

  changeTitle = (title) => {
    //console.log(this);
    this.setState({title});
  };

  render () {
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title}/>
        <Footer/>
      </div>
    );
  }
}
