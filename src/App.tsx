import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './Common/MainLayout/MainLayout'
import { useState } from 'react';
import Login from './Pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MasterDetails from './Component/Breadcrumb/MasterDetails/MasterDetails';
import UserDetails from './Pages/UserDetails/UserDetails';
import CreateUser from './Pages/UserDetails/CreateUser/CreateUser';
import UpdateLimit from './Pages/UserDetails/UpdateLimit/UpdateLimit';
import LedgerDashboard from './Pages/Dashboard/LedgerDashboard/LedgerDashboard';
import LimitUpdate from './Pages/UpdateUser/LimitUpdate';
import ShareUpdate from './Pages/UpdateUser/ShareUpdate/ShareUpdate';
import CommUpdate from './Pages/UpdateUser/CommUpdate/CommUpdate';
import StatusUpdate from './Pages/UpdateUser/StatusUpdate/StatusUpdate';
import EditUser from './Pages/UserDetails/EditUser/EditUser';
import ChangePassword from './Pages/ChangePassword/ChangePassword';
import CurrentSport from './Pages/SportDetails/CurrentSport/CurrentSport/CurrentSport';
import CompletedSport from './Pages/SportDetails/CompletedSport/CompletedSport';
import MatchSessionPosition from './Pages/SportDetails/MatchSessionPosition/MatchSessionPosition';
import MatchSessionBet from './Pages/SportDetails/MatchSessionBet/MatchSessionBet';
import MatchBet from './Pages/SportDetails/MatchBet/MatchBet';
import SessionBet from './Pages/SportDetails/SessionBet/SessionBet';
import MyLedger from './Pages/LedgerDetails/MyLedger/MyLedger';
import LedgerSuper from './Pages/LedgerDetails/LedgerSuper/LedgerSuper';
import CommissionLenaDena from './Pages/LedgerDetails/CommissionLenaDena/CommissionLenaDena';
import TotalProfit from './Pages/LedgerDetails/TotalProfit/TotalProfit';
import AllReport from './Pages/AllReport/AllReport';
import CashTransaction from './Pages/CashTransaction/CashTransaction';


function App() {

  const [isActive, setIsActive] = useState(true);


  return (
    <>
      <>
        <Router>
          <>
            <Routes>
              <Route path="/login" element={<Login />} />
              {/* <Route path="/changePassword" element={<ChangePassword />} /> */}
              <Route
                path="/main"
                element={
                  <MainLayout
                    isActive={isActive}
                    setIsActive={setIsActive}
                  />
                }>
                <Route path='/main' element={<Dashboard />} />
                <Route path='/main/masterdetails' element={<MasterDetails />} />
                <Route path='/main/admindetails/:id' element={<UserDetails />} />
                <Route path='/main/createuser/:id' element={<CreateUser />} />
                <Route path='/main/updatelimit' element={<UpdateLimit />} />
                <Route path='/main/ledger-dashboard' element={<LedgerDashboard />} />
                <Route path='/main/limitUpdateDetails/:id' element={<LimitUpdate />} />
                <Route path='/main/shareUpdateDetails/:id' element={<ShareUpdate />} />
                <Route path='/main/commUpdateDetails/:id' element={<CommUpdate />} />
                <Route path='/main/statusUpdateDetails/:id' element={<StatusUpdate />} />
                <Route path='/main/user-edit/:id/:id1' element={<EditUser />} />
                <Route path='/main/changePassword/:id?' element={<ChangePassword />} />
                <Route path='/main/currentsportsdetails' element={<CurrentSport />} />
                <Route path='/main/sportsdetails' element={<CompletedSport />} />
                <Route path='/main/matchSession/:id' element={<MatchSessionPosition />} />
                <Route path='/main/matchSessionBets/:id' element={<MatchSessionBet />} />
                <Route path='/main/viewMatchedBet/:id' element={<MatchBet />} />
                <Route path='/main/viewSessionBet/:id' element={<SessionBet />} />
                <Route path='/main/myledger' element={<MyLedger />} />
                <Route path='/main/agentledger/:id' element={<LedgerSuper />} />
                <Route path='/main/commission-lena-dena' element={<CommissionLenaDena />} />
                <Route path='/main/totalProfit' element={<TotalProfit />} />
                <Route path='/main/allagentreport' element={<AllReport />} />
                <Route path='/main/debitclient/:id' element={<CashTransaction />} />
              </Route>
            </Routes>
          </>
        </Router>
      </>
    </>
  )
}

export default App
