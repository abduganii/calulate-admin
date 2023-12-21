import cls from './authlogin.module.scss'

export default function LoginInput({ label, type, placeholder, onChange, ...other }) {
    return (
        <label className={cls.LoginInput} {...other}>
            <p className={cls.LoginInput__text}>{label}</p>
            <input className={cls.LoginInput__input} type={type} placeholder={placeholder} onChange={onChange} />
        </label>
    )
}
