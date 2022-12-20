import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentPage from "./pages/AppointmentPage";
// import NavBar from "./components/NavBar";
// import HomePage from "./pages/HomePage";
import PlaygroundPage from "./pages/PlaygroundPage";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PrivateRoute from './auth/PrivateRoute';
import UserInfoPage from './pages/UserInfoPage';
import TestPage from './pages/TestPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import EmailVerificationLandingPage from './pages/EmailVerificationLandingPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import PasswordResetLandingPage from './pages/PasswordResetLandingPage';

function App() {
  return (
    <BrowserRouter>
     <div className="App font-thin">
     {/* <NavBar/> */}
      <div id="page-body" className="m-5 text-lg">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/user" element={
              <UserInfoPage />
          } />
          <Route path="/appointments" element={<AppointmentPage/>} />
          <Route path="/playground" element={
             <PrivateRoute>
               <PlaygroundPage/>
             </PrivateRoute>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path='/forgot-password' element={<ForgotPasswordPage/>} />
          <Route path="/test" element={<TestPage/>} />
          <Route path="/please-verify" element={<EmailVerificationPage/>} />
          <Route path="/verify-email/:verificationString" element={<EmailVerificationLandingPage/>} />
          <Route path="/reset-password/:passwordResetCode" element={<PasswordResetLandingPage/>} />
        </Routes>
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App;
