import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/signin' element={<SignIn/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </>
  );
}
