import Filter from "../../ui/filter";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function DetailsServicePage() {
  return (
    <>
      <div>
        <Filter page={"detailService"} />
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
          <p style={{ width: "100%" }}>hello</p>
          <p style={{ width: "100%" }}>hello</p>
          <p style={{ width: "100%" }}>hello</p>
          <p style={{ width: "100%" }}>hello</p>
          <p style={{ width: "100%" }}>hello</p>
        </GlobalForm>
        <ListItem
          details={["Большие", "Sborka extra updated", "<=", "Glass", "9.00 $"]}
        />
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
