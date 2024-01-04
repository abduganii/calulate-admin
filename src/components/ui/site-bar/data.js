import {
  AskerIcon,
  CaltIcon,
  ClientIcon,
  OrderIcon,
  SettingIcon,
} from "../icons";

export const SiteBarArr = [
  {
    id: 1,
    text: "Калькулятор",
    link: "/calt",
    quary: "?page=1",
    icon: (e) => CaltIcon({ coler: e }),
    array: [],
  },
  {
    id: 2,
    text: "Заказы",
    link: "/order",
    quary: "?page=1",
    icon: (e) => OrderIcon({ coler: e }),
    array: [],
  },
  {
    id: 3,
    text: "Клиенты",
    link: "/client",
    quary: "?page=1",
    icon: (e) => ClientIcon({ coler: e }),
    array: [],
  },
  {
    id: 4,
    text: "Справочник",
    link: "/ask",
    quary: "?page=1",
    icon: (e) => AskerIcon({ coler: e }),
    array: [
      {
        id: 41,
        text: "Тип профили",
        link: "/ask/type",
        quary: "?page=1",
      },
      {
        id: 42,
        text: "Цвета профиля",
        link: "/ask/coler",
        quary: "?page=1",
      },
      {
        id: 43,
        text: "Цвета стекла",
        link: "/ask/colerWall",
        quary: "?page=1",
      },
      {
        id: 44,
        text: "Дополнительные услуги",
        link: "/ask/moreService",
        quary: "?page=1",
      },
      {
        id: 45,
        text: "Услуги сборки",
        link: "/ask/cervice",
        quary: "?page=1",
      },
      {
        id: 46,
        text: "Типы открывания",
        link: "/ask/opneType",
        quary: "?page=1",
      },
    ],
  },
  {
    id: 5,
    text: "Настройка",
    link: "/setting",
    quary: "?",
    icon: (e) => SettingIcon({ coler: e }),
    array: [],
  },
];
