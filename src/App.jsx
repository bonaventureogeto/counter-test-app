import { useState } from 'react';
import Counter from './components/Counter';
import Calculator from './components/Calculator';
import DisplayData from './components/DisplayData';
import RickandMorty from './components/RickandMorty';
import Navbar from './components/Navbar';


const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount function to update the count state variable
    setCount(count + 1);
  }
  const handleDecrement = () => {
    // setCount function to update the count state variable
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Navbar />
    </div>
  )
}

export default App;