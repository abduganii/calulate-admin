
import GlobalForm from '../../ui/global-form'

export default function OrderPage() {
    return (
        <div>
            <GlobalForm
                page={"order"}
                table={["ID", "Дата", "Клиент", "Тел.номер", "Профиль", "Cтекла", "Доп. услуги", "Сумма", "Статус заказа", "Действия"]}
            />
        </div>
    )
}
