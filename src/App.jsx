import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './components/pages/login/Loginpage.jsx'
import OrderPage from './components/pages/order/OrderPage.jsx'
import ErrorPage from './components/pages/error/ErrorPage.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/order/:username" element={<OrderPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default App
