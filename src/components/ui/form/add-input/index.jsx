import cls from "./addInput.module.scss";

const AddInput = ({ type, placeholder, onChange, className, ...other }) => {
  return (
    <div className={cls.AddInput__wrap}>
      <input
        className={`${cls.AddInput} ${className && className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...other}
      />
    </div>
  );
};

export default AddInput;
