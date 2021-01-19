import React from 'react';
import ResetButton from "./ResetButton";
import Navbar from "./Navbar";
export default class VistaFinal extends React.Component{
    render() {
        let score = this.props.score;
        if(score>3){
            return(
                <div className="final">

                    <h3>¡¡Felicidades!!, has conseguido {score} puntos</h3>
                    <div>
                        <img src={"https://www.flaticon.es/svg/static/icons/svg/1366/1366509.svg"} width={200} height={200}></img>
                    </div>
                </div>

            );
        }
        if(score<=3){
            return(
                <div className="final">

                    <h3>Qué pena, solo has conseguido {score} punto(s).</h3>
                    <h3> Vas a tener que esforzarte más</h3>
                    <div >
                        <img src={"https://thumbs.dreamstime.com/b/icono-triste-del-emoji-emoticon-de-la-cara-121697442.jpg"} width={200} height={200}></img>
                    </div>
                </div>

            );
        }
    }
}
