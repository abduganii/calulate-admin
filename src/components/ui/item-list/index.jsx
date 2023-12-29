import StatusBtn from "../button/status-btn";
import CheckBox from "../form/checkBox";
import { CommitIcon, DeleteIcon, DocIcon, EditIcon, EyeIcon } from "../icons";
import cls from "./itemList.module.scss";

export default function ListItem({
  id,
  img,
  name,
  time,
  tel,
  details = [],
  price,
  status,
  statusChange,
  file,
  show,
  update,
  remove,
}) {
  return (
    <li className={`${cls.ListItem} ${img && cls.ListItem__withImg} `}>
      <CheckBox />
      {img ? (
        <div className={cls.ListItem__img}>
          {img == "empty" ? (
            <img src="/img.svg" width={60} height={70} alt="img" />
          ) : (
            <img src={img} width={60} height={70} alt="img" />
          )}
        </div>
      ) : (
        ""
      )}
      {id && <p className={cls.ListItem__detail}>{id}</p>}
      {time && <p className={cls.ListItem__detail}>{time}</p>}
      {name && <p className={cls.ListItem__name}>{name}</p>}
      {tel && <p className={cls.ListItem__tel}>{tel}</p>}

      {details &&
        details?.map((e, i) => (
          <p key={i} className={cls.ListItem__detail}>
            {e}
          </p>
        ))}
      {price && <p className={cls.ListItem__price}>{price}</p>}
      {status && <StatusBtn label={status} onChange={statusChange} />}
      <div className={cls.ListItem__action}>
        <div>
          <CommitIcon />
        </div>
        <div>
          <DocIcon />
        </div>
        <div>
          <EyeIcon />
        </div>
        <div>
          <EditIcon />
        </div>
        <div>
          <DeleteIcon fill={"#484038"} />
        </div>
      </div>
    </li>
  );
}
