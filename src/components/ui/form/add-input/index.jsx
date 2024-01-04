import cls from "./addInput.module.scss";
import { Select } from "antd";
const AddInput = ({
  type,
  placeholder,
  arr = [],
  value,
  onChange,
  alert,
  setError,
  register = {},
  className,
  ...other
}) => {
  return (
    <div className={cls.AddInput__wrap}>
      {type == "select" ? (
        <Select
          defaultValue={placeholder}
          style={{ width: "100%" }}
          value={value}
          onChange={onChange}
          // disabled={disabled}
          options={arr?.map((sp) => ({ value: sp.id, label: sp.name }))}
        />
      ) : (
        <input
          className={`${cls.AddInput} ${className && className}`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          {...register}
          {...setError}
          {...other}
        />
      )}
    </div>
  );
};

export default AddInput;
