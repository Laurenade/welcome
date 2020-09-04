import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
      score: 0,
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let newScore = 0;
    if (this.state.data.answer === event.target.value) {
      return (newScore = this.state.score + this.state.data.value);
    } else {
      return (newScore = this.state.score - this.state.data.value);
    }
    this.setState({
      score: newScore,
    });
  };

  //  console.log(this.state.data.answer);

  // if (compare answer from form and APi) {
  //if same, chnage vlaue of new to be this.state to new value
  //if not this.state.score - vals.... call set state score to new value....updates to new

  // score update from jon....
  // subnit handler... create new variable "new scroe"  = 0,
  // if ...compare answer from form and APi, is same chnage vlaue
  // of new to be this.state to new value, if not this.stae.score - vals....
  // call set state sacre to new value....updates to new

  //////////////

  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    return (
      <div>
        <strong>Question: </strong> {this.state.data.question}
        <br />
        <strong>Value: </strong> {this.state.data.value}
        <br />
        <strong>Category: </strong> {this.state.data.category.title}
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="answer">
              <strong>Answer: </strong>
            </label>
            <input type="text" className="input" />
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
          <strong>Users Score: </strong> {this.state.score}
        </form>
      </div>
    );
  }
}
export default Jeopardy;

// my attempts //  things removed
//   score +
//   // ????????????????????????????
//   // let score = [];
//   // for (let index = 0; index < score.length; index += 1) {
//   //   let scoreSum = score.push;
//   //   return score + score[index];
//   // }

// <button className="submit">Submit</button>
