export const clothes = {
  name: "ОДЕЖДА",
  image: "img/menu-icons/clothes.png",
  list: [
    {
      _id: "1",
      type: "КОСТЮМЫ И ТОЛСТОВКИ",
      arr: [
        {
          _id: "c-1",
          name: "Парадные костюмы",
          host: "clothes/parad",
        },
        {
          _id: "c-2",
          name: "Трикотажные костюмы",
          host: "clothes/knitted",
        },
        // {
        //   _id: "c-3",
        //   name: "Футеровые костюмы",
        //   host: "clothes/footy",
        // },
        {
          _id: "c-4",
          name: "Бомберы",
          host: "clothes/bomber",
        },
      ],
    },
    {
      _id: "2",
      type: "УТЕПЛЕНАЯ ОДЕЖДА",
      arr: [
        {
          _id: "c-5",
          name: "Куртки утепленные",
          host: "clothes/jacket",
        },
        {
          _id: "c-6",
          name: "Брюки утепленные",
          host: "clothes/trousers",
        },
        {
          _id: "c-7",
          name: "Жилеты",
          host: "clothes/vest",
        },
      ],
    },
    {
      _id: "3",
      type: "ДРУГАЯ ОДЕЖДА",
      arr: [
        {
          _id: "c-8",
          name: "Футболки Х/Б",
          host: "clothes/tshirt-cotton",
        },
        {
          _id: "c-9",
          name: "Футболки П/Э",
          host: "clothes/tshirt-pe",
        },
        {
          _id: "c-10",
          name: "Футболка - Поло",
          host: "clothes/polo",
        },
        {
          _id: "c-11",
          name: "Шорты",
          host: "clothes/shorts",
        },
      ],
    },
  ],
};
