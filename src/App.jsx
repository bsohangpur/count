import React from 'react';

function App(props){
    return<>
        <div>
            <div>
                <h1>{props.name}</h1>
                <img src={props.image}></img>
                <h2>{props.title}</h2>
                <a href={props.link} target="_blank"><button></button></a>
            </div>
        </div>
    </>
}

export default App;