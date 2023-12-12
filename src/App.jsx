
import React from 'react' 
import Homecrud from './Components/Homecrud'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Createuser from './Components/Createuser'
import User from './Components/User'
import Edituser from './Components/Edituser'

const App =()=>{

  return(
  <div>
<BrowserRouter>
{/* <Edituser/> */}
<Homecrud/>
<Routes>
  <Route element={<Createuser/>} path='/'/>
  <Route element={<User/>} path='/users'/>
<Route element = {<Edituser/>} path='/edituser/:abc'/>

</Routes>

</BrowserRouter>


  </div>
  )


}
export default App