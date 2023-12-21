import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteBar from '../../ui/site-bar'
import cls from "./mainLayout.module.scss"

export default function MainLayout() {
    return (
        <div className={cls.MainLayout}>
            <SiteBar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
