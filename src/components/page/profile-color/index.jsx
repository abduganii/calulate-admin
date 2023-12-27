import GlobalForm from '../../ui/global-form'


export default function ColerProfilePage() {
    return (
        <div>
            <GlobalForm
                page={"coler"}
                table={["Название", "Индекс сортировки", "Действия"]}
            />
        </div>
    )
}
