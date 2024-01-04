import cls from "./globalForm.module.scss";
import BlueBtn from "../../button/blue-buttun";
import CancelBtn from "../../button/cancel-btn";
import { useSearchParams } from "react-router-dom";
import paramsToObject from "../../../../hooks/paramsToObject";
import { AddData, UpdateData } from "../../../../services/glabal";

export default function GlobalForm({
  children,
  handleSubmit,
  url,
  method,
  id,
}) {
  const [params, setSearchParams] = useSearchParams();
  const handleAdd = async (data) => {
    console.log(data);
    // if (method == "post") {
    //   await AddData()
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // if (method == "post") {
    //   await UpdateData()
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  const Testfunction = () => console.log("error");
  return (
    <form
      className={`${cls.GlobalForm} ${
        params.get("openMadal") == "post" || params.get("openMadal") == "put"
          ? cls.GlobalForm__open
          : ""
      }`}
      onSubmit={handleSubmit ? handleSubmit(handleAdd) : Testfunction()}
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
          type="submit"
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
