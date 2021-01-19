import React from 'react';

export default class Game extends React.Component{
    render() {
        console.log('Quiz', this.props.quiz);
        var nombreAutor = "";
        var urlAutor = "";
        var urlAttachment = "";
        if(this.props.quiz.author !== null){
            nombreAutor= this.props.quiz.author.username;
            if((this.props.quiz.author.photo!==null)&&(this.props.quiz.author.photo.url!==null))
            urlAutor = this.props.quiz.author.photo.url;
        }
        else{
            nombreAutor= "Sin autor";
            urlAutor = "https://cdn.icon-icons.com/icons2/2367/PNG/512/user_icon_143482.png"
        }

        if((this.props.quiz.attachment!==null)&&(this.props.quiz.attachment.url!==null)){
            urlAttachment= this.props.quiz.attachment.url;
        }
        else{
            urlAttachment = "https://www.flaticon.es/svg/static/icons/svg/545/545676.svg"
        }
        return(
            <div>
                <div className="autor">
                    Creado por: {
                    nombreAutor || "Sin nombre"
                    }
                    <div className= "img">
                        <img src={urlAutor} width={70} height={70}></img>
                    </div>
                </div>
                <div className="prueba">
                {this.props.quiz.question}

                <input type="text"
                       onChange={(e)=> this.props.onQuestionAnswer(e.target.value)}
                       value={this.props.quiz.userAnswer}
                onKeyDown={(e)=>{
                    if(e.key==='Enter'){
                        if((this.props.quiz.id !== this.props.quizzes[this.props.quizzes.length -1].id)&&(this.props.quizzes.length!==0)){
                            this.props.onChangeQuiz(25);
                        }
                        else{
                            this.props.onSubmit();
                        }
                }
                }
                }/>

                    <img src={urlAttachment} width={500} height={250}></img>
                </div>
                <div className="actions">

                    <button className="back" onClick={() =>this.props.onChangeQuiz(26)} disabled={(this.props.quiz.id == this.props.quizzes[0].id)||(this.props.quizzes.length ==0)} >Anterior</button>
                    <button className="submit" onClick={ () => this.props.onSubmit()}>Submit</button>
                    <button className="next" onClick={() => this.props.onChangeQuiz(25)} disabled={(this.props.quiz.id == this.props.quizzes[this.props.quizzes.length -1].id)||(this.props.quizzes.length==0)}>Siguiente</button>
                </div>
            </div>
        );
    }
}