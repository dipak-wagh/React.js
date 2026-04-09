import { createContext, use, useState } from 'react'
import './App.css'
import ChildA from './components/childA';

// Step1: create context
//const UserContext = createContext();

// Step2: wrap all the child inside a provider 

//Step3: pass value

//Step4: consumer ke andar consume kro

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Dipak"})

    const [theme, setTheme] = useState('light');

  return (

    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA />
      </div><div className=""></div>
      <ChildA />
    </ThemeContext.Provider>

    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA />
    // </UserContext.Provider>
    
    // </>
  )
}

export default App
//export {UserContext}
export {ThemeContext}