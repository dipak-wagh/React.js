
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'
function App() {
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count+1);
}

  return (
   <div>
    <Button handleClick={handleClick} text="click me">
    <h1> {count} </h1>
      </Button>
    {/* <Card name="Dipak Wagh">
      <h1>Best Web Dev Course</h1>
      <p> Trying to be consistent in this</p>
      <p>Will complete the course soon</p>
    </Card>
    <Card>
      Hello Jee, kaise ho
    </Card> */}
   </div>
  )
}

export default App
