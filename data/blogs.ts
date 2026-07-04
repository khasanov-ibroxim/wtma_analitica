import type {StaticImageData} from "next/image";
import blog_0_0 from "@/assets/blog/blog_0_0.jpg"
import blog_1_0 from "@/assets/blog/blog_1_0.jpg"
import blog_2_0 from "@/assets/blog/blog_2_0.jpg"

// Blog content turlari
export type BlogContentType = "text" | "image" | "heading" | "list";

export interface BlogContentBlock {
    type: BlogContentType;
    content?: string;
    src?: StaticImageData | string;
    alt?: string;
    items?: string[];
    level?: 2 | 3 | 4;
}

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    heroImage: StaticImageData | string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    content: BlogContentBlock[];
}

// Blog ma'lumotlari (demo)
export const blogPosts: BlogPost[] = [
    {
        id: "00",
        title: "Конфликт «родственники vs менеджеры»",
        description: "Одна из самых болезненных тем в узбекском бизнесе — и особенно в текстиле.\n",
        heroImage: blog_0_0,
        author: "Tex Area Analytics",
        date: "2026-07-01",
        readTime: "",
        category: "Аналитика",
        tags: ["текстиль", "рынок", "тренды"],
        content: [
            {
                type: "text",
                content: `Когда фабрика растёт, появляется команда. Появляются профессиональные менеджеры. И вместе с этим появляется конфликт, который никто не озвучивает вслух:`
            },

            {
                type: "text",
                content: `Родственники часто внутри бизнеса “по умолчанию”.
Не потому что сильнее.
А потому что свои.`
            },
            {
                type: "heading",
                content: "Технологическая трансформация",
                level: 2
            },
            {
                type: "text",
                content: "Внедрение цифровых технологий и автоматизации производственных процессов меняет структуру издержек и повышает конкурентоспособность предприятий на мировом рынке."
            },
            {
                type: "list",
                items: [
                    "Автоматизация производственных линий",
                    "Внедрение AI для оптимизации процессов",
                    "Цифровизация цепочек поставок",
                    "Устойчивое производство и экология"
                ]
            },
            {
                type: "text",
                content: "Данные тренды формируют новую архитектуру мировой текстильной индустрии, требующую от участников рынка гибкости и готовности к изменениям."
            }
        ]
    },
    {
        id: "01",
        title: `Выставки, которые не дали ни одного клиента — почему так происходит`,
        description: `«Выставка не дала ни одного клиента». Любимая фраза фабрик после −30 000$ бюджета.`,
        heroImage: blog_1_0,
        author: "Tex Area Analytics",
        date: "2026-06-28",
        readTime: "6 мин",
        category: "Индекс хлопка",
        tags: ["хлопок", "цены", "рынок"],
        content: [
            {
                type: "text",
                content: "Второй квартал 2026 года характеризуется умеренной волатильностью на мировом рынке хлопка. Ценовые изменения определяются комплексом факторов, включая погодные условия в ключевых регионах производства."
            },
            {
                type: "heading",
                content: "Региональная динамика",
                level: 2
            },
            {
                type: "text",
                content: "Основные производители демонстрируют различную динамику урожайности, что напрямую влияет на мировые котировки и экспортную активность."
            },
            {
                type: "text",
                content: "Логистические факторы продолжают оказывать давление на формирование конечной стоимости сырья для текстильных производителей."
            }
        ]
    },
    {
        id: "02",
        title: "Что фабрики не учитывают, открывая свой магазин",
        description: `Главная ошибка №0 (стратегическая) “У нас есть товар → значит, можно открыть магазин.”`,
        heroImage: blog_2_0,
        author: "Tex Area Analytics",
        date: "2026-06-20",
        readTime: "10 мин",
        category: "Экспертиза",
        tags: ["экспорт", "центральная азия", "стратегия"],
        content: [
            {
                type: "text",
                content: "Текстильные производители Центральной Азии активно развивают экспортные направления, формируя конкурентные преимущества на основе доступа к сырью и оптимизации производственных издержек."
            },
            {
                type: "heading",
                content: "Ключевые рынки сбыта",
                level: 2
            },
            {
                type: "list",
                items: [
                    "Европейский союз — основной рынок высокомаржинальной продукции",
                    "Российская Федерация — стабильный партнёр региона",
                    "Турция — транзитный и производственный хаб",
                    "Китай — крупнейший потребитель хлопкового сырья"
                ]
            },
            {
                type: "heading",
                content: "Конкурентные преимущества",
                level: 2
            },
            {
                type: "text",
                content: "Региональные производители формируют устойчивые цепочки поставок, используя близость к источникам сырья и развитие транспортной инфраструктуры."
            }
        ]
    }
];

export function getBlogById(id: string): BlogPost | undefined {
    return blogPosts.find((post) => post.id === id);
}

export function getAllBlogIds(): string[] {
    return blogPosts.map((post) => post.id);
}

export function getBlogsByCategory(category: string): BlogPost[] {
    return blogPosts.filter((post) => post.category === category);
}

export function getRecentBlogs(limit: number = 3): BlogPost[] {
    return [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
}
