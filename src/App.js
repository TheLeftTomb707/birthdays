import './App.css';
import birth from '.';

function App() {
  var list = [];
  birth.map((birth) => 
    list.push(<div id='content'><img src={birth.img} id='img' alt='monkey'></img><h1 style={{marginLeft: "2%"}}>{birth.fname} {birth.lname}: {birth.birthday.toLocaleString('default', {month: 'long'})} {birth.birthday.getDate()}<br></br> <span id='age'> Age:{new Date().getFullYear() - birth.birthday.getFullYear()}</span></h1></div>)
  )
  return (
    <div id='main'>{list}</div>
  );
}

export default App;
