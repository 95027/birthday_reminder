import { useState } from 'react';
import './App.css';
import List from './components/List';
import data from './components/data';

function App() {
  
  const [people, setPeople] = useState(data);


  return (
    <div className="container">

      <h3>{people.length} birthday's today</h3>

      <List people={people}/>

      <button onClick={()=>setPeople([])}>Clear All</button>

    </div>
  );
}

export default App;
