import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { DoteIcon, ProfielIcon, UpIcan } from '../icons'
import { SiteBarArr } from './data'
import cls from "./siteBar.module.scss"


export default function SiteBar() {
    const pashName = useLocation()
    console.log(pashName)
    return (
        <div className={cls.SiteBar}>
            <div>
                <DoteIcon color={"#484038"} />
                <div className={cls.SiteBar__profile}>
                    <div className={cls.SiteBar__Avatar}>
                        <ProfielIcon />
                        <img src="/Avatar.png" alt="" />
                    </div>
                    <div className={cls.SiteBar__profile_wrap}>
                        <h2 className={cls.SiteBar__profile__title}>Admin</h2>
                        <p className={cls.SiteBar__profile__text}>Администратор</p>
                    </div>
                </div>

                <ul className={cls.SiteBar__list}>
                    {
                        SiteBarArr?.map(e => (
                            <li key={e?.id} className={cls.SiteBar__list__item}>
                                <NavLink className={`${cls.SiteBar__list__link} ${pashName?.pathname?.includes(e?.link) ? cls.SiteBar__list__linkActive : ""}`} to={e?.link}>
                                    <div>
                                        {e?.icon(pashName?.pathname?.includes(e?.link) ? "white" : "#484038")} <p>{e?.text}</p>
                                    </div>
                                    {e?.array?.length && !pashName?.pathname?.includes(e?.link) ? <UpIcan /> : ""}
                                </NavLink>
                                {e?.array?.length && pashName?.pathname?.includes(e?.link) ?
                                    <div className={cls.SiteBar__list__child}>
                                        {
                                            e?.array?.map(el => (
                                                <NavLink to={el?.link} className={`${cls.SiteBar__list__childLink} ${pashName?.pathname == el?.link ? cls.SiteBar__list__childLinkActive : ""}`} key={el?.id} >
                                                    {el?.text}
                                                </NavLink>
                                            ))
                                        }
                                    </div>
                                    : ""
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>

            <p className={cls.SiteBar__Getter}>
                Сделана в: <br />
                <a href='https://getter.uz/' target="_blank">Getter</a>
            </p>
        </div >
    )
}
