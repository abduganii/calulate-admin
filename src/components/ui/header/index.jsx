import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Editcan,
  LeftIcan,
  LououtIcan,
  RefreshIcan,
  RightIcan,
} from "../icons";
import { SiteBarArr } from "../site-bar/data";

import cls from "./header.module.scss";

export default function Header() {
  const pashName = useLocation();
  const [Head, setHead] = useState();
  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };
  const handleRefresh = () => {

    window.location.reload();
  };
  useEffect(() => {
    SiteBarArr?.forEach((e) => {
      if (e?.link == pashName?.pathname) {
        setHead(e?.text);
      }
      if (e?.link != pashName?.pathname && e?.array?.length) {
        e?.array?.map((el) => {
          if (el?.link == pashName?.pathname) {
            setHead(el?.text);
          }
        });
      }
    });
  }, [pashName]);
  return (
    <header className={cls.Header}>
      <div className={cls.Header__control}>
        <div onClick={goBack}>
          <LeftIcan />
        </div>
        <div onClick={goForward} >
          <RightIcan />
        </div>
        <p className={cls.Header__control__text}>{Head}</p>
      </div>
      <div className={cls.Header__icons}>
        <div onClick={handleRefresh}>
          <RefreshIcan />
        </div>
        <div>
          <Editcan />
        </div>
        <div>
          <LououtIcan />
        </div>
      </div>
    </header>
  );
}
