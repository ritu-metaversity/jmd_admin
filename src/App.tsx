import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './Common/MainLayout/MainLayout'
import { useState } from 'react';
import Login from './Pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  const [isActive, setIsActive] = useState(true);
  const toggleNavigation = () => {
    setIsActive(!isActive);
  };

  return (
    <>
     <>
      <Router>
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/changePassword" element={<ChangePassword />} /> */}
            <Route
              path="/"
              element={
                <MainLayout
                  isActive={isActive}
                  setIsActive={setIsActive}
                  toggleNavigation={toggleNavigation}
                />
              }>
              <Route path='/' element={<Dashboard/>}/>
            </Route>
          </Routes>
        </>
      </Router>
    </>
    </>
  )
}

export default App
