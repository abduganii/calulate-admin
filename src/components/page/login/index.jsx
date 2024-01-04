import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetWindowWidth } from "../../../hooks/useGetWindowWith";
import BlueBtn from "../../ui/button/blue-buttun";
import LoginInput from "../../ui/form/login-input";
import { DoteIcon } from "../../ui/icons";
import cls from "./login.module.scss";
import { AuthLogin } from "../../../services/auth";

export default function Login() {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const widthWindow = useGetWindowWidth();
  const navigate = useNavigate();
  const watchedFiles = watch();
  const handleAuth = async (data) => {
    // setLoader(true);
    navigate(`/order?page=1`);
    // await AuthLogin(data )
    //   .then((response) => {
    //    console.log(response);
    //    navigate(`/order?page=1`);
    //     setLoader(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoader(false);
    //   });
  };
  return (
    <div className={cls.Login}>
      <div className={cls.Login__content}>
        <div className={cls.Login__content__wrap}>
          <form onSubmit={handleSubmit(handleAuth)}>
            <DoteIcon color={"#484038"} />
            <h1 className={cls.Login__title}>ЭПЗ</h1>
            <p className={cls.Login__text}>
              Электронный прием заказов на алюминиевые фасады
            </p>
            <LoginInput
              type={"text"}
              label={"Логин"}
              placeholder={"Логин"}
              register={{
                ...register("loginId", { required: "login is required" }),
              }}
              alert={errors.loginId?.message}
              value={watchedFiles?.loginId || ""}
              style={{ marginBottom: "20px" }}
            />
            <LoginInput
              type={"password"}
              label={"Пароль"}
              placeholder={"Пароль"}
              register={{
                ...register("password", { required: "password is required" }),
              }}
              alert={errors.password?.message}
              value={watchedFiles?.password || ""}
              style={{ marginBottom: "67px" }}
            />
            <BlueBtn type="submit" style={{ borderRadius: "5px" }}>
              Вход в систему
            </BlueBtn>
          </form>
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
