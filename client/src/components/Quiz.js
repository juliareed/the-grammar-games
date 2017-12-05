import React from 'react'
import Question from '../components/Question'
import Counter from "./Counter/Counter"
import $ from "jquery"
import data from "../data/data"
import data2 from "../data/data2"
import data3 from "../data/data3"
import data4 from "../data/data4"
import data5 from "../data/data5"
import data6 from "../data/data6"
import data7 from "../data/data7"
import data8 from "../data/data8"
import data9 from "../data/data9"
import data10 from "../data/data10"
import data11 from "../data/data11"
import data12 from "../data/data12"
import "../components/quiz.css"
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

export default class Quiz extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        quiz: {},
        index: 0,
        answers: []
      }
  }

  componentDidMount() {
      let quizId = this.props.match.params.quizId;
      if (quizId === "data") {
      this.setState({quiz: data })
      } else if (quizId === "data2") {
        this.setState({quiz: data2 })
      }else if (quizId === "data3") {
        this.setState({quiz: data3 })
      }else if (quizId === "data4") {
        this.setState({quiz: data4 })
      }else if (quizId === "data5") {
        this.setState({quiz: data5 })
      }else if (quizId === "data6") {
        this.setState({quiz: data6 })
      }else if (quizId === "data7") {
        this.setState({quiz: data7 })
      }else if (quizId === "data8") {
        this.setState({quiz: data8 })
      }else if (quizId === "data9") {
        this.setState({quiz: data9 })
      }else if (quizId === "data10") {
        this.setState({quiz: data10 })
      }else if (quizId === "data11") {
        this.setState({quiz: data11 })
      }else if (quizId === "data12") {
        this.setState({quiz: data12 })
      }
  }

  handleSubmit() {
    if (this.state.index < this.state.quiz.questions.length) {
      this.setState({'index': this.state.index + 1})
    } else {
      let score = this.state.score
      this.state.answers.map((answer, i) => (
        score = score + this.state.quiz.questions[i].answers[answer].point

      ))
    }
  }

  handlePost() {
    let score = this.state.score;
    $.post("/post", function(data){
      scores: score
      //TO DO: NEEDS TO ALSO SEND DISPLAY NAME
    })
  }


  handleAnswerSelected(event) {
    let list = [...this.state.answers.slice(0, this.state.index),
                parseInt(event.target.value),
                ...this.state.answers.slice(this.state.index + 1)]
    this.setState({'answers': list})
  }

  render() {
    const {
      quiz, index, answers
    } = this.state

    let completed = (quiz.questions && (index === quiz.questions.length)) ? true : false
    let numberOfQuestions = quiz.questions ? quiz.questions.length : 0
    let score = 0
    if (completed) {
      this.state.answers.map((answer, i) => (
        score = score + this.state.quiz.questions[i].answers[answer].point
      ))
      this.handlePost();
    }

    return (
      <div id="quiz">
        <h1>{quiz.title}</h1>
        {completed ?
          <div>
            <p>Congratulations, you finished the quiz!</p>
            Your score is {score}
            <br/>
            <Link to='/'><button className="btn">Back to main page</button></Link>
          </div>
        :
          <div>
          <h2>Question {index + 1} of {numberOfQuestions}</h2>
          {quiz.questions && index < numberOfQuestions ?
            <Question
              question={quiz.questions[index]}
              index={index}
              onAnswerSelected={(event) => this.handleAnswerSelected(event)}
              onSubmit={() => this.handleSubmit()}
            />
          : ''}
          </div>
        }
          <br />
          <br />
          <br />
          <Footer />
      </div>
    )
  }
}