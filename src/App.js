
import React, {createContext, useReducer, useState}from 'react'
import './App.css'
import PlayerForm from './components/PlayerForm'



/*const gameStatusSchema ={ 
  gameStarted:false,
  gameOver:false,
  leader:"",
  activePlayer:"",
  button1Disabled:false,
  button2Disabled:false,
  lastAttpemt:0,
  winner:"",
  totalMoves:0,
}
*/



export const GameContext = createContext() 


//esta es la estructura que queria usar
/*

const playersInitialState= {
        player1:{
          name:"",
          score: 0,
          gamePrevalence:0,
          responseCapability:0,
          lastAttemptsSaved:0,
        }
          player2:{
            name:"",
            score: 0,
            gamePrevalence:0,
            responseCapability:0,
            lastAttemptsSaved:0,
          }
  }
*/


// esta es la estructura que estoy usando
  const playersInitialState= {
        p1name:"",
        p1score: 0,
        p1gamePrevalence:0,
        p1responseCapability:0,
        p1lastAttemptsSaved:0,
        p2name:"",
        p2score: 0,
        p2gamePrevalence:0,
        p2responseCapability:0,
        p2lastAttemptsSaved:0,
  
  }

  function PlayersReducer (state, action){
    switch (action.type){
      case "setPlayer1Name":
      return {p1name:action.value}
      case "setPlayer2Name":
        return {p2name:action.value}
      default:
        return state 
    }
    
    
  }
  function App() {
  const [state, dispatch] = useReducer(PlayersReducer, playersInitialState)
  //const [player2, dispatch] = useReducer (PlayersReducer, playersInitialState)
  return (
    <GameContext.Provider value={{ playerState: state ,playerDispatch : dispatch} }>
      Los jugadores son {state.p1name} y {state.p2name}
        <PlayerForm/>
    
    </GameContext.Provider>
    );
}

export default App;
