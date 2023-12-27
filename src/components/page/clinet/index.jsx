import Filter from "../../ui/filter";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function ClientPage() {
    return (
        <>

            <Filter page={"client"} />
            <div>
                <TopList array={["Клиент", "Тел.номер", "Действия"]} />
                <ListItem
                    name={"hssse"}
                    tel={"(90) 123-45-67"}

                />
            </div>
            <Pagination totalPages={10} />
        </>
    )
}
