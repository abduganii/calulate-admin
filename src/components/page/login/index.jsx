import { useNavigate } from "react-router-dom";
import { useGetWindowWidth } from "../../../hooks/useGetWindowWith";
import BlueBtn from "../../ui/button/blue-buttun";
import LoginInput from "../../ui/form/login-input";
import { DoteIcon } from "../../ui/icons";
import cls from "./login.module.scss";

export default function Login() {
  const widthWindow = useGetWindowWidth();
  const navigate = useNavigate();
  return (
    <div className={cls.Login}>
      <div className={cls.Login__content}>
        <div className={cls.Login__content__wrap}>
          <div>
            <DoteIcon color={"#484038"} />
            <h1 className={cls.Login__title}>ЭПЗ</h1>
            <p className={cls.Login__text}>
              Электронный прием заказов на алюминиевые фасады
            </p>
            <LoginInput
              type={"text"}
              label={"Логин"}
              placeholder={"Логин"}
              style={{ marginBottom: "20px" }}
            />
            <LoginInput
              type={"password"}
              label={"Пароль"}
              placeholder={"Пароль"}
              style={{ marginBottom: "67px" }}
            />
            <BlueBtn
              type={"submit"}
              style={{ borderRadius: "5px" }}
              onClick={() => navigate("/")}
            >
              Вход в систему
            </BlueBtn>
          </div>
          <p className={cls.Login__Getter}>
            Сделана в: <br />
            <a href="https://getter.uz/" target="_blank">
              Getter
            </a>
          </p>
        </div>
      </div>
      <img className={cls.Login__img} src="/auth.png" alt="img" />
    </div>
  );
}
