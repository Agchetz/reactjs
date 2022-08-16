/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: 'chethan'}
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount()")
    }

    changeState(){
        this.setState({name:'Agchetz'})
    }

    render(){
        return (
            <div>
                <h1>Welcome to the home, {this.state.name}</h1> 
                <a style={{cursor:'pointer', color:'red', backgroundColor:'cyan'}} 
                onClick={()=>{this.changeState()}}>PRESS HERE</a>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate()")
        return true;
    }

    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 

}

export default Test