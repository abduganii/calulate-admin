import { useForm } from "react-hook-form";
import Filter from "../../ui/filter";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";
import GlobalForm from "../../ui/form/global-form";
import AddInput from "../../ui/form/add-input";

export default function ClientPage() {
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
        <Filter page={"client"} />
        <div className="scrollList">
          <TopList array={["Клиент", "Тел.номер", "Действия"]} />
          <GlobalForm handleSubmit={handleSubmit}>
            <AddInput
              type={"text"}
              placeholder={"Клиент"}
              register={{
                ...register("name", { required: "name" }),
              }}
              alert={errors.name?.message}
              value={watchedFiles?.name || ""}
            />
            <AddInput
              type={"text"}
              placeholder={"Тел.номер"}
              register={{
                ...register("name1", { required: "name" }),
              }}
              alert={errors.name1?.message}
              value={watchedFiles?.name1 || ""}
            />
          </GlobalForm>
          <ListItem name={"hssse"} tel={"(90) 123-45-67"} />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
