import { useForm } from "react-hook-form";
import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function TypeProfilePage() {
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
        <Filter page={"typeprofile"} />
        <div className="scrollList">
          <TopList
            array={[
              "Название",
              "Тип расчета",
              "Цена",
              "Индекс сортировки",
              "Действия",
            ]}
          />
          <GlobalForm handleSubmit={handleSubmit}>
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
              type={"select"}
              placeholder={"Выберите тип расчета"}
              value={"Выберите тип расчета"}
            />
            <AddInput
              type={"number"}
              placeholder={"price"}
              register={{
                ...register("name1", { required: "name" }),
              }}
              alert={errors.name1?.message}
              value={watchedFiles?.name1 || ""}
            />
            <AddInput
              type={"number"}
              placeholder={"count"}
              register={{
                ...register("name2", { required: "name" }),
              }}
              alert={errors.name2?.message}
              value={watchedFiles?.name2 || ""}
            />
          </GlobalForm>
          <ListItem
            details={[
              "Стандартный (19 мм)",
              "0.00",
              "Стандартные профили",
              "1",
            ]}
          />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
