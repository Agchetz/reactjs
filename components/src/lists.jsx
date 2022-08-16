const numbers = [1, 2, 3, 4, 5];
function NumberList(props) {
    console.log(props)
    const num = props;
    const listItems = num.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  NumberList(numbers)


  export default NumberList