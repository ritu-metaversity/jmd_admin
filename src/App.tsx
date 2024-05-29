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
              <Route path='/main' element={<Dashboard/>}/>
              <Route path='/main/masterdetails' element={<MasterDetails/>}/>
              <Route path='/main/admindetails/:id' element={<UserDetails/>}/>
              <Route path='/main/createuser/:id' element={<CreateUser/>}/>
              <Route path='/main/updatelimit' element={<UpdateLimit/>}/>
            </Route>
          </Routes>
        </>
      </Router>
    </>
    </>
  )
}

export default App
