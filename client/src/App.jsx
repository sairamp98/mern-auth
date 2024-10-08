import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Header from './components/Header';
import Signup from './pages/Signup';
import About from './pages/About';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  return (<BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sign-in' element={<Signin />}/>
      <Route path='/sign-up' element={<Signup />}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile  />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
