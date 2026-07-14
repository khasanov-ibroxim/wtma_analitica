

import { StaticImageData } from "next/image";

import blog_0_0 from "@/assets/data_exp/blog_0_0.jpg"
import blog_1_0 from "@/assets/data_exp/blog_1_0.jpg"
import blog_2_0 from "@/assets/data_exp/blog_2_0.jpg"


// --- CONTENT BLOCKS: har bir maqola kontenti shu bloklardan tarkib topadi ---
// Yangi blok qo'shish uchun: pastga yangi variant qo'shib, ContentRenderer
// komponentida unga mos JSX qo'shiladi.

export interface ParagraphBlock {
    type: "paragraph";
    text: string;
}

export interface HeadingBlock {
    type: "heading";
    text: string;
    level?: 2 | 3; // default: 2
}

export interface ImageBlock {
    type: "image";
    src: StaticImageData;
    alt: string;
    caption?: string;
}

export interface ListBlock {
    type: "list";
    style: "unordered" | "ordered"; // ul yoki ol
    title?: string; // ixtiyoriy sarlavha, ro'yxatdan oldin
    items: string[];
}

export interface QuoteBlock {
    type: "quote";
    text: string;
    author?: string;
}

export type ContentBlock =
    | ParagraphBlock
    | HeadingBlock
    | ImageBlock
    | ListBlock
    | QuoteBlock;

export interface ExpertPost {
    id: string; // unikal slug, masalan: "mirovoy-rynok-hlopka-2024-2025"
    title: string;
    excerpt: string; // qisqa tavsif (kartochkada ko'rinadi)
    content: ContentBlock[]; // to'liq maqola: paragraf, rasm, ro'yxat va h.k. aralash
    coverImage: StaticImageData;
    publishedAt: string; // ISO format: "2024-05-20"
    readTime?: number; // daqiqalarda, ixtiyoriy
    category: string; // categories massividagi id (filter uchun)
    expert: string; // experts massividagi id (filter uchun)
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string[];
    };
}

// --- FILTER: kategoriyalar ---
// Yangi kategoriya qo'shish uchun shu massivga obyekt qo'shing va
// tegishli maqola(lar)ning `category` maydoniga id'sini yozing.
export interface Category {
    id: string;
    label: string;
}

export const categories: Category[] = [
    { id: "exhibitions", label: "Выставки" },
    { id: "human", label: "Кадры" },
    { id: "market", label: "Рынок" },
    { id: "manufacturing", label: "Производство" },
    { id: "technology", label: "Технологии" },
    { id: "retail", label: "Ритейл" },

];

// --- FILTER: ekspertlar ---
export interface Expert {
    id: string;
    name: string;
    role: string;
}

export const experts: Expert[] = [
    { id: "shamsiddin", name: "Шамсиддин Екубов" , role: "Основатель World Textile Marketing Agency" },
];

export const expertPosts: ExpertPost[] = [
    {
        id: "konflikt-rodstvenniki-vs-menedzhery",
        title: "Конфликт «родственники vs менеджеры»",
        excerpt:
            "Одна из самых болезненных тем в узбекском текстильном бизнесе: что происходит, когда семейные договорённости сталкиваются с профессиональным управлением.",
        content: [
            {
                type: "paragraph",
                text: "Одна из самых болезненных тем в узбекском бизнесе — и особенно в текстиле.",
            },
            {
                type: "paragraph",
                text: "Когда фабрика растёт, появляется команда. Появляются профессиональные менеджеры. И вместе с этим появляется конфликт, который никто не озвучивает вслух: родственники vs управленцы.",
            },
            {
                type: "paragraph",
                text: "Родственники часто внутри бизнеса «по умолчанию». Не потому что сильнее. А потому что свои. Менеджеры — потому что нужны результаты: системы, экспорт, контракты.",
            },
            {
                type: "heading",
                text: "Где начинается напряжение",
                level: 2,
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Менеджер строит процесс — родственник может отменить решение одним звонком",
                    "Менеджер отвечает за KPI — родственник отвечает «перед семьёй»",
                    "Менеджер работает по правилам — родственник работает по доверию",
                ],
            },
            {
                type: "paragraph",
                text: "В итоге страдает не атмосфера. Страдает бизнес. Потому что покупателю всё равно, кто чей племянник. Ему важно, чтобы заказ был выполнен вовремя. Экспорт не работает на семейных договорённостях. Он работает на управлении.",
            },
            {
                type: "quote",
                text: "Родственники — это не проблема. Проблема — отсутствие ролей.",
            },
            {
                type: "paragraph",
                text: "Если человек в компании — у него должна быть ответственность, зона контроля и измеримый результат. Иначе сильные менеджеры уходят, а фабрика остаётся в ручном режиме.",
            },
            {
                type: "paragraph",
                text: "Семейный бизнес может быть сильным. Но только тогда, когда он становится системой, а не кругом доверия.",
            },
        ],
        coverImage: blog_0_0,
        publishedAt: "2026-07-08",
        readTime: 4,
        category: "human",
        expert: "shamsiddin",
        seo: {
            metaTitle: "Конфликт «родственники vs менеджеры» в текстильном бизнесе | TEXARE ANALITICA",
            metaDescription:
                "Почему конфликт между родственниками и профессиональными менеджерами тормозит рост текстильных фабрик и как его решить.",
            keywords: ["семейный бизнес", "управление фабрикой", "менеджмент текстиль"],
        },
    },
    {
        id: "vystavki-kotorye-ne-dali-ni-odnogo-klienta",
        title: "Выставки, которые не дали ни одного клиента — почему так происходит",
        excerpt:
            "«Выставка не дала ни одного клиента» — любимая фраза фабрик после −30 000$ бюджета. Проблема не в выставке, проблема в иллюзиях.",
        content: [
            {
                type: "paragraph",
                text: "«Выставка не дала ни одного клиента». Любимая фраза фабрик после −30 000$ бюджета. Только проблема не в выставке. Проблема в иллюзиях.",
            },
            {
                type: "paragraph",
                text: "Фабрика едет на выставку как на событие: стенд, баннер, кофе, красивые каталоги. Байер приходит на выставку как в лабораторию отбора. Вы — праздник. Он — фильтр. И угадайте, кто выигрывает.",
            },
            {
                type: "paragraph",
                text: "Байер не покупает. Он вычёркивает. За 3 дня он проходит 25–40 поставщиков. В его shortlist попадут 5%, максимум 7%.",
            },
            {
                type: "heading",
                text: "Что реально ищет байер",
                level: 2,
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Цену, которая вписывается в его полку",
                    "Объём, который вы реально потянете",
                    "Сертификаты, без которых товар не зайдёт",
                    "Маржу, которая его устроит",
                    "Позиционирование, которое продаётся",
                ],
            },
            {
                type: "paragraph",
                text: "Если вы не соответствуете хотя бы по двум пунктам — вы не «перспектива». Вы «спасибо, мы свяжемся». И не свяжутся.",
            },
            {
                type: "heading",
                text: "Самообман №1: «Мы качественные, значит купят»",
                level: 3,
            },
            {
                type: "paragraph",
                text: "Качество — это гигиена, а не преимущество. На международном рынке качеством никого не удивишь. Без чёткого позиционирования, понимания сегмента, расчёта под конкретный рынок и конкурентного анализа — вы просто ещё один «мы делаем всё». Рынок не покупает «всё». Рынок покупает конкретику.",
            },
            {
                type: "heading",
                text: "Самообман №2: «Подготовимся за пару дней»",
                level: 3,
            },
            {
                type: "paragraph",
                text: "Выставка за $20–40 тысяч. И подготовка за 3 дня. Это даже не наивность. Это управленческая безответственность. Подготовка начинается минимум за 3 месяца.",
            },
            {
                type: "list",
                style: "ordered",
                title: "Что должно входить в подготовку:",
                items: [
                    "Анализ страны",
                    "Анализ конкурентов",
                    "Расчёт цены под их рынок, а не под ваши желания",
                    "Проверка требований к сертификации",
                    "Назначение встреч ДО выставки",
                    "Чёткое понимание, зачем мы туда едем",
                ],
            },
            {
                type: "paragraph",
                text: "Ехать без анализа рынка — это как отгружать партию товара, не зная, нужен ли он вообще. Это не отсутствие клиентов. Это отсутствие стратегии.",
            },
            {
                type: "heading",
                text: "Чек-лист — момент истины",
                level: 2,
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Проходим ли мы по цене?",
                    "Даём ли мы нужные объёмы?",
                    "Есть ли обязательные сертификаты?",
                    "Понимаем ли мы экономику байера?",
                    "Есть ли чёткое УТП?",
                ],
            },
            {
                type: "paragraph",
                text: "Если хотя бы 30–40% ответов «нет» — вам рано на выставку. 80% результата выставки создаётся до её начала. 20% — на стенде.",
            },
            {
                type: "quote",
                text: "Рынок не сложный. Он просто не прощает самоуверенность.",
            },
        ],
        coverImage: blog_1_0,
        publishedAt: "2026-07-08",
        readTime: 7,
        category: "exhibitions",
        expert: "shamsiddin",
        seo: {
            metaTitle: "Почему выставки не дают клиентов фабрикам | TEXARE ANALITICA",
            metaDescription:
                "Разбираем, почему участие в международных выставках не приносит заказы и что нужно сделать до поездки, чтобы получить результат.",
            keywords: ["выставки текстиль", "экспорт", "поиск байеров"],
        },
    },
    {
        id: "chto-fabriki-ne-uchityvayut-otkryvaya-svoy-magazin",
        title: "Что фабрики не учитывают, открывая свой магазин",
        excerpt:
            "«У нас есть товар — значит, можно открыть магазин». Нет. Товар ≠ бренд ≠ спрос ≠ продажи. Почему B2B-логика ломается в рознице.",
        content: [
            {
                type: "heading",
                text: "Главная ошибка №0 (стратегическая)",
                level: 2,
            },
            {
                type: "paragraph",
                text: "«У нас есть товар → значит, можно открыть магазин». Нет. Товар ≠ бренд ≠ спрос ≠ продажи. B2B-логика ломается в рознице.",
            },
            {
                type: "heading",
                text: "Ключевые ошибки, которые почти гарантируют провал",
                level: 2,
            },
            {
                type: "list",
                style: "ordered",
                items: [
                    "Открывать магазин, не понимая, кому ты продаёшь — местный покупатель не равен закупщику сети, мотивация покупки другая: эмоция, стиль, идентичность",
                    "Продавать складские остатки как «бренд» — товар, сделанный под чужую ТМ, ценовой сегмент и ЦА, в рознице превращается в «странную одежду без понятного смысла»",
                    "Отсутствие ДНК бренда — нет ответа на вопросы «кто мы», «для кого мы», «почему нас должны выбрать»",
                    "Ценообразование из B2B-логики — в рознице цена это восприятие, клиент платит не за ткань, а за образ",
                    "Локация «где дешевле» — экономия на аренде и трафике оборачивается отсутствием потока",
                    "Магазин без сценария — есть вешалки, товар и касса, но нет логики движения, фокусных моделей и апселла",
                    "Персонал как просто «продавец» — в B2C нужен человек-бренд, а не менеджер по контрактам",
                ],
            },
            {
                type: "paragraph",
                text: "Каждая из этих ошибок по отдельности снижает конверсию. Вместе они превращают открытие магазина в дорогой эксперимент без результата.",
            },
            {
                type: "heading",
                text: "Что нужно сделать ДО открытия (минимум)",
                level: 2,
            },
            {
                type: "list",
                style: "ordered",
                items: [
                    "Мини-анализ рынка (2–3 недели, не полгода): кто покупает одежду в этом городе, средний чек, какие бренды живут",
                    "Решить: это бренд или временный розничный проект — худшая стратегия делать вид, что бренд, но жить как распродажа",
                    "Упаковать ДНК даже в упрощённом виде: позиционирование в одной фразе, ЦА как один человек, ценовой коридор, визуальный код",
                    "Отсечь 30–40% ассортимента — в рознице меньше значит лучше, фокус продаёт",
                    "Протестировать концепцию до полноценного магазина: pop-up, корнер, временная точка или онлайн с офлайн точкой выдачи",
                ],
            },
            {
                type: "quote",
                text: "Самая большая ошибка B2B-фабрики в рознице — думать, что она продаёт одежду. На самом деле она продаёт смысл.",
            },
        ],
        coverImage: blog_2_0,
        publishedAt: "2026-07-08",
        readTime: 6,
        category: "retail",
        expert: "shamsiddin",
        seo: {
            metaTitle: "Что фабрики не учитывают, открывая свой магазин | TEXARE ANALITICA",
            metaDescription:
                "Ключевые ошибки B2B-фабрик при выходе в розницу: от отсутствия портрета клиента до ценообразования и локации.",
            keywords: ["розница текстиль", "открытие магазина", "бренд одежды"],
        },
    },
];

// --- Helper funksiyalar (loyihadagi getPostById / getNextPost / getPrevPost patterniga mos) ---

export function getAllExpertPosts(): ExpertPost[] {
    return [...expertPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostById(id: string): ExpertPost | undefined {
    return expertPosts.find((post) => post.id === id);
}

export function getNextPost(id: string): ExpertPost | undefined {
    const sorted = getAllExpertPosts();
    const index = sorted.findIndex((post) => post.id === id);
    if (index === -1 || index === sorted.length - 1) return undefined;
    return sorted[index + 1];
}

export function getPrevPost(id: string): ExpertPost | undefined {
    const sorted = getAllExpertPosts();
    const index = sorted.findIndex((post) => post.id === id);
    if (index <= 0) return undefined;
    return sorted[index - 1];
}

export function getExpertById(id: string): Expert | undefined {
    return experts.find((e) => e.id === id);
}

export function getCategoryById(id: string): Category | undefined {
    return categories.find((c) => c.id === id);
}

// Sidebar filter uchun: har bir kategoriya nechta maqolada ishlatilganini hisoblaydi
export function getCategoriesWithCounts(): (Category & { count: number })[] {
    return categories.map((c) => ({
        ...c,
        count: expertPosts.filter((p) => p.category === c.id).length,
    }));
}

// Sidebar filter uchun: har bir ekspertning nechta maqolasi borligini hisoblaydi
export function getExpertsWithCounts(): (Expert & { count: number })[] {
    return experts.map((e) => ({
        ...e,
        count: expertPosts.filter((p) => p.expert === e.id).length,
    }));
}