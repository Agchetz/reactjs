import  ReactDOM  from 'react-dom/client';
import  React  from 'react'

// import { root } from '../public/in'

//Components

function Welcome(props){
    return (
    <h1>Hello {props.name}, Turn off the {props.item}</h1>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = < Welcome name='Chethan' item='TV' />
root.render(element)



