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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    // console.log(this.state.topText);
    // console.log(this.state.bottomText);
    this.setState({
      [name]: value,
    });
  }

  componentWillMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        // console.log(memes);
        this.setState({
          allMemeImgs: memes,
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMemeImg = this.state.allMemeImgs[randomNum].url;
    this.setState({
      randomImg: randomMemeImg,
    });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
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
          <button>Gen</button>
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
