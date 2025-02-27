import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBarComp from './Pages/public/NavBarComp.jsx';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import ContactComp from './Pages/public/ContactComp';
import UserDashboardP from './Pages/private/UserDashboardP.jsx';
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<NavBarComp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/contact' element={<ContactComp/>}/>
      <Route path='/User' element={<UserDashboardP/>}/>
      </Routes>
    </div>
  )
}
export default App
