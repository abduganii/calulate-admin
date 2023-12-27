import { useRef, useState } from 'react'
import BlueBtn from '../button/blue-buttun'
import DropDawn from '../dropdawn'
import { Checked, DawnIcan, DeleteIcon, PlusIcon } from '../icons'
import { statusOder } from './data'
import cls from './filter.module.scss'

export default function Filter({ SelectAll, deleteAll, Create, page, ...other }) {
    const [openStatus, setOpenSatus] = useState(false)

    const [bac, setbac] = useState(false)
    const back = useRef()
    return (
        <div className={cls.Filter}>
            <div className={cls.Filter__filters}>
                <input className={`${cls.Filter__filters__input} ${cls.Filter__filters__search}`} type="text" placeholder='Имя' />
                <div
                    className={`${cls.Filter__filters__input} ${cls.Filter__filters__select}`}
                    onClick={() => {
                        setbac(true)
                        setOpenSatus(true)
                    }}
                >
                    Статус заказа
                    <DawnIcan />
                    {
                        openStatus && <DropDawn
                            array={statusOder}
                            onClick={() => {
                                setbac(false)
                                setOpenSatus(false)
                            }
                            }
                            style={{ top: "44px", left: "0px" }}
                        />
                    }
                </div>

            </div>

            <div className={cls.Filter__form}>
                <div className={cls.Filter__form__all} onClick={SelectAll}>
                    <Checked fill={"#484038"} />
                    <p>Выбрать все</p>
                </div>
                <div className={cls.Filter__form__all} onClick={deleteAll}>
                    <DeleteIcon fill={"#484038"} />
                    <p>Удалить</p>
                </div>
                {
                    page != "order" ? <BlueBtn style={{ gap: "5px", maxWidth: "151px" }}>
                        <PlusIcon fill={"white"} />Добавить
                    </BlueBtn> : ""
                }

            </div>

            <div ref={back}
                onClick={(e) => {
                    if (e.target == back.current) {
                        setbac(false)
                        setOpenSatus(false)
                    }
                }} className={`${cls.backruond} ${bac ? "displayBlock" : "displayNone"}`}
            ></div>
        </div>
    )
}
