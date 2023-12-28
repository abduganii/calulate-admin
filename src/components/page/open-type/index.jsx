import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import UploadInput from "../../ui/form/upload-input";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function OpenTypePage() {
  return (
    <>
      <div>
        <Filter page={"opneType"} />
        <TopList
          array={[
            "Фото",
            "Название",
            "Тип расчета",
            "Индекс сортировки",
            "Действия",
          ]}
        />
        <GlobalForm>
          <UploadInput type={"text"} placeholder={"Название"} />
          <AddInput type={"text"} placeholder={"Название"} />
          <AddInput type={"text"} placeholder={"Тип расчета"} />
          <AddInput type={"text"} placeholder={"Индекс сортировки"} />
        </GlobalForm>
        <ListItem img={"empty"} details={["Прозрачное", "Glass 1", "1"]} />
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
