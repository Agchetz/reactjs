import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Board extends React.Component {
    renderSquare(i){
        return <Square value={1}/>
    }
}

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value:null
        }
    }
    render(){
        return (
            <button 
                className='square'
                onClick={()=>this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        )
    }
}