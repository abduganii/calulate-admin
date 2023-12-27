import GlobalForm from '../../ui/global-form'


export default function MoreServicePage() {
    return (
        <div>
            <GlobalForm
                page={"moreService"}
                table={["Фото", "Название", "Артикул", "Цена", "Индекс сортировки", "Действия"]}
            />
        </div>
    )
}
