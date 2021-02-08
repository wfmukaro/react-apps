import { useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter';
import Home from './Home';

function App() {
  const count = useSelector(state => state.counter.count)///reading the initial value from redux
  const voters=["Walter","Zane","Ishe","Marcia"]
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2>Total votes: {count}</h2>
      {voters.map((voter)=>(
        <Counter name={voter}></Counter>
      )
      
      )}
     
     
    </div>
  );
}

export default App;
