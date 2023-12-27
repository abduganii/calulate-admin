import { AskerIcon, CaltIcon, ClientIcon, OrderIcon, SettingIcon } from "../icons";

export const SiteBarArr = [
    {
        id: 1,
        text: 'Калькулятор',
        link: '/calt',
        icon: (e) => CaltIcon({ coler: e }),
        array:[]
    },
    {
        id:2,
        text: 'Заказы',
        link: '/order',
        icon: (e) => OrderIcon({ coler: e }),
        array:[]
    },
    {
        id: 3,
        text: 'Клиенты',
        link: '/client',
        icon: (e) => ClientIcon({ coler: e }),
        array:[]
    },
    {
        id: 4,
        text: 'Справочник',
        link: '/ask',
        icon: (e) => AskerIcon({ coler: e }),
        array: [
            {
                id: 41,
                text: 'Тип профили',
                link: '/ask/type',
            },
            {
                id: 42,
                text: 'Цвета профиля',
                link: '/ask/coler',
            },
            {
                id: 43,
                text: 'Цвета стекла',
                link: '/ask/colerWall',
            },
            {
                id: 44,
                text: 'Дополнительные услуги',
                link: '/ask/moreService',
            },
              {
                id: 45,
                text: 'Услуги сборки',
                link: '/ask/cervice',
            },
            {
                id: 46,
                text: 'Типы открывания',
                link: '/ask/opneType',
            },
        ]
    },
    {
        id: 5,
        text: 'Настройка',
        link: '/setting',
        icon: (e) => SettingIcon({ coler: e }),
        array:[]
    }
]