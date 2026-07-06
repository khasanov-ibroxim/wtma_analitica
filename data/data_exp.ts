// src/data/data_exp.ts
// "Ekspertiza markazi" (Expertise Center) uchun barcha maqolalar shu yerda saqlanadi.
// Yangi maqola qo'shish uchun: pastdagi `expertPosts` massiviga yangi obyekt qo'shing.
// `id` — URL slug bo'ladi: /expertise/[id]
//
// RASMLAR: barcha rasmlar src/assets/ ichida saqlanadi va yuqorida import qilinadi
// (StaticImageData). Next/Image buni avtomatik optimallashtiradi, o'lchamini biladi
// va blur-placeholder generatsiya qiladi — shuning uchun width/height berish shart emas.

import { StaticImageData } from "next/image";

// --- Cover / avatar rasmlari ---
import coverCottonMarket from "@/assets/home/home_s2/archive.jpg";
import coverSpinning from "@/assets/home/home_s2/analy.jpg";
import coverSustainable from "@/assets/home/home_s2/dinamic.jpg";
import coverCottonIndex from "@/assets/cottonIndex/cotton.jpg";
import coverLogistics from "@/assets/home/home_s2/indexMarket.jpg";
import coverTrends from "@/assets/home/home_s2/exspertize.jpg";


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
    { id: "analytics", label: "Аналитика рынка" },
    { id: "trends", label: "Мировые тренды" },
    { id: "production", label: "Производство" },
    { id: "technology", label: "Технологии" },
    { id: "logistics", label: "Экспорт и логистика" },
    { id: "sustainability", label: "Устойчивое развитие" },
    { id: "prices", label: "Цены и индексы" },
];

// --- FILTER: ekspertlar ---
export interface Expert {
    id: string;
    name: string;
    role: string;
}

export const experts: Expert[] = [
    { id: "smirnov", name: "Алексей Смирнов", role: "Аналитик по сырьевым рынкам" },
    { id: "ivanova", name: "Мария Иванова", role: "Технолог, эксперт по прядению" },
    { id: "khasanova", name: "Эльвира Хасанова", role: "Эксперт по устойчивому развитию" },
    { id: "kovalev", name: "Дмитрий Ковалев", role: "Финансовый аналитик" },
    { id: "mironov", name: "Сергей Миронов", role: "Эксперт по логистике" },
    { id: "lebedeva", name: "Анна Лебедева", role: "Аналитик моды и трендов" },
];

export const expertPosts: ExpertPost[] = [
    {
        id: "mirovoy-rynok-hlopka-klyuchevye-tendencii-2024-2025",
        title: "Мировой рынок хлопка: ключевые тенденции 2024–2025",
        excerpt:
            "Анализируем баланс спроса и предложения, динамику цен и факторы, влияющие на мировой рынок хлопка.",
        content: [
            {
                type: "paragraph",
                text: "Мировой рынок хлопка в 2024–2025 сельскохозяйственном году продолжает испытывать давление со стороны меняющегося баланса спроса и предложения. Крупнейшие производители — Индия, Китай, США и Бразилия — корректируют посевные площади в ответ на волатильность цен предыдущих сезонов.",
            },
            {
                type: "paragraph",
                text: "Спрос со стороны текстильной промышленности постепенно восстанавливается на фоне роста потребления в Юго-Восточной Азии, однако темпы восстановления остаются неравномерными по регионам.",
            },
            {
                type: "heading",
                text: "Ключевые факторы влияния на цены",
                level: 2,
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Погодные условия в основных регионах выращивания",
                    "Стоимость международной логистики и морских перевозок",
                    "Торговая политика крупнейших импортёров",
                    "Курсы валют стран-экспортёров",
                ],
            },
            {
                type: "paragraph",
                text: "Аналитики TEXARE ANALITICA рекомендуют участникам рынка внимательно следить за отчётами USDA и локальными индексами, чтобы своевременно корректировать закупочную стратегию.",
            },
            {
                type: "quote",
                text: "Волатильность цен на хлопок в ближайшие два сезона будет определяться не столько урожайностью, сколько логистическими издержками.",
                author: "Алексей Смирнов",
            },
        ],
        coverImage: coverCottonMarket,
        publishedAt: "2024-05-20",
        readTime: 6,
        category: "analytics",
        expert: "smirnov",
        seo: {
            metaTitle: "Мировой рынок хлопка 2024–2025 — тенденции и прогноз | TEXARE ANALITICA",
            metaDescription:
                "Разбираем ключевые тенденции мирового рынка хлопка на 2024–2025 год: баланс спроса и предложения, динамика цен, факторы влияния.",
            keywords: ["рынок хлопка", "цены на хлопок", "аналитика хлопка 2024"],
        },
    },
    {
        id: "innovacii-v-pryadenii-chto-menyaet-pravila-igry",
        title: "Инновации в прядении: что меняет правила игры",
        excerpt:
            "Новые технологии в прядильном производстве повышают эффективность и качество пряжи. Разбираем ключевые решения.",
        content: [
            {
                type: "paragraph",
                text: "Прядильная промышленность переживает технологическую трансформацию: автоматизация и цифровой контроль качества становятся стандартом на современных фабриках.",
            },
            {
                type: "paragraph",
                text: "Компакт-прядение и роторные технологии нового поколения позволяют снизить процент обрывности нити и повысить однородность пряжи.",
            },
            {
                type: "list",
                style: "ordered",
                title: "Основные преимущества нового оборудования:",
                items: [
                    "Снижение обрывности нити до 30%",
                    "Повышение однородности пряжи по всей партии",
                    "Сенсоры реального времени для контроля параметров",
                    "Сокращение доли брака на 15–20%",
                ],
            },
            {
                type: "paragraph",
                text: "Эксперты отмечают, что инвестиции в модернизацию прядильного оборудования окупаются за счёт снижения брака и роста производительности линии.",
            },
        ],
        coverImage: coverSpinning,
        publishedAt: "2024-05-16",
        readTime: 5,
        category: "production",
        expert: "ivanova",
        seo: {
            metaTitle: "Инновации в прядении 2024 — новые технологии | TEXARE ANALITICA",
            metaDescription:
                "Какие технологии меняют прядильное производство: компакт-прядение, роторные системы, цифровой контроль качества пряжи.",
            keywords: ["прядение", "технологии текстиля", "производство пряжи"],
        },
    },
    {
        id: "ustoychivoe-proizvodstvo-v-tekstilnoy-otrasli",
        title: "Устойчивое производство в текстильной отрасли",
        excerpt:
            "Как фабрики внедряют экологичные практики и какие стандарты устойчивости становятся новыми требованиями рынка.",
        content: [
            {
                type: "paragraph",
                text: "Устойчивое развитие перестало быть маркетинговым трендом и превратилось в обязательное требование крупных международных байеров.",
            },
            {
                type: "paragraph",
                text: "Фабрики всё активнее внедряют системы замкнутого водооборота, снижение потребления энергии и переработку текстильных отходов.",
            },
            {
                type: "heading",
                text: "Ключевые сертификации",
                level: 2,
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "GOTS — Global Organic Textile Standard",
                    "OEKO-TEX Standard 100",
                    "Higg Index (SAC)",
                    "Bluesign Approved",
                ],
            },
            {
                type: "paragraph",
                text: "Компании, инвестирующие в устойчивые практики сегодня, получают конкурентное преимущество в долгосрочной перспективе.",
            },
        ],
        coverImage: coverSustainable,
        publishedAt: "2024-05-12",
        readTime: 7,
        category: "sustainability",
        expert: "khasanova",
        seo: {
            metaTitle: "Устойчивое производство в текстиле | TEXARE ANALITICA",
            metaDescription:
                "Экологичные практики и стандарты устойчивости в текстильной отрасли: что требуют рынки и байеры в 2024 году.",
            keywords: ["устойчивое развитие", "экология текстиль", "GOTS OEKO-TEX"],
        },
    },
    {
        id: "indeks-hlopka-kak-chitat-i-ispolzovat-v-strategii",
        title: "Индекс хлопка: как читать и использовать в стратегии",
        excerpt: "Понимаем ключевые индексы хлопка и их влияние на закупочные решения.",
        content: [
            {
                type: "paragraph",
                text: "Индексы хлопка, такие как Cotlook A Index, служат ключевым ориентиром для формирования закупочных стратегий на международном рынке.",
            },
            {
                type: "paragraph",
                text: "Понимание методологии расчёта индекса помогает трейдерам точнее интерпретировать краткосрочные колебания цен.",
            },
            {
                type: "paragraph",
                text: "Сопоставление индекса с локальными котировками позволяет выявлять арбитражные возможности и оптимизировать сроки закупок.",
            },
            {
                type: "paragraph",
                text: "Регулярный мониторинг индексов в сочетании с фундаментальным анализом — основа устойчивой закупочной стратегии.",
            },
        ],
        coverImage: coverCottonIndex,
        publishedAt: "2024-05-08",
        readTime: 4,
        category: "prices",
        expert: "kovalev",
        seo: {
            metaTitle: "Индекс хлопка: как читать и использовать | TEXARE ANALITICA",
            metaDescription:
                "Разбираем ключевые индексы хлопка и их влияние на закупочные решения на мировом рынке.",
            keywords: ["индекс хлопка", "Cotlook A Index", "цены на хлопок"],
        },
    },
    {
        id: "logistika-hlopka-v-2024-godu-vyzovy-i-resheniya",
        title: "Логистика хлопка в 2024 году: вызовы и решения",
        excerpt:
            "Рост затрат и геополитические изменения перестраивают логистические цепочки. Что важно учитывать экспортерам.",
        content: [
            {
                type: "paragraph",
                text: "Логистические цепочки поставок хлопка в 2024 году продолжают адаптироваться к росту транспортных издержек и изменению торговых маршрутов.",
            },
            {
                type: "paragraph",
                text: "Геополитическая напряжённость в ключевых транзитных регионах вынуждает экспортёров диверсифицировать логистические маршруты.",
            },
            {
                type: "list",
                style: "ordered",
                title: "Рекомендации экспортёрам:",
                items: [
                    "Диверсифицировать транспортные маршруты",
                    "Формировать резервные логистические планы",
                    "Переходить на электронный документооборот",
                    "Страховать грузы на всех этапах транспортировки",
                ],
            },
            {
                type: "paragraph",
                text: "Цифровизация таможенных процедур и электронный документооборот сокращают сроки прохождения грузов через границы.",
            },
        ],
        coverImage: coverLogistics,
        publishedAt: "2024-05-05",
        readTime: 5,
        category: "logistics",
        expert: "mironov",
        seo: {
            metaTitle: "Логистика хлопка 2024: вызовы и решения | TEXARE ANALITICA",
            metaDescription:
                "Как рост затрат и геополитика меняют логистические цепочки поставок хлопка в 2024 году.",
            keywords: ["логистика хлопка", "экспорт хлопка", "поставки текстиль"],
        },
    },
    {
        id: "tekstilnye-trendy-2024-cveta-faktury-spros",
        title: "Текстильные тренды 2024: цвета, фактуры, спрос",
        excerpt:
            "Обзор глобальных трендов в текстиле, которые определяют выбор коллекций и спрос в новом сезоне.",
        content: [
            {
                type: "paragraph",
                text: "Сезон 2024 года отмечен возвращением натуральных фактур и приглушённой цветовой палитры в глобальных текстильных коллекциях.",
            },
            {
                type: "paragraph",
                text: "Спрос на органический хлопок и переработанные волокна продолжает расти на фоне усиления экологического запроса потребителей.",
            },
            {
                type: "paragraph",
                text: "Бренды всё чаще делают ставку на многослойные фактуры и комбинирование натуральных и технологичных материалов.",
            },
            {
                type: "paragraph",
                text: "Аналитики прогнозируют дальнейший рост интереса к прозрачности происхождения сырья на всех этапах цепочки поставок.",
            },
        ],
        coverImage: coverTrends,
        publishedAt: "2024-05-01",
        readTime: 6,
        category: "trends",
        expert: "lebedeva",
        seo: {
            metaTitle: "Текстильные тренды 2024: цвета и фактуры | TEXARE ANALITICA",
            metaDescription:
                "Глобальные тренды текстильной отрасли 2024 года: цвета, фактуры, спрос на органический хлопок.",
            keywords: ["текстильные тренды", "мода 2024", "тренды текстиль"],
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