import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Game from "./Game";
import Preguntas from "./Preguntas";
import Timer from "./Timer";
import Navbar from "./Navbar";
import {questionAnswer, changeQuiz, submit, initQuizzes, Reset} from "./redux/actions";
import axios from 'axios';
import ResetButton from "./ResetButton";
import VistaFinal from "./VistaFinal";

class App extends React.Component {

  constructor (props) {
    super(props);
      this.state = {
          loading: true
      };
  }

  onChangeQuiz = (index) => {
    console.log('BOTON NEXT', index);
    this.props.dispatch(changeQuiz(index));
  }

  onQuestionAnswer = (answer) => {
    this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))
  }
  onSubmit = () =>{
    console.log('Submit APP');
    this.props.dispatch(submit(this.props.quizzes));
  }
  componentDidMount() {
      setTimeout(()=>{
          this.setState({loading: false});
      },2000);
      axios.get('https://core.dit.upm.es/api/quizzes/random10wa?token=75c24188e8a237d4b32d')
        .then(response => {
          this.props.dispatch(initQuizzes(response.data));
        });


  }
  onReset = () =>{
      this.setState({loading:true});
      setTimeout(()=>{
          this.setState({loading: false});
      },2000);
      axios.get('https://core.dit.upm.es/api/quizzes/random10wa?token=75c24188e8a237d4b32d')
        .then(response => {
          this.props.dispatch(initQuizzes(response.data));
        });
    this.props.dispatch(Reset());
    this.props.dispatch(changeQuiz(0));
  }


  render () {
    if(this.props.finished){
      return (
          <div>
              {this.state.loading ? <img src={"https://miro.medium.com/max/1158/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"} className="spinner" alt="spinner" />:<div>
              <Navbar/>
          <VistaFinal
          score = {this.props.score}
          />
          <div className="finalr"  >
          <ResetButton
                  onReset = {this.onReset}
              />
              </div>
          </div>}
                  </div>

      );
    }
    else {
      return (
          <div className="App">
              {this.state.loading ? <img src={"https://miro.medium.com/max/1158/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"} className="spinner" alt="spinner" />:
              <div>
              <Navbar/>
            <div>
              <Timer
                  onSubmit={this.onSubmit}
              />
            </div>
              <div>
            <Game quiz={this.props.quizzes[this.props.currentQuiz]}
                  quizzes = {this.props.quizzes}
                  onQuestionAnswer={this.onQuestionAnswer}
                  onChangeQuiz={this.onChangeQuiz}
                  onSubmit={this.onSubmit}
                  onReset = {this.onReset}
            />
              <Preguntas
                  onChangeQuiz={this.onChangeQuiz}
                  quizzes = {this.props.quizzes}
              />

              </div>
          </div>}
          </div>

      )
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
