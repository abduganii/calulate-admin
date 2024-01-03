import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function ColerProfilePage() {
  return (
    <>
      <div>
        <Filter page={"coler"} />
        <div className="scrollList">
          <TopList array={["Название", "Индекс сортировки", "Действия"]} />
          <GlobalForm>
            <AddInput
              type={"text"}
              placeholder={"Название"}
            />
            <AddInput
              type={"number"}
              placeholder={"count"}
            />
          </GlobalForm>
          <ListItem details={["Черный", "1"]} />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
