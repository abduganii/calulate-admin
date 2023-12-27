import Filter from "../../ui/filter";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function ColerProfilePage() {
    return (
        <>
            <Filter page={'coler'} />
            <div>
                <TopList array={["Название", "Индекс сортировки", "Действия"]} />
                <GlobalForm>
                    <p style={{ width: "100%" }}>hello</p>
                    <p style={{ width: "100%" }}>hello</p>
                </GlobalForm>
                <ListItem
                    details={["Черный", "1"]}
                />
            </div>
            <Pagination totalPages={10} />
        </>
    )
}
