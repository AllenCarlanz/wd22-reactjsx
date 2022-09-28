import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [names, setNames] = useState(["Person A", "Person B"]);

  const nameList = names.map(name =>
    <li key={name}>{name}</li>
  );

  function addStudent() {
    setNames([...names, 'new student']);
  }

  return (
    <>
      <Header />
      <h1>Student List</h1>
      <ul>
        {nameList}
      </ul>
      <input type="text" />
      <button onClick={addStudent}>Add Student!</button>
      <Footer />
    </>
  );
}


export default App;