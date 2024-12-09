import { BrowserRouter, Routes, Route } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import DashboardLayout from './pages/DashboardLayout.jsx';
import Transfer from './pages/Transfer.jsx';
import Topup from './pages/Topup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<App />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/topup" element={<Topup />} />
        </Route>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
