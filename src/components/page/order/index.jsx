import Filter from "../../ui/filter";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function OrderPage() {
  return (
    <>
      <div>
        <Filter page={"order"} />
        <TopList
          array={[
            "ID",
            "Дата",
            "Клиент",
            "Тел.номер",
            "Профиль",
            "Cтекла",
            "Доп. услуги",
            "Сумма",
            "Статус заказа",
            "Действия",
          ]}
        />
        <ListItem
          id={"7272"}
          time={"time"}
          name={"hssse"}
          tel={"(90) 123-45-67"}
          details={["Узкий (19 мм) Бронзовый", "Пепельное", "Закалка стекла"]}
          price={"783.03 $"}
          status={"В ожидании"}
          statusChange={(e) => console.log(e)}
        />
      </div>
      <Pagination totalPages={10} />
    </>
  );
}
