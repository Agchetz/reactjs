// import logo from './logo.svg';
import { ReactDOM } from 'react';
import './App.css';

function App() {
  return (
   <div>
  <h1>Hello World</h1>
  {Jsx1()}
  {tick()}
  {Add()}
  <Name user={user} />
</div>

  )
}

//JSX methods 
function Jsx1() {
  const name = 'Chethan';
  const element = <h1>Hello, {name }</h1>
return(
  <div>
    {element}
  </div>
);
}

//jsx2
const user = {
  firstName: 'Chethan',
  lastName: 'Annappa'
}
function Name(prop){
  return (
    <>
    <div>{prop.user.firstName} {prop.user.lastName}</div>
    </>
    );
}
const element = (
  <h1>Hello, {Name.user}</h1>
)
export default App;

//root.render()
function tick(){
  const element = (
    <div id='date'>
      <h1> Welcome </h1>
      <h2>the time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  return(
    element
  )
}

function Add(){
  return(
    <div>
      Adding still in process ...
    </div>
  )
}

