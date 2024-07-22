import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

  </BrowserRouter>
}
