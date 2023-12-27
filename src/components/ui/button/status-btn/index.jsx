import { statusOder } from "../../filter/data"
import { ScrollIcon } from "../../icons"
import DropDawn from '../../dropdawn'
import cls from "./statusBtn.module.scss"
import { useRef, useState } from "react"

export default function StatusBtn({ label, onChange }) {
    const [openStatus, setOpenSatus] = useState(false)
    const [bac, setbac] = useState(false)
    const back = useRef()
    return (
        <>
            <div className={cls.StatusBtn}>
                <p className={cls.StatusBtn__text} onClick={() => {
                    setOpenSatus(true)
                    setbac(true)
                }}>{label} <ScrollIcon /></p>
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
            <div ref={back}
                onClick={(e) => {
                    if (e.target == back.current) {
                        setbac(false)
                        setOpenSatus(false)
                    }
                }} className={`${cls.backruond} ${bac ? "displayBlock" : "displayNone"}`}
            ></div>
        </>
    )
}
