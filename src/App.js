import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppointmentPage from './pages/AppointmentPage';
import ChangePassword from './pages/ChangePassword';
import ChangeProfile from './pages/ChangeProfile';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import InformationAppointment from './pages/InformationAppointment';
import ReExaminationPage from './pages/ReExaminationPage';

import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import Test from './pages/TestPage';
import TestLogin from './pages/TestLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/test" element={<HomePage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path='/changeProfile' element={<ChangeProfile />} />
      <Route path='/home' element={<Test />} />
      <Route path='/testlogin' element={<TestLogin />} />
      <Route path='/changePass' element={<ChangePassword />} />
      <Route path='/infoapp' element={<InformationAppointment />} />
      <Route path='/navi' element={<Navigation />} />
      <Route path='/reexam' element={<ReExaminationPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
