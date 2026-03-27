import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <div className="p-10 space-y-10">

      {/* Tailwind Test */}
      <h1 className="bg-green-500 text-white rounded-xl p-10 text-3xl mb-4">
        Tailwind Working 🚀   </h1>

        <Card username="chaiaurcode" btnText="visit me" />
        <Card username="hitesh" btnText="click me" />


    

    

    </div>
  )
}

export default App