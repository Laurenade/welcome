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
        score: [],
      });
      // let newScore =
      //   score +
      //   // ????????????????????????????
      //   // let score = [];
      //   // for (let index = 0; index < score.length; index += 1) {
      //   //   let scoreSum = score.push;
      //   //   return score + score[index];
      //   // }

      //   console.log(this.state.data.answer);
    });
  }
  // score update from jon....
  // subnit handler... create new variable "new scroe"  = 0,
  // if ...compare answer from form and APi, is same chnage vlaue
  // of new to be this.state to new value, if not this.stae.score - vals....
  // call set state sacre to new value....updates to new

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
        <strong>Users Score: </strong> {this.state.score}
      </div>
    );
  }
}
export default Jeopardy;
