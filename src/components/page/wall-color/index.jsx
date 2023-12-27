import GlobalForm from '../../ui/global-form'


export default function WallColerPage() {
    return (
        <div>
            <GlobalForm
                page={"colorWall"}
                table={["Фото", "Название", "Артикул", "Цена", "Индекс сортировки", "Действия"]}
            />
        </div>
    )
}
