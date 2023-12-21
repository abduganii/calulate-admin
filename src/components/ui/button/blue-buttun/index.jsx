import cls from './blueButton.module.scss'

export default function BlueBtn({ children, type = "submit", onClick, ...other }) {
    return (
        <button className={cls.BlueBtn} type={type} onClick={onClick}  {...other} >
            {children}
        </button>
    )
}
