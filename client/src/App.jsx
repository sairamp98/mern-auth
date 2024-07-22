import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Header from './components/Header';
import Signup from './pages/Signup';
import About from './pages/About';
import Home from './pages/Home';
export default function App() {
  return (<BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sign-in' element={<Signin />}/>
      <Route path='/sign-up' element={<Signup />}/>
      <Route path='/profile' element={<Profile  />}/>
    </Routes>
  </BrowserRouter>
  );
}
