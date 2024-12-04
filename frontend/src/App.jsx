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
import Resident_home from './component/pages/Resident/pages/Dashboard/Home.jsx'
import Resident_Personal_Detail from './component/pages/Resident/pages/Personal_Detail/Personal_Detail.jsx'
import Resident_Service_And_Complaint from './component/pages/Resident/pages/Service_And_Complaint/Service_And_Complaint.jsx'
import Resident_Events_Participation from './component/pages/Resident/pages/Events_Participation/Events_Participation.jsx'
import Resident_Access_Forums from './component/pages/Resident/pages/Community/pages/Forums/Access_Forums.jsx'
import Polls from './component/pages/Resident/pages/Community/pages/Poll/Polls.jsx'
import Resident_Communities_Discussion from './component/pages/Resident/pages/Community/pages/Communities/Communities_Discussion.jsx'
import Resident_Maintenance_Invoices from './component/pages/Resident/pages/Payment_Portal/pages/Maintenance_Invoices.jsx'
import Resident_Other_Income_Invoice from './component/pages/Resident/pages/Payment_Portal/pages/Other_Income_Invoice.jsx'
import Resident_Security_Protocols from './component/pages/Resident/pages/Security_Protocols/Security_Protocols.jsx'
import VisitorTracking from './component/pages/Security/Pages/VisitorTracking.jsx'
import Emergency from './component/pages/Security/Pages/Emergency.jsx'
import Maintenance_Invoices_data from './component/pages/Resident/pages/Payment_Portal/pages/Maintenance_Invoices_data.jsx'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Login/Signup/Forget  */}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/forgot_password' element={<Forgot_password />} />
        <Route path='/forgot_password/opt' element={<Forgot_password_opt />} />
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
        <Route path='/financial_management/Expanse' element={<Expanse />} />
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

        {/* Resident Dashboard */}
        <Route path='/resident/home' element={<Resident_home />} />
        {/* Resident Personal Detail */}
        <Route path='/resident/personal_detail' element={<Resident_Personal_Detail />} />
        {/* Resident Service And Complaint */}
        <Route path='/resident/service_and_complaint' element={<Resident_Service_And_Complaint />} />
        {/* Resident Events Participation */}
        <Route path='/resident/events_participation' element={<Resident_Events_Participation />} />
        {/* Resident Community */}
        <Route path='/resident/community/access_forums' element={<Resident_Access_Forums />} />
        <Route path='/resident/community/polls' element={<Polls />} />
        <Route path='/resident/community/communities_discussion' element={<Resident_Communities_Discussion />} />
        {/* Resident Payment Portal */}
        <Route path='/resident/payment_portal/maintenance_invoices' element={<Resident_Maintenance_Invoices />} />
        <Route path='/resident/payment_portal/maintenance_invoices_data' element={<Maintenance_Invoices_data />} />
        <Route path='/resident/payment_portal/other_income_invoice' element={<Resident_Other_Income_Invoice />} />
        {/* Resident Security Protocols */}
        <Route path='/resident/security_protocols' element={<Resident_Security_Protocols />} />


        <Route path='/security/visitor' element={<VisitorTracking />} />
        <Route path='/security/Emergency' element={<Emergency />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
