import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../ui/header";
import SiteBar from "../../ui/site-bar";
import cls from "./mainLayout.module.scss";

export default function MainLayout() {
  return (
    <div className={cls.MainLayout}>
      <SiteBar />
      <div className={cls.MainLayout__content}>
        <Header />
        <div className={cls.MainLayout__wrap}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
