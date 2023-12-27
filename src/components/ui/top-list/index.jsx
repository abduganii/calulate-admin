import { useSearchParams } from 'react-router-dom'
import paramsToObject from '../../../hooks/paramsToObject'
import CheckBox from '../form/checkBox'
import cls from './topList.module.scss'

export default function TopList(
    {
        array = [],
        SelectAll,
        ...other
    }
) {
    const [params, setSearchParams] = useSearchParams()
    return (
        <ul className={cls.TopList}>
            <li>
                <CheckBox onClick={() => {
                    if (params.get("deleteId") == "all") {
                        setSearchParams({ ...paramsToObject(params.entries()), deleteId: "" })
                    } else {
                        setSearchParams({ ...paramsToObject(params.entries()), deleteId: "all" })
                    }
                }} />
            </li>
            {
                array?.map((e, i) => (
                    <li className={`${cls.TopList__item}  ${e === "Фото" && cls.TopList__item__img} `} key={i}>{e}</li>
                ))
            }
        </ul >
    )
}
