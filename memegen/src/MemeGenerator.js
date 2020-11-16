import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    // console.log(this.state.topText);
    // console.log(this.state.bottomText);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom text"
            onChange={this.handleChange}
          />
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="Random Image from API" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
