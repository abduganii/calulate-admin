import Filter from "../../ui/filter";
import GlobalForm from "../../ui/form/global-form";
import ListItem from "../../ui/item-list";
import Pagination from "../../ui/pagination";
import TopList from "../../ui/top-list";

export default function WallColerPage() {
    return (

        <>
            <Filter page={'colorWall'} />
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
                    details={["Название", "Артикул", "Цена", "Индекс сортировки",]}
                />
            </div>
            <Pagination totalPages={10} />
        </>
    )
}
