import React , { useState, useContext } from 'react'
import { GameContext } from '../App.js'


function PlayerForm (){

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [notValid, setNotValid] =useState(false);
    const gameContext = useContext(GameContext)
    var dispatchPlayer=gameContext.playerDispatch
    var dispatchGame=gameContext.gameDispatch 
    const validateForm = () => {
      if (player1 === "" || player1 === player2 || player2 === "") {
        setNotValid(true);
        setPlayer1("");
        setPlayer2("");
      } else {
        setNotValid(false);
        console.log (player1 , player2)
        dispatchPlayer ({type:"setPlayer1Name" , value:player1})
        dispatchPlayer ({type:"setPlayer2Name" , value:player2})
        dispatchGame ({type:"startGame" })
        dispatchGame ({type:"message" , value: "mostrando mensaje" })
      }
    };
  
    return (
        <div className="container">
            {notValid=== true &&(
            <div className="columns">
            <div className="column">
            <article className="message is-warning">
  <div className="message-header">
    <p>Cuidado!</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    Los nombres no pueden ser iguales
  </div>
</article>
             </div>
            </div>    
            )
        }
            <div className="columns">
           <div className="column">
                <label className="label">Jugador 1</label>
            <div className="control">
                <input className="input" value={player1}onChange={(e)=> 
                  setPlayer1 (e.target.value.toUpperCase())}type="text" placeholder="Text input"/>
           </div>
            </div>
                </div> 
                <div className="columns"> 
                <div className="column">

            <label className="label">Jugador 2</label>
            <div className="control">
                <input className="input" value={player2} onChange={(e)=> 
                   setPlayer2(e.target.value.toUpperCase())} type="text" placeholder="Text input"/>
                </div>
                </div>
            </div>
            <div className="columns"> 
                <div className="column">

            <button onClick={validateForm} className= "button is-primary"> Iniciar Juego</button>
                </div>
            </div>
            </div>
    )

}



export default PlayerForm