import { useForm } from "react-hook-form";
import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import UploadInput from "../../ui/form/upload-input";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function OpenTypePage() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const watchedFiles = watch();
  return (
    <>
      <div>
        <Filter page={"opneType"} />
        <div className="scrollList">
          <TopList
            array={[
              "Фото",
              "Название",
              "Тип расчета",
              "Индекс сортировки",
              "Цена",
              "Действия",
            ]}
          />
          <GlobalForm handleSubmit={handleSubmit}>
            <UploadInput type={"text"} placeholder={"Название"} />
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
              placeholder={"Тип расчета"}
              register={{
                ...register("name1", { required: "name" }),
              }}
              alert={errors.name1?.message}
              value={watchedFiles?.name1 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Индекс сортировки"}
              register={{
                ...register("name2", { required: "name" }),
              }}
              alert={errors.name2?.message}
              value={watchedFiles?.name2 || ""}
            />
            <AddInput type={"number"} placeholder={"0.0"} />
          </GlobalForm>
          <ListItem
            img={"empty"}
            details={["Прозрачное", "Glass 1", "1", "0.0"]}
          />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
