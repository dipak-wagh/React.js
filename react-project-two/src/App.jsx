import UserCard from "./components/userCard"
import RohitSharma from "./assets/RohitSharma.jpg"
import Surya from "./assets/Surya.jpg"
import ViratKohli from "./assets/ViratKohli.jpg"

function App() {
 
  return (
   <div className="container">
    <UserCard name="Rohit Sharma" desc="desc1" image={RohitSharma}/>
    <UserCard name="Virat Kohli" desc="desc2" image={ViratKohli}/>
    <UserCard name="Suryakumar Yadav" desc="desc3" image={Surya} />
   </div>
  )
}

export default App
