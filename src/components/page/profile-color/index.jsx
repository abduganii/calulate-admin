import { useForm } from "react-hook-form";
import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function ColerProfilePage() {
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
        <Filter page={"coler"} />
        <div className="scrollList">
          <TopList
            array={[
              "Название",
              "Индекс сортировки",
              "Hex code (from)",
              "to",
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
              type={"number"}
              placeholder={"count"}
              register={{
                ...register("name1", { required: "name" }),
              }}
              alert={errors.name1?.message}
              value={watchedFiles?.name1 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"#"}
              register={{
                ...register("name2", { required: "name" }),
              }}
              alert={errors.name2?.message}
              value={watchedFiles?.name2 || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"#"}
              register={{
                ...register("name3", { required: "name" }),
              }}
              alert={errors.name3?.message}
              value={watchedFiles?.name3 || ""}
            />
          </GlobalForm>
          <ListItem details={["Черный", "1", "#871623", "#871623"]} />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
