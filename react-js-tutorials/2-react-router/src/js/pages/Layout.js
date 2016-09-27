import React from "react";
import {Link} from "react-router";

import Footer from "../components/layout/Footer.js";
import Nav from "../components/layout/Nav.js";
import Archives from "./Archives.js";


export default class Layout extends React.Component {

  render () {
    // console.log(this.props.location);
    const {location} = this.props;
    const containerStyle = {
      marginTop: "60px"
    }

    return (
      <div>
        <Nav location ={location}/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {/* components loaded */}
              {this.props.children}
            </div>
            <Footer/>
          </div>
        </div>
        {/* <Link to="archives" activeClassName="test" class="btn btn-danger">archives</Link>
        <Link to="settings" class="btn btn-success">settings</Link> */}
      </div>
    );
  }
}
