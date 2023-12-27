import GlobalForm from '../../ui/global-form'


export default function TypeProfilePage() {
    return (
        <div>
            <GlobalForm
                page={"typeprofile"}
                table={["Название", "Тип расчета", "Индекс сортировки", "Действия"]}
            />
        </div>
    )
}
