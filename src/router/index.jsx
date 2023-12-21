import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MainLayout from '../components/layouts/main'
import AdminHome from '../components/page/home'
import Login from '../components/page/login'


export default function AppRouter() {

    const navigate = useNavigate()
    useEffect(() => {
        navigate('auth/login')
    }, [])
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}  >
                <Route path="/" element={< AdminHome />} />
                <Route path="/calt" element={< AdminHome />} />
                <Route path="/order" element={< AdminHome />} />
                <Route path="/client" element={< AdminHome />} />
                <Route path="/ask" element={< AdminHome />} />
                <Route path="/ask/coler" element={< AdminHome />} />
                <Route path="/ask/colerWall" element={< AdminHome />} />
                <Route path="/ask/moreService" element={< AdminHome />} />
                <Route path="/ask/cervice" element={< AdminHome />} />
                <Route path="/ask/opneType" element={< AdminHome />} />
                <Route path="/setting" element={< AdminHome />} />
            </Route>
            <Route path="/auth/login" element={< Login />} />
        </Routes>
    )
}