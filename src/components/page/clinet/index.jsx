import Filter from "../../ui/filter";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function ClientPage() {
  return (
    <>
      <div>
        <Filter page={"client"} />
        <div className="scrollList">
          <TopList array={["Клиент", "Тел.номер", "Действия"]} />
          <ListItem name={"hssse"} tel={"(90) 123-45-67"} />
        </div>
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
