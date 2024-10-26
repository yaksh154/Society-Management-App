import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/pages/Login'
import Registration from './component/pages/Registration'
import Forgot_password from './component/pages/Forgot_password'
import Forgot_password_opt from './component/pages/Forgot_password_opt'
import Reset_password from './component/pages/Reset_password.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/forgot_password' element={<Forgot_password />} />
          <Route path='/forgot_password_opt' element={<Forgot_password_opt />} />
          <Route path='/reset_password' element={<Reset_password />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
