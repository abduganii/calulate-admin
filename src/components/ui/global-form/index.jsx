import Filter from '../filter'
import ListItem from '../item-list'
import TopList from '../top-list'



export default function GlobalForm({ page, table = [], url, method, }) {
    return (
        <>
            <Filter page={page} />
            <div>
                <TopList array={table} />
                {
                    page == 'order' && <ListItem
                        id={"7272"}
                        time={"time"}
                        name={"hssse"}
                        tel={"(90) 123-45-67"}
                        details={["Узкий (19 мм) Бронзовый", "Пепельное", "Закалка стекла"]}
                        price={"783.03 $"}
                        status={'В ожидании'}
                        statusChange={(e) => console.log(e)}
                    />
                }
                {
                    page == 'client' && <ListItem

                        name={"hssse"}
                        tel={"(90) 123-45-67"}

                    />
                }
                {
                    page == "typeprofile" && <ListItem

                        details={["Стандартный (19 мм)", "Стандартные профили", "1"]}

                    />
                }
                {
                    page == "coler" && <ListItem

                        details={["Черный", "1"]}

                    />
                }
                {
                    page == "colorWall" && <ListItem
                        img={"empty"}
                        details={["Прозрачное", "Glass 1", "9.00 $", "1"]}

                    />
                }
                {
                    page == "moreService" && <ListItem
                        img={"empty"}
                        details={["Прозрачное", "Glass 1", "9.00 $", "1"]}

                    />
                }
                {
                    page == "detailService" && <ListItem

                        details={["Большие", "Sborka extra updated", "<=", "Glass", "9.00 $"]}

                    />
                }
                {
                    page == "opneType" && <ListItem
                        img={"empty"}
                        details={["Прозрачное", "Glass 1", "1"]}

                    />
                }
            </div>
        </>
    )
}
