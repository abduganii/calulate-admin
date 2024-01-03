import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function DetailsServicePage() {
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
          <GlobalForm>
            <AddInput type={"text"} placeholder={"Название"} />
            <AddInput type={"text"} placeholder={"Артикул"} />
            <AddInput type={"text"} placeholder={"Оператор условия"} />
            <AddInput type={"text"} placeholder={"Высота фасада"} />
            <AddInput type={"text"} placeholder={"Цена"} />
          </GlobalForm>
          <ListItem
            details={["Большие", "Sborka extra updated", "<=", "Glass", "9.00 $"]}
          />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
