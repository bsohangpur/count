import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import './index.css';


function App(){
    let num=0;
    let [cnum, setCnum]=useState(num);
    
    function Num(){
//    console.log(cnum);
    setCnum(cnum+1)};
    function Num1(){
        
    // console.log(cnum)
    setCnum(cnum=0)
    }
    
    return(
        <><div>
        <div className="box">
        <h1>{cnum}</h1>
        <button onClick={Num}>Count</button>
        <button onClick={Num1}>Clear</button>
        </div>
        </div>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));