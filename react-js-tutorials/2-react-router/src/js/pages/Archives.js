import React from "react";

export default class Archives extends React.Component {

  render () {
    console.log("Archives");
    const {article} = this.props.params;
    const {query} = this.props.location;
    const {date, filter} = query;
    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
