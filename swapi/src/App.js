import Header from "./components/header/Header"
import Card from "./ui/card/Card"
import Wrapper from "./ui/Wrapper"
import { Route, Routes, Link } from "react-router-dom"
import People from "./ui/pages/People"
import Films from "./ui/pages/Films"
import Planets from "./ui/pages/Planets"
import Species from "./ui/pages/Species"
import Vehicles from "./ui/pages/Vehicles"
import Starships from "./ui/pages/Starships"
import './App.css'


const App = () => {
  return (
    <Wrapper>
       <Card>
        <Header>
         <Link to='/people'> people </Link>
         <Link to='./planets'> planets </Link>
         <Link to='./films'> films </Link>
         <Link to='./species'> species </Link>
         <Link to='./vehicles'> vehicles </Link>
         <Link to='./starships'> starships </Link>
        </Header>

     
        <Routes>
         <Route path='/people' element={ <People/> } />
         <Route path='/planets' element={<Planets />} />
         <Route path='/films' element={<Films />} />
         <Route path='/species' element={ <Species/> } />
         <Route path='/vehicles' element={<Vehicles />} />
         <Route path='/starships' element={<Starships />} />
        </Routes>
       
      </Card>
    </Wrapper>
  )
}

export default App