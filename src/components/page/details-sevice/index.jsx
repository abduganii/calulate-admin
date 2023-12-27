import GlobalForm from '../../ui/global-form'


export default function DetailsServicePage() {
    return (
        <div>
            <GlobalForm
                page={"detailService"}
                table={["Название", "Артикул", "Оператор условия", "Высота фасада", "Цена", "Действия"]}
            />
        </div>
    )
}
