import {Routes,Route} from 'react-router-dom'
import Singup1 from './componet/signup/signup'
import Login1 from './componet/login/login'
import Home from './componet/home/Home'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login1 />} />
      <Route path='/signup' element={<Singup1 />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </>
  )

}

export default App
