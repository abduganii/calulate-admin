import { Uploadcon } from "../../icons";
import cls from "./addInput.module.scss";

const UploadInput = ({ value, onChange, className, ...other }) => {

  return (
    <div className={cls.AddInput__wrap}>
      <label className={cls.AddInput}  {...other}>
        <input type="file" accept="image/jpeg, image/png" onChange={onChange} />
        {value ? <img src={value} /> : <Uploadcon />}

      </label>
    </div>
  );
};

export default UploadInput;
