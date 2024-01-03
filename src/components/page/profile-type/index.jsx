import Filter from "../../ui/filter";
import AddInput from "../../ui/form/add-input";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function TypeProfilePage() {
  return (
    <>
      <div>
        <Filter page={"typeprofile"} />
        <div className="scrollList">
          <TopList
            array={["Название", "Тип расчета", "Индекс сортировки", "Действия"]}
          />
          <GlobalForm>
            <AddInput
              type={"text"}
              placeholder={"Название"}
            />
            <AddInput
              type={"select"}
              placeholder={"Выберите тип расчета"}
              value={'Выберите тип расчета'}
            />
            <AddInput
              type={"number"}
              placeholder={"count"}
            />
          </GlobalForm>
          <ListItem
            details={["Стандартный (19 мм)", "Стандартные профили", "1"]}
          />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
