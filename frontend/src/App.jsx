import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/pages/Login'
import Registration from './component/pages/Registration'
import Forgot_password from './component/pages/Forgot_password'
import Forgot_password_opt from './component/pages/Forgot_password_opt'
import Reset_password from './component/pages/Reset_password.jsx'
import Home from './component/pages/DashStack_manager/Home.jsx'
import Profile from './component/pages/DashStack_manager/Profile.jsx'
import Resident_Management from './component/pages/DashStack_manager/Resident_Management.jsx'
import Financial_Management from './component/pages/DashStack_manager/Financial_Management.jsx'
import Facility_Management from './component/pages/DashStack_manager/Facility_Management.jsx'
import Complaint_Tracking from './component/pages/DashStack_manager/Complaint_Tracking.jsx'
import Security_Management from './component/pages/DashStack_manager/Security_Management.jsx'
import Security_Guard from './component/pages/DashStack_manager/Security_Guard.jsx'
import Announcement from './component/pages/DashStack_manager/Announcement.jsx'
import Otherincome from './component/pages/DashStack_manager/Income/Otherincome.jsx'
import Resident_Owner from './component/pages/DashStack_manager/Resident_Owner.jsx'

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/forgot_password' element={<Forgot_password />} />
              <Route path='/forgot_password_opt' element={<Forgot_password_opt />} />
              <Route path='/reset_password' element={<Reset_password />} />
              <Route path='/' element={<Home />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/resident_management' element={<Resident_Management />} />
                  <Route path='/resident_management/resident_owner' element={<Resident_Owner />} />
                  <Route path='/financial_management' element={<Financial_Management />} />
                  <Route path='/financial_management/otherincome' element={<Otherincome />} />
                  <Route path='/facility_management' element={<Facility_Management />} />
                  <Route path='/complaint_tracking' element={<Complaint_Tracking />} />
                  <Route path='/security_management' element={<Security_Management />} />
                  <Route path='/security_guard' element={<Security_Guard />} />
                  <Route path='/announcement' element={<Announcement />} />

          </Routes>
      </BrowserRouter>
  )
}

export default App
