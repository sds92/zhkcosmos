const copyright: string =
  '© <a href="https://roboweb.site/" target="_blank" rel="noopener noreferrer">RoboWeb Team</a> все права защищены';
const politics: string = 'Политика обработки персональных данных';

type Contacts = {
  PHONE: string;
};
export const CONTACTS: Contacts = {
  PHONE: '+7 495 100 00 00',
};
type Slider = SliderContent[];
export type SliderContent = {
  title: string;
  subTitle: string;
  price: string;
  image: string;
  adds: {
    leftText: string;
    rightText: {
      title: string;
      text: string;
    };
  };
};
export const SLIDER: Slider = [
  {
    title: 'Жилищный комплекс <br/>"Космос"',
    subTitle: '2-комнатная квартира в 19 этажном <br/>доме',
    price: '8 146 250 руб.',
    image: 'main01.webp',
    adds: {
      leftText: 'Мы предлагаем <br/>нашим клиентам, <br/>что-то особенное',
      rightText: {
        title: 'Недвижимость для вас!',
        text: 'Мы предлагаем нашим клиентам высочайший уровень свободы в выборе и процессе покупки квартиры вашей мечты',
      },
    },
  },
  {
    title: 'Жилищный комплекс <br/>"Космос"',
    subTitle: '2-комнатная квартира в 19 этажном <br/>доме',
    price: '8 146 250 руб.',
    image: 'main02.webp',
    adds: {
      leftText: 'Вместе открываем <br/>двери в будущее!',
      rightText: {
        title: 'Недвижимость для вас!',
        text: 'Мы предлагаем нашим клиентам высочайший уровень свободы в выборе и процессе покупки квартиры вашей мечты',
      },
    },
  },
];

export type AboutHomePage<
  T = {
    title: string;
    text?: string | string[];
    video?: string[];
    images?: string[];
    blocks?: {
      title: string;
      text: string;
    }[];
  }
> = Array<T>;

export const ABOUT_HOMEPAGE: AboutHomePage = [
  {
    title: 'О проекте',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    ],
    images: ['example01.webp'],
  },
  {
    title: 'Экскурсия',
    video: ['example02.webp'],
  },
  {
    title: 'О компании',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    ],
    images: ['example03.webp', 'example04.webp', 'example05.webp'],
    blocks: [
      { title: '10 домов', text: 'В комплексе' },
      { title: '27 Га', text: 'Территория ЖК' },
      { title: '5 Минут', text: 'До большого ТЦ' },
    ],
  },
];

export const ABOUT_PAGE: {
  title: string;
  titleBgImage: boolean;
  sections: {
    title?: string;
    text: string[];
    images: string[];
  }[];
} = {
  title: 'О комплексе',
  titleBgImage: true,
  sections: [
    {
      text: [
        'Шаг в новую жизнь.',
        'Отличная артитектура, в отличном районе!',
        'Красивая архитектура ЖК “Космос” производит неизгладимое впечатление. Прекрасный стиль и дизайн подчёркивает вкус жителей города. <br/> ЖК “Космос” — для ценителей комфорта и прекрасного!',
        'Жилая застройка многоэтажными жилыми <br/> домами со встроенными помещениями.',
        'ЖК «Космос» – новое место для жизни, в котором свободно и комфортно. Отличная экология, удобное расположение, максимальный комфорт! Жилой комплекс в гармонии с природой. Микрорайон окружен густым хвойным лесом, а рядом большое, чистое и живописное Пироговское водохранилище. Остается только наслаждаться!',
      ],
      images: ['about01.webp', 'about02.webp'],
    },
    {
      title: 'ПРЕИМУЩЕСТВА <br/> Космоса',
      text: ['Пожарные извещатели', 'Безопасность', 'Скоростные лифты', 'Шумозащита', 'Кондиционирование'],
      images: ['about03.webp', 'about04.webp', 'about05.webp', 'about06.webp', 'about07.webp'],
    },
  ],
};

export type News = {
  title: string;
  image: string;
};

export const NEWS: News = {
  title: 'Новости',
  image: 'news01.webp',
};

export type Sales = {
  title: string;
  image: string;
};

export const SALES: Sales = {
  title: 'Акции',
  image: 'sales01.webp',
};

export type Mortgage = {
  title: string;
  bottomRow: {
    title: string;
    items: string[];
  };
};

export const MORTGAGE: Mortgage = {
  title: 'Ипотека',
  bottomRow: {
    title: 'Приобрести жильё в ипотеку - это просто!',
    items: [
      'Выберите <br/>квартиру',
      'Расчитайте <br/>кредит',
      'Отправьте <br/>заявку',
      'Оформите <br/>сделку',
      'Въезжайте в <br/>вашу квартиру',
    ],
  },
};

export type FotoGallery = {
  title: string;
};

export const FOTOGALLERY: FotoGallery = {
  title: 'Фотогалерея',
};

export const VIRTUAL_TOUR: {
  title: string;
  frame: {
    title: string;
    toolTip: [string];
    image: string;
  };
} = {
  title: 'Виртуальный тур',
  frame: {
    title: 'Виртуальная прогулка',
    toolTip: ['Выберите точку на плане, <br/> чтобы осмотреться внутри панорамы'],
    image: 'virtual.webp',
  },
};

export const APARTMENTS_SM: {
  title: string;
} = {
  title: 'Квартиры',
};

type FilterRooms = '1' | '2' | '3' | '4+';
type FilterType = 'range' | 'check' | 'select';

export const APARTMENTS_LG: {
  title: string;
  filters: {
    name: string;
    title: string;
    type: FilterType;
    values: number[] | FilterRooms[] | string[];
    placeholders: number[] | FilterRooms[] | string[];
  }[];
  categories: string[];
  text: string;
} = {
  title: 'Квартиры в продаже',
  filters: [
    {
      name: 'price',
      title: 'Стоимость',
      type: 'range',
      values: [0, 0],
      placeholders: [0, 1000000],
    },
    {
      name: 'square',
      title: 'Площадь',
      type: 'range',
      values: [0, 0],
      placeholders: [0, 1000],
    },
    {
      name: 'rooms',
      title: 'Комнат',
      type: 'check',
      values: ['1', '2', '3', '4+'] as FilterRooms[],
      placeholders: ['1'] as FilterRooms[],
    },
    {
      name: 'floor',
      title: 'Этаж',
      type: 'select',
      values: [],
      placeholders: ['Любой этаж'],
    },
    {
      name: 'building',
      title: 'Корпус',
      type: 'select',
      values: [],
      placeholders: ['Выбрать корпус'],
    },
    {
      name: 'sort',
      title: 'Сортировать',
      type: 'select',
      values: ['Цена по убыванию', 'Цена по возрастанию'],
      placeholders: ['Цена по убыванию'],
    },
  ],
  categories: ['Квартиры', 'Квартиры с отделкой', 'Коммерческие нежилые', 'Машиноместа'],
  text: 'Тем, кто рассматривает вариант объединения нескольких квартир или ценит авторские проекты интерьеров, подойдут квартиры в состоянии shell&core (без отделки). Такие квартиры предложены Вашему вниманию следующие квартиры. <br/> Покупателям квартир без отделки предлагается типовой дизайн-проект, призванный облегчить выбор дизайнерских и планировочных решений.',
};

export const FOOTER: {
  title: string;
  workingHoars: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  iframe: string;
  copyright: string;
  politics: string;
} = {
  title: 'Офис продаж',
  workingHoars: 'Время работы: 09:00 - 21:00',
  address: 'г. Москва, ул. Улица',
  phone: '+7 (415) 100 00 00',
  email: 'sales@.com',
  image: 'footer01.webp',
  iframe: 'https://api-maps.yandex.ru/frame/v1/-/CCUYiXRD-B',
  copyright: copyright,
  politics: politics,
};

export const NAVIGATION: {
  title: string[];
  menuTitle: string;
  menuItems: string[][];
  accountTitle: string;
  accountItems: string[][];
  copyright: string;
  politics: string;
  madein: string;
  images: string[];
} = {
  title: ['Жилой комплекс', '“Космос”'],
  menuTitle: 'На главную',
  menuItems: [
    ['О комплексе', '/about'],
    ['Галерея', '/gallery'],
    ['Квартиры', '/apartments'],
    ['Ипотека', '/ipoteka'],
    ['Ход работы', '/progress'],
    ['Акции и новости', '/sales'],
    ['Расположение', '/location'],
    ['Контакты', '/contacts'],
  ],
  accountTitle: 'Личный кабинет:',
  accountItems: [
    ['Профиль', 'Account'],
    ['Избранное', 'Like'],
    ['Сделки', 'Deals'],
    ['Документы', 'Documents'],
    ['Выход', 'Quit'],
  ],
  copyright: copyright,
  politics: politics,
  madein:
    'Сайт сделан в <br/><a style="color: #52D8AF" href="https://roboweb.site/" target="_blank" rel="noopener noreferrer">RoboWeb Team</a>',
  images: ['Navigation01.webp', 'Navigation02.webp', 'Navigation03.webp'],
};

export const GALLERY: {
  title: string;
  sections: {
    title: string;
    images: string[];
  }[];
} = {
  title: 'Галерея',
  sections: [
    {
      title: 'Благоустройство',
      images: ['blag01.webp'],
    },
    {
      title: 'Интерьеры',
      images: ['interior01.webp', 'interior02.webp', 'interior03.webp'],
    },
  ],
};
