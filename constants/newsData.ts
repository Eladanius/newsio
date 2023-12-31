export interface IData {
  status: string;
  totalResults: number;
  results: INews[];
  nextPage: string;
}

export interface INews {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: any;
  description: string | null;
  content: string | null;
  pubDate: string;
  image_url: string | null;
  source_id: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
}

const data: IData = {
  status: 'success',
  totalResults: 47,
  results: [
    {
      article_id: '1790378e82207ca558d243a827175ee4',
      title:
        'Российская SR Space испытала камеру сгорания своего ракетного двигателя для геофизической ракеты Nebo',
      link: 'https://3dnews.ru/1094516',
      keywords: ['Технологии и рынок IT. Новости - космос'],
      creator: null,
      video_url: null,
      description:
        'Российская частная космическая компания SR Space (бывшая Success Rockets) впервые провела испытания камеры сгорания своего кислородно-метанового ракетного двигателя РД-1. Он предназначен для геофизической ракеты Nebo, над созданием которой сейчас работают специалисты компании, сообщил «Интерфакс». Источник изображения: SR Space',
      content: null,
      pubDate: '2023-10-16 10:30:00',
      image_url:
        'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094516/368811546_779410570856789_1069797779893432880_n.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: 'e3dcabe00071edee2c480caeaa2f5946',
      title: 'Почти треть персональных данных из ГИС утекает по вине сотрудников госучреждений',
      link: 'https://3dnews.ru/1094507',
      keywords: ['Технологии и рынок IT. Новости'],
      creator: null,
      video_url: null,
      description:
        'Большинство утечек персональных данных из государственных информационных систем (ГИС) связано с неосмотрительностью самих граждан, которым принадлежат эти сведения: если в 2022 году на такие инциденты приходилось 43,6 % случаев, то в 2023-м — 38,6 %. Об этом, как сообщает газета «Ведомости», говорится в исследовании российской компании «СёрчИнформ». В опросе приняли участие 1300 сотрудников госучреждений. К персональным данным аналитики относят ФИО и сведения из различных документов, удостоверяющих личность и статус человека, а также информацию из электронных аккаунтов, факты о состоянии здоровья и личные убеждения/предпочтения, используя которые можно установить личность.',
      content: null,
      pubDate: '2023-10-16 10:15:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094507/hack.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: '990308e6cb3fdf845983d73d26cfcb65',
      title: '«Покупайте на свой страх и риск»: провальная Postal III вернулась в Steam без DRM',
      link: 'https://3dnews.ru/1094515',
      keywords: ['Технологии и рынок IT. Новости - игры'],
      creator: null,
      video_url: null,
      description:
        'Разработчики из американской студии Running With Scissors сообщили о возвращении на прилавки сервиса Steam провального пародийного шутера Postal III, пропавшего из продажи прошлой осенью. Источник изображения: Steam (comnia)',
      content: null,
      pubDate: '2023-10-16 10:11:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094515/00.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: '360f31d01347e7c7df759c93cea7fe88',
      title: 'Samsung организует в Китае выпуск 236-слойной флеш-памяти 3D NAND',
      link: 'https://3dnews.ru/1094514',
      keywords: [
        'Технологии и рынок IT. Новости - модули ОЗУ',
        'карты памяти',
        'флеш-накопители',
        'кардридеры',
      ],
      creator: null,
      video_url: null,
      description:
        'С 2014 года компания Samsung Electronics развивает свою производственную площадку в китайском городе Сиань, и в настоящее время она обеспечивает до 40 % объёмов выпуска микросхем памяти типа 3D NAND этой марки, но лишь в 128-слойном исполнении. Послабления в сфере экспортного контроля США позволят Samsung в следующем году наладить в Китае выпуск более современных 236-слойных микросхем. Источник изображения: Samsung Electronics',
      content: null,
      pubDate: '2023-10-16 09:37:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094514/xian_01.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: '5f975c45ef84b5a16aeb6f172c645680',
      title: 'Minecraft стала первой видеоигрой в истории, достигшей 300 млн проданных копий',
      link: 'https://3dnews.ru/1094511',
      keywords: ['Технологии и рынок IT. Новости - игры'],
      creator: null,
      video_url: null,
      description:
        'Блоковая песочница Minecraft от Mojang, созданная шведским разработчиком Маркусом Перссоном (Markus Persson), и раньше считалась самой продаваемой видеоигрой в истории, а недавно нарастила отрыв от конкурентов. Источник изображений: Mojang Studios',
      content: null,
      pubDate: '2023-10-16 09:35:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094511/00.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: '72039ec9fcb270a5aed8863a7b3ec1e4',
      title: 'Fujitsu запустила ликвидацию российского подразделения',
      link: 'https://3dnews.ru/1094513',
      keywords: ['Технологии и рынок IT. Новости - рынок IT'],
      creator: null,
      video_url: null,
      description:
        'Японский разработчик электроники и поставщик инфраструктурных решений Fujitsu приступил к ликвидации российского подразделения — ООО «Фуджитсу Технолоджи Солюшнз». Согласно данным сервиса Rusprofile, процесс ликвидации российского бизнеса Fujitsu стартовал в августе, однако известно об этом стало только сейчас, сообщил ресурс РБК. Ожидается, что «Фуджитсу Технолоджи Солюшнз» будет ликвидировано в августе 2024 года. Источник изображения: Fujitsu',
      content: null,
      pubDate: '2023-10-16 09:33:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094513/1.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: 'a6858015c0e8c18dd91adc93a322103f',
      title: '«НПП Итэлма» вложит 2 млрд руб. в организацию производства печатных плат для электроники',
      link: 'https://3dnews.ru/1094505',
      keywords: ['Технологии и рынок IT. Новости'],
      creator: null,
      video_url: null,
      description:
        'Научно-производственное предприятие (НПП) «Итэлма», занимающееся разработками электронных компонентов, в том числе для автомобильной отрасли, по сообщению газеты «Коммерсантъ», планирует в 2025–2026 гг. запустить в России производство печатных плат 6-го класса точности. Инвестиции в проект составят приблизительно 2 млрд руб. Уже ведутся проектирование производственной линии и подбор оборудования. Намеченный объём производства составит около 15 млн дм2 плат в год. По оценкам, сейчас в России изготавливается приблизительно 20 млн дм2 печатных плат в год. Основная часть продукции уходит на нужды гособоронзаказа, тогда как в гражданском сегменте отечественных плат не хватает. В частности, потребность производителей автоэлектроники в российских изделиях по итогам 2022 года оценивалась в 4 млн дм2, а к 2026-му может составить 10 млн дм2.',
      content: null,
      pubDate: '2023-10-16 08:21:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094505/board.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: '4b17357bcb183f516a98c434672318d7',
      title: 'В России обвалились продажи легальных видеоигр — виноват рост цен и серый импорт',
      link: 'https://3dnews.ru/1094509',
      keywords: ['Технологии и рынок IT. Новости - Новости сети'],
      creator: null,
      video_url: null,
      description:
        'Издание РБК со ссылкой на данные Русской Ассоциации Дистрибьюторов и Импортёров Видеоигр (она же Р.А.Д.И. Видеоигр) раскрыло продажи официально ввезённых в Россию игр за первое полугодие 2023 года. Источник изображений: Steam',
      content: null,
      pubDate: '2023-10-16 08:14:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094509/00.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: '40137dc855f687752a9cd32f14d8904a',
      title: 'Tokyo Electron разработала оборудование для выпуска 400-слойной флеш-памяти 3D NAND',
      link: 'https://3dnews.ru/1094508',
      keywords: [
        'Технологии и рынок IT. Новости - модули ОЗУ',
        'карты памяти',
        'флеш-накопители',
        'кардридеры',
      ],
      creator: null,
      video_url: null,
      description:
        'Для производства памяти типа 3D NAND, подразумевающей использование пространственной компоновки с вертикальными соединениями между слоями в чипах, требуется специальное оборудование, и до сих пор рынок полностью контролировала американская компания Lam Research. Японской Tokyo Electron удалось разработать более производительный метод выпуска таких микросхем, который позволит увеличить количество слоёв памяти до 400 штук. Источник изображения: Tokyo Electron',
      content:
        'Для производства памяти типа 3D NAND, подразумевающей использование пространственной компоновки с вертикальными соединениями между слоями в чипах, требуется специальное оборудование, и до сих пор рынок полностью контролировала американская компания Lam Research. Японской Tokyo Electron удалось разработать более производительный метод выпуска таких микросхем, который позволит увеличить количество слоёв памяти до 400 штук. Источник изображения: Tokyo Electron Как поясняет Nikkei Asian Review , в июне этого года компания Tokyo Electron представила свой метод травления отверстий для формирования вертикальных межсоединений в чипах памяти 3D NAND. Выпуск специализированного оборудования позволит Tokyo Electron бросить вызов американской Lam Research, а её клиентам предоставит возможность повысить производительность линий по выпуску памяти данного типа. По крайней мере, новый подход к травлению отверстий позволяет повысить производительность в два с половиной раза по сравнению с существующим. Более того, разработанная японской компанией технология оказывает меньше пагубного воздействия на окружающую среду. По прогнозам Tokyo Electron, через два или три года клиенты компании смогут начать выпуск памяти типа 3D NAND с 400 слоями. Сегмент оборудования для травления отверстий в слоях микросхем 3D NAND сейчас является крупнейшим на рынке оборудования для травления кремниевых пластин. По прогнозам японского поставщика, ёмкость этого сегмента к 2027 году увеличится в четыре раза до $2 млрд по сравнению с текущим годом. В прошлом фискальном году Tokyo Electron продала оборудования для травления на сумму не более $3,9 млрд, что соответствует примерно четверти её совокупной выручки. С помощью новой технологии компания рассчитывает как минимум удвоить профильную выручку. На рынке систем травления в полупроводниковой отрасли, чьи обороты в прошлом году достигли $20 млрд, компания Tokyo Electron довольствовалась вторым местом и долей в 25 %, тогда как лидером оставалась американская Lam Research, контролирующая половину сегмента. За последние пять лет Tokyo Electron на 77 % увеличила расходы на исследования и разработки, поэтому создание новой технологии травления отверстий в чипах 3D NAND стало закономерным итогом такой инвестиционной политики. В этом году компания рассчитывает потратить на исследования и разработки рекордные $1,34 млрд, даже несмотря на ожидаемое снижение прибыли. Компания уже использует искусственный интеллект для разработки новых материалов, применяемых в производстве. К 2025 году производители памяти начнут активно вкладываться в модернизацию своих предприятий, и Tokyo Electron на этом этапе получить возможность укрепить свои рыночные позиции.',
      pubDate: '2023-10-16 06:51:00',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094508/tokyo_01.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
    {
      article_id: 'c6f4c5db3409615e3d371eb7cfd43f62',
      title:
        'Веном, Песочный человек и личные переживания «паучков»: вышел релизный трейлер Marvel’s Spider-Man 2',
      link: 'https://3dnews.ru/1094499',
      keywords: ['Технологии и рынок IT. Новости - игры'],
      creator: null,
      video_url: null,
      description:
        'Разработчики из Insomniac Games опубликовали релизный трейлер супергеройского боевика Marvel’s Spider-Man 2. Ролик представляет собой «нарезку» из геймплейных кадров и кинематографических вставок. Источник изображения: Sony Interactive Entertainment',
      content: null,
      pubDate: '2023-10-16 06:29:04',
      image_url: 'https://3dnews.ru/assets/external/illustrations/2023/10/16/1094499/spider_2_title.jpg',
      source_id: '3dnews',
      source_priority: 1507637,
      country: ['russia'],
      category: ['technology'],
      language: 'russian',
    },
  ],
  nextPage: '1697437744714471578',
};

export default data;
