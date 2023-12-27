import Filter from "../../ui/filter";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function MoreServicePage() {
    return (
        <>
            <Filter page={'moreService'} />
            <div>
                <TopList array={["Фото", "Название", "Артикул", "Цена", "Индекс сортировки", "Действия"]} />
                <GlobalForm>
                    <p style={{ minWidth: "100px" }}>hello</p>
                    <p style={{ width: "100%" }}>hello</p>
                    <p style={{ width: "100%" }}>hello</p>
                    <p style={{ width: "100%" }}>hello</p>
                    <p style={{ width: "100%" }}>hello</p>
                </GlobalForm>
                <ListItem
                    img={"empty"}
                    details={["Прозрачное", "Glass 1", "9.00 $", "1"]}

                />
            </div>
            <Pagination totalPages={10} />
        </>
    )
}
