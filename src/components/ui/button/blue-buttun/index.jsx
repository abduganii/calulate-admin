import cls from './blueButton.module.scss'

export default function BlueBtn({ children, className, type = "submit", onClick, ...other }) {
    return (
        <button className={`${cls.BlueBtn} ${className && className}`} type={type} onClick={onClick}  {...other} >
            {children}
        </button>
    )
}
