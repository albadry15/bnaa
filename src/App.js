import React from 'react';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Home from './containers/Home'
import './media/style.css'
import './media/all.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Admin from './containers/Admin';
import AreaTeachers from './containers/AreaTeachers';
import Teacherspage from './containers/Teacherspage';
import About from './containers/About';
import Pay from './containers/Pay';
import Contact from './containers/Contact';
import Areat from './components/Areat';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='register' element={<Signup/>}/>
        <Route path='login' element={<Signin/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='teachers' element={<Teacherspage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='pay' element={<Pay/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='areas/:areaName' element={<AreaTeachers/>}/>
        <Route path='teacher/:teaName' element={<Areat/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;


