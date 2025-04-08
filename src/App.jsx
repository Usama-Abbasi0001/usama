import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBarComp from './Pages/public/NavBarComp.jsx';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import ContactComp from './Pages/public/ContactComp';
import UserDashboardP from './Pages/private/UserDashboardP.jsx';
import CopyExperts from './Pages/private/CopyExperts.jsx';
import Kycverification from './Pages/private/Kycverification.jsx';
import DepositPage from './Pages/private/DepositPage.jsx';
import Withdrawalpage from './Pages/private/Withdrawalpage.jsx';
import AccountUpgrate from './Pages/private/AccountUpgrate.jsx';
import LiveTrading from './Pages/private/LiveTrading.jsx';
import LIveQuote from './Pages/private/LIveQuote.jsx';
import LiveChat from './Pages/private/LiveChat.jsx';
import Calenderpage from './Pages/private/Calenderpage.jsx';
import TransactionPage from './Pages/private/TransactionPage.jsx';
import Email from './Pages/private/Email.jsx';
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<NavBarComp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/contact' element={<ContactComp/>}/>
      <Route path='/User' element={<UserDashboardP/>}/>
      <Route path='/kycverification' element={<Kycverification/>}/>
      <Route path='/copy-experts' element={<CopyExperts/>}/>
      <Route path='/deposit-page' element={<DepositPage/>}/>
      <Route path='/withrawal' element={<Withdrawalpage/>}/>
      <Route path='/account-upgrate' element={<AccountUpgrate/>}/>
      <Route path='/live-trading' element={<LiveTrading/>}/>
      <Route path='/live-quote' element={<LIveQuote/>}/>
      <Route path='/live-chat' element={<LiveChat/>}/>
      <Route path='/calender' element={<Calenderpage/>}/>
      <Route path='/transaction' element={<TransactionPage/>}/>
      <Route path='/emailus' element={<Email/>}/>

      </Routes>
    </div>
  )
}
export default App
