import React from 'react';
export default class Preguntas extends React.Component{
    render() {
        let quizzes = this.props.quizzes;
        return(quizzes.map((quiz, i)=>{
            return(
                <button onClick={() => this.props.onChangeQuiz(i)}>{i +1}</button>)

        }))
    }
}