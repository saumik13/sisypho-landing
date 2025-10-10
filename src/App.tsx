import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MemoPage from './pages/MemoPage'
import AuthPage from './pages/AuthPage'
import DevicePage from './pages/DevicePage'
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import PaymentCancelledPage from './pages/PaymentCancelledPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/device" element={<DevicePage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/payment-cancelled" element={<PaymentCancelledPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    </Routes>
  )
}

export default App