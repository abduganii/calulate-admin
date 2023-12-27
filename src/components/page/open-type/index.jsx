import GlobalForm from '../../ui/global-form'


export default function OpenTypePage() {
    return (
        <div>
            <GlobalForm
                page={"opneType"}
                table={["Фото", "Название", "Тип расчета", "Индекс сортировки", "Действия"]}
            />
        </div>
    )
}
