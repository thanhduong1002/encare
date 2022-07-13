import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppointmentPage from './pages/AppointmentPage';
import ChangePassword from './pages/ChangePassword';
import ChangeProfile from './pages/ChangeProfile';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

import LoginPage from './pages/LoginPage';
import TestLocalStorage from './pages/testlocalStorage';
import Test from './pages/TestPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path='/changeProfile' element={<ChangeProfile />} />
      <Route path='/test' element={<Test />} />
      <Route path='/testlogin' element={<Login />} />
      <Route path='/testlocal' element={<TestLocalStorage />} />
      <Route path='/changePass' element={<ChangePassword />} />
    </Routes>
  );
}

export default App;
