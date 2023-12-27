import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MainLayout from '../components/layouts/main'
import ClientPage from '../components/page/clinet'
import DetailsServicePage from '../components/page/details-sevice'
import AdminHome from '../components/page/home'
import Login from '../components/page/login'
import MoreServicePage from '../components/page/more-service'
import OpenTypePage from '../components/page/open-type'
import OrderPage from '../components/page/order'
import ColerProfilePage from '../components/page/profile-color'
import TypeProfilePage from '../components/page/profile-type'
import WallColerPage from '../components/page/wall-color'


export default function AppRouter() {

    // const navigate = useNavigate()
    // useEffect(() => {
    //     navigate('auth/login')
    // }, [])
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}  >
                <Route path="/" element={< AdminHome />} />
                <Route path="/calt" element={< AdminHome />} />
                <Route path="/order" element={< OrderPage />} />
                <Route path="/client" element={< ClientPage />} />
                <Route path="/ask/" element={< AdminHome />} />
                <Route path="/ask/type" element={< TypeProfilePage />} />
                <Route path="/ask/coler" element={< ColerProfilePage />} />
                <Route path="/ask/colerWall" element={< WallColerPage />} />
                <Route path="/ask/moreService" element={< MoreServicePage />} />
                <Route path="/ask/cervice" element={< DetailsServicePage />} />
                <Route path="/ask/opneType" element={< OpenTypePage />} />
                <Route path="/setting" element={< AdminHome />} />
            </Route>
            <Route path="/auth/login" element={< Login />} />
        </Routes>
    )
}