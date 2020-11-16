import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state({
      topText: "",
      buttomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    });
  }
  render() {
    return <div></div>;
  }
}

export default MemeGenerator;
