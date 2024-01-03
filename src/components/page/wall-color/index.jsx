import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import UploadInput from "../../ui/form/upload-input";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function WallColerPage() {
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
          <GlobalForm>
            <UploadInput type={"text"} placeholder={"Название"} />
            <AddInput type={"text"} placeholder={"Название"} />
            <AddInput type={"text"} placeholder={"Артикул"} />
            <AddInput type={"text"} placeholder={"Цена"} />
            <AddInput type={"text"} placeholder={"Индекс сортировки"} />
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
