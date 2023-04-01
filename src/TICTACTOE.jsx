import React, { useState } from 'react'
import './tictac.css'
const TICTACTOE = () => {

const [board,setboard]=useState(Array(9).fill(""))
const [move, setmove] = useState('X');


const click=(n )=>{
  
  let square=[...board]
  square[n]=move

  if(board[n] !== ''){
    alert("Already clicked");
  }

  setboard(square);
  if (move==='X') {
    setmove("O");
    
  } else {
    setmove("X");
  }
  if(checkWin(square)){
    alert("Winner")
    square.fill('');
    setboard(square)
  }
 
}



  const checkWin=(board)=>{
    const condition=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [3,6,9],  
    ]
  let flag=false;
    condition.forEach(element=>{
      if(board[element[0]]!==''&& board[element[1]]!==''&&board[element[2]]!==''){
      if(board[element[0]]===board[element[1]] && board[element[1]]===board[element[2]] ){
        flag=true;

      }
      }    }) 
  return flag;
  }

  return (<>
   <h1>TIC-TAC-TOE</h1>
   <table>
      <tbody>
        <tr>
          <td onClick={()=>click(0 )}>{board[0]}</td>
          <td onClick={()=>click(1 )}>{board[1]}</td>
          <td onClick={()=>click( 2)}>{board[2]}</td>
        </tr>
        <tr>
          <td onClick={()=>click(3 )}>{board[3]}</td>
          <td onClick={()=>click(4 )}>{board[4]}</td>
          <td onClick={()=>click(5 )}>{board[5]}</td>
        </tr>
        <tr>
          <td onClick={()=>click(6 )}>{board[6]}</td>
          <td onClick={()=>click(7 )}>{board[7]}</td>
          <td onClick={()=>click(8 )}>{board[8]}</td>
        </tr>
      </tbody>
   </table>
   </>
  )
}

export default TICTACTOE
