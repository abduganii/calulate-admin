import Filter from "../../ui/filter";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function TypeProfilePage() {
    return (
        <>
            <Filter page={'typeprofile'} />
            <div>
                <TopList array={["Название", "Тип расчета", "Индекс сортировки", "Действия"]} />
                <GlobalForm>
                    <p style={{ width: "100%" }}>hello</p>
                    <p style={{ width: "100%" }}>hello</p>
                    <p style={{ width: "100%" }}>hello</p>
                </GlobalForm>
                <ListItem
                    details={["Стандартный (19 мм)", "Стандартные профили", "1"]}
                />
            </div>
            <Pagination totalPages={10} />

        </>
    )
}
