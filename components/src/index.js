import  ReactDOM  from 'react-dom/client';
import  React,{useEffect}  from 'react'
import Clock from './Clock.jsx';
import LoginControl from './conditional.jsx';
import Test from './lifecycle'
import NumberList from './lists.jsx';

//Components

function Welcome(props){
    return (
    <h1>Hello {props.name}, Turn off the {props.item}</h1>
    );
}

// function Comments(props){
//     // console.log(props)
//     return (
//         <div className='comment'>
//             <div className='userInfo'>
//                 <img className='avatar'
//                 src={props.user.url}
//                 alt={props.user.name}
//                 />
//                 <div className='userInfoName'>
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className='commentText'>{props.text}</div>
//             <div className='commentDate'> {props.date} </div>
//         </div>
//     );
// }

function Avatar(props){
    console.log(props.user.url)
    return(
        <div>
            <img className='avatar'
            src={props.user.url}
            alt={props.user.name}
        />
        </div>
        
    );
}

function UserInfo(props){
    return(
        <div>
            <Avatar user={props.props.user}/>
            <div className='UserInfoName'>{props.props.name}</div>
        </div>
    )
}

function Comment(props){
    // useEffect(() => {
    //     console.log("check");
    // },)
    // console.log(props.props.author)
    
    return(
        <div>
            <UserInfo props={props.props.author}/>
            <div >
        <h3>{props.props.comment}</h3>
      </div>
      <div >
        <h3>{props.props.date}</h3>
      </div>
        </div>
    )
}

const data = { 
    author:{
        name:"Asp",
        user:{
            name:"chethan",
            url:"sjdcnjsdnkc"
        },
    },
    comment:"try try try", 
        date:"1-1-2022"
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = (
<>
<Comment props={data}/>
<Clock/>
<LoginControl/>
<hr></hr>
<Test/>
<NumberList />
</>)
root.render(element)
