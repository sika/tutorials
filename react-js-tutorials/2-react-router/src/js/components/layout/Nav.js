import React from "react";

export default class Nav extends React.Component{
  constructor() {
    super();
    console.log(this.state);
    this.state = {
      collapsed: true,
    };
  }

  // componentWillMount() {
  //   // this.setState({
  //   //   collapsed: true
  //   // });
  // }
toggleCollapse(){
  const collapsed = !this.state.collapsed;
  this.setState({collapsed});
}

  render(){
    console.log(this.state);
    const {location} = this.props;
    // console.log(this.props.collapsed);
    const {collapsed} = this.state;
    // if location.pathname is "/", set class to "active"
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archiveClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return(
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <a href="#">Featured</a>
              </li>
              <li class={archiveClass}>
                <a href="#">Archives</a>
              </li>
              <li class={settingsClass}>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
