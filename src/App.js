import './css/App.css';
import Login from './components/Login';

let user = {
  name: "Allen",
  position: "Instructor",
  avatar: "https://i.postimg.cc/63wdNgF7/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
}

const products = [
  { name: 'Soap', price: 30 },
  { name: 'Shampoo', price: 100 },
  { name: 'Garlic', price: 80 }
];

function UserDetails({ props }) {
  return (
    <>
      <img src={user.avatar} alt="avatar" />
      <p>Position: {user.position}</p>
      <p>Hiring Date: {props.hiringDate}</p>
      <p>Gender: {props.gender}</p>
      <hr />
    </>
  );
}

function List() {
  return (
    <>
      <h1 className="list-head">{user.name}'s Grocery List</h1>
      <ul>
        <ListItem props={{ name: "Soap", price: 20 }} />
        <ListItem props={{ name: "Shampoo", price: 100 }} />
        <ListItem props={{ name: "Egg", price: 80 }} />
      </ul>
    </>
  );
}

function ListItem({ props }) {
  return <li>{props.name} - {props.price}</li>;
}

function App() {
  let info = {
    hiringDate: "August 2022",
    gender: "Male"
  };

  let isLoggedIn = true;
  let content;

  if (isLoggedIn) {
    content =
      <>
        <UserDetails props={info} />
        <List />
      </>;
  }
  else {
    content = <Login />;
  }

  return content;

}


export default App;