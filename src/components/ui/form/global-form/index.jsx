import cls from "./globalForm.module.scss";
import BlueBtn from "../../button/blue-buttun";
import CancelBtn from "../../button/cancel-btn";
import { useSearchParams } from "react-router-dom";
import paramsToObject from "../../../../hooks/paramsToObject";

export default function GlobalForm({ children, url, method, id }) {
  const [params, setSearchParams] = useSearchParams();
  return (
    <form
      className={`${cls.GlobalForm} ${params.get("openMadal") == "post" || params.get("openMadal") == "put"
          ? cls.GlobalForm__open
          : ""
        }`}
    >
      {/* <div className={cls.GlobalForm__div}></div> */}
      {children}
      <div className={cls.GlobalForm__btns}>
        <CancelBtn
          onClick={() =>
            setSearchParams({
              ...paramsToObject(params.entries()),
              openMadal: "",
            })
          }
          style={{ maxWidth: "120px" }}
        >
          Отменить
        </CancelBtn>
        <BlueBtn
          style={{
            background: "#58A43E",
            maxWidth: "120px",
            borderRadius: "3px",
          }}
        >
          Сохранить
        </BlueBtn>
      </div>
    </form>
  );
}
