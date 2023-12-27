import GlobalForm from '../../ui/global-form'


export default function ClientPage() {
    return (
        <div>
            <GlobalForm
                page={"client"}
                table={["Клиент", "Тел.номер", "Действия"]}
            />
        </div>
    )
}
