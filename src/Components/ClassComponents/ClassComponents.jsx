import React, { Component } from "react";

export class ClassComponents extends Component {
  constructor(props) {
    super(props);
    console.log("[constructor]", document.querySelector("#item-1"));
  }
  componentDidMount() {
    console.log("[componentDidMount]", document.querySelector("#item-1"));
  }

  render() {
    console.log("[render]", document.querySelector("#item-1"));
    return (
      <>
        <h1 id="item-1">Class Components</h1>
      </>
    );
  }
}

export default ClassComponents;
