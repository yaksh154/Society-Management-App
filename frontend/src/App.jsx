import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/pages/Login'
import Registration from './component/pages/Registration'
import Forgot_password from './component/pages/Forgot_password'
import Forgot_password_opt from './component/pages/Forgot_password_opt'
import Reset_password from './component/pages/Reset_password.jsx'
import Home from './component/pages/DashStack_manager/Dashboard/Home.jsx'
import Profile from './component/pages/DashStack_manager/Dashboard/Profile.jsx'
import Resident_Management from './component/pages/DashStack_manager/Resident_Management/Resident_Management.jsx'
import Resident_Owner_Form from './component/pages/DashStack_manager/Resident_Owner/Resident_Owner_Form.jsx'
import Financial_Management from './component/pages/DashStack_manager/Financial_Management/Financial_Management.jsx'
import Otherincome from './component/pages/DashStack_manager/Financial_Management/Income/Otherincome.jsx'
import ParticipantTable from './component/pages/DashStack_manager/Financial_Management/Income/ParticipantTable.jsx'
import Expanse from './component/pages/DashStack_manager/Financial_Management/Income/Expanse.jsx'
import Note from './component/pages/DashStack_manager/Financial_Management/Income/Note.jsx'
import Facility_Management from './component/pages/DashStack_manager/Facility_Management/Facility_Management.jsx'
import Create_Complaint from './component/pages/DashStack_manager/Complaint_Tracking/Create_Complaint/Create_Complaint.jsx'
import Request_Tracking from './component/pages/DashStack_manager/Complaint_Tracking/Create_Complaint/Request_Tracking.jsx'
import Visitor_Logs from './component/pages/DashStack_manager/Security_Management/Security_Visitor/Visitor_Logs.jsx'
import Security_Protocols from './component/pages/DashStack_manager/Security_Management/Security_Visitor/Security_Protocols.jsx'
import Security_Guard from './component/pages/DashStack_manager/Security_Guard/Security_Guard.jsx'
import Announcement from './component/pages/DashStack_manager/Announcement/Announcement.jsx'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Login/Signup/Forget  */}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/forgot_password' element={<Forgot_password />} />
        <Route path='/forgot_password_opt' element={<Forgot_password_opt />} />
        <Route path='/reset_password' element={<Reset_password />} />


        {/* Dashboard */}
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />

        {/* resident_management */}
        <Route path='/resident_management' element={<Resident_Management />} />
        <Route path='/resident_management/resident_owner_Form' element={<Resident_Owner_Form />} />

        {/* financial_management */}
        <Route path='/financial_management/income' element={<Financial_Management />} />

        {/* ...Income & OtherIncome....*/}
        <Route path='/financial_management/otherincome' element={<Otherincome />} />
        <Route path='/financial_management/ViewParticipation' element={<ParticipantTable />} />

        {/* Expenses */}
        <Route path='/financial_management/Expanse' element={<Expanse />} />

        {/* Note */}
        <Route path='/financial_management/Note' element={<Note />} />

        {/* facility_management */}
        <Route path='/facility_management' element={<Facility_Management />} />

        {/* complaint_tracking */}
        <Route path='/complaint_tracking/Create_Complaint' element={<Create_Complaint />} />
        <Route path='/complaint_tracking/Request_Tracking' element={<Request_Tracking />} />

        {/* security_management */}
        <Route path='/security_management/visitor_logs' element={<Visitor_Logs />} />
        <Route path='/security_management/security_protocols' element={<Security_Protocols />} />

        {/* security_guard */}
        <Route path='/security_guard' element={<Security_Guard />} />

        {/* announcement */}
        <Route path='/announcement' element={<Announcement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
