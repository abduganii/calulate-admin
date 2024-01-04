import { useForm } from "react-hook-form";
import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import UploadInput from "../../ui/form/upload-input";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";
import { useState } from "react";

export default function WallColerPage() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const watchedFiles = watch();
  const [file, setfile] = useState();

  const hendleimg = async (e) => {
    if (e.target.files[0]) {
      setfile(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <>
      <div>
        <Filter page={"colorWall"} />
        <div className="scrollList">
          <TopList
            array={[
              "Фото",
              "Название",
              "Артикул",
              "Цена",
              "Индекс сортировки",
              "Действия",
            ]}
          />
          <GlobalForm handleSubmit={handleSubmit}>
            <UploadInput
              onChange={(e) => hendleimg(e)}
              type={"text"}
              placeholder={"Название"}
              value={file}
            />
            <AddInput
              type={"text"}
              placeholder={"Название"}
              register={{
                ...register("name", { required: "name" }),
              }}
              alert={errors.name?.message}
              value={watchedFiles?.name || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Артикул"}
              register={{
                ...register("name1", { required: "name" }),
              }}
              alert={errors.name1?.message}
              value={watchedFiles?.name1 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Цена"}
              register={{
                ...register("name2", { required: "name" }),
              }}
              alert={errors.name2?.message}
              value={watchedFiles?.name2 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Индекс сортировки"}
              register={{
                ...register("name3", { required: "name" }),
              }}
              alert={errors.name3?.message}
              value={watchedFiles?.name3 || ""}
            />
          </GlobalForm>
          <ListItem
            img={"empty"}
            details={["Название", "Артикул", "Цена", "Индекс сортировки"]}
          />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
