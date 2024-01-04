import { useForm } from "react-hook-form";
import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function DetailsServicePage() {
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
        <Filter page={"detailService"} />
        <div className="scrollList">
          <TopList
            array={[
              "Название",
              "Артикул",
              "Оператор условия",
              "Высота фасада",
              "Цена",
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
              type={"text"}
              placeholder={"Артикул"}
              register={{
                ...register("name1", { required: "name1" }),
              }}
              alert={errors.name1?.message}
              value={watchedFiles?.name1 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Оператор условия"}
              register={{
                ...register("name2", { required: "name" }),
              }}
              alert={errors.name2?.message}
              value={watchedFiles?.name2 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Высота фасада"}
              register={{
                ...register("name3", { required: "name" }),
              }}
              alert={errors.name3?.message}
              value={watchedFiles?.name3 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Цена"}
              register={{
                ...register("name4", { required: "name" }),
              }}
              alert={errors.name4?.message}
              value={watchedFiles?.name4 || ""}
            />
          </GlobalForm>
          <ListItem
            details={[
              "Большие",
              "Sborka extra updated",
              "<=",
              "Glass",
              "9.00 $",
            ]}
          />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
