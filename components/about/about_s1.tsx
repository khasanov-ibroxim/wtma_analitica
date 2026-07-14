"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Home,
    Globe2,
    RefreshCw,
    ShieldCheck,
    FileText,
    LineChart,
    PieChart,
    Presentation,
    ClipboardList,
    Target,
    Users,
    Briefcase,
    Megaphone,
    Shirt,
    Handshake,
    Landmark,
    Share2,
    BookOpen,
    PlayCircle,
    GraduationCap,
    Globe,
    UsersRound,
} from "lucide-react";
import aboutHeader from "@/assets/about/about_header.jpg"
import logo1 from "@/assets/about/wtma texarea 1.png"
import logo2 from "@/assets/about/wtma texarea 2.png"
import logo3 from "@/assets/about/logo_3.png"
import logo4 from "@/assets/about/logo4.png"
import logo5 from "@/assets/about/wtma texarea 5.png"


const trustPoints = [
    {
        icon: Globe2,
        title: "Глобальный охват",
        desc: "Анализируем рынки более 80 стран",
    },
    {
        icon: RefreshCw,
        title: "Актуальность",
        desc: "Ежедневное обновление данных и показателей",
    },
    {
        icon: ShieldCheck,
        title: "Надежность",
        desc: "Проверенные источники и методология",
    },
    {
        icon: FileText,
        title: "Удобство",
        desc: "Понятные отчеты и Excel-форматы",
    },
];

const processSteps = [
    {
        icon: LineChart,
        title: "Данные",
        desc: "Собираем и анализируем актуальные рыночные данные со всего мира.",
    },
    {
        icon: PieChart,
        title: "Аналитика",
        desc: "Проводим глубокий анализ рынков, трендов и конкурентов.",
    },
    {
        icon: Presentation,
        title: "Инсайты",
        desc: "Выявляем возможности и риски для вашего бизнеса.",
    },
    {
        icon: ClipboardList,
        title: "Рекомендации",
        desc: "Предоставляем практические рекомендации для принятия решений.",
    },
    {
        icon: Target,
        title: "Результат",
        desc: "Помогаем принимать верные стратегические решения и достигать целей.",
    },
];

const approachSteps = [
    { num: "01", title: "Сбор данных" },
    { num: "02", title: "Анализ рынка" },
    { num: "03", title: "Исследование конкурентов" },
    { num: "04", title: "Изучение покупателей" },
    { num: "05", title: "Выявление возможностей" },
    { num: "06", title: "Рекомендации и стратегия" },
];

const audience = [
    { icon: Users, text: "Владельцы и руководители текстильных предприятий" },
    { icon: Shirt, text: "Производители тканей, пряжи и готовой одежды" },
    { icon: Briefcase, text: "Экспортные и коммерческие директора" },
    { icon: Handshake, text: "Инвесторы и партнеры" },
    { icon: Megaphone, text: "Маркетинговые отделы" },
    { icon: Landmark, text: "Государственные и отраслевые организации" },
];

const ecosystem = [logo1 , logo2, logo3 , logo4 , logo5];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white mt-20">

            {/* Breadcrumb */}
            <div className="mx-auto max-w-7xl px-6 pt-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Home className="h-4 w-4" />
                    <span>Главная</span>
                    <span>›</span>
                    <span className="text-slate-700">О нас</span>
                </div>
            </div>

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 pt-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
                            O Tex Area Analytics
                        </h1>
                        <p className="mt-6 max-w-xl text-slate-600">
                            Tex Area Analytics — аналитическая платформа для текстильной и
                            швейной промышленности. Мы превращаем рыночные данные в
                            практические выводы и инструменты, которые помогают принимать
                            стратегические решения и развивать бизнес на глобальном рынке.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                            {trustPoints.map(({ icon: Icon, title, desc }) => (
                                <div key={title}>
                                    <Icon className="h-7 w-7 text-slate-800" strokeWidth={1.75} />
                                    <h3 className="mt-3 text-sm font-semibold text-slate-900">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl">
                        <Image
                            src={aboutHeader}
                            alt="Tex Area Analytics dashboard"
                            width={1200}
                            height={800}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Process strip */}
            <section className="mx-auto mt-16 max-w-7xl px-6">
                <div className="grid grid-cols-2 gap-8 rounded-2xl bg-slate-50 px-8 py-10 sm:grid-cols-3 lg:grid-cols-5">
                    {processSteps.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
                            <h3 className="mt-4 text-sm font-semibold text-slate-900">
                                {title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-500">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission / Approach / Audience */}
            <section className="mx-auto mt-8 max-w-7xl px-6 pb-16">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.3fr_1fr]">
                    {/* Mission */}
                    <div className="rounded-2xl bg-blue-50/70 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-900 shadow-sm">
              <Target className="h-5 w-5" strokeWidth={1.75} />
            </span>
                        <h3 className="mt-5 text-lg font-bold text-slate-900">
                            Наша миссия
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            Помочь текстильным предприятиям принимать решения не на основе
                            предположений, а на основе аналитики, данных и объективной
                            информации о мировом рынке.
                        </p>
                    </div>

                    {/* Approach */}
                    <div className="rounded-2xl bg-amber-50/70 p-8">
                        <h3 className="text-lg font-bold text-center text-slate-900">Наш подход</h3>
                        <div className="mt-8 flex flex-col items-center gap-y-6">
                            <div className="flex items-start justify-center gap-x-4">
                                {approachSteps.slice(0, 3).map((step, idx, arr) => (
                                    <div key={step.num} className="flex items-center">
                                        <div className="flex flex-col items-center text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300 bg-white text-sm font-semibold text-orange-500">
                        {step.num}
                    </span>
                                            <span className="mt-2 w-16 text-[11px] font-medium leading-tight text-slate-700">
                        {step.title}
                    </span>
                                        </div>
                                        {idx < arr.length - 1 && (
                                            <span className="mx-1 mt-[-16px] hidden h-px w-6 bg-orange-200 sm:block" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-start justify-center gap-x-4">
                                {approachSteps.slice(3, 6).map((step, idx, arr) => (
                                    <div key={step.num} className="flex items-center">
                                        <div className="flex flex-col items-center text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300 bg-white text-sm font-semibold text-orange-500">
                        {step.num}
                    </span>
                                            <span className="mt-2 w-16 text-[11px] font-medium leading-tight text-slate-700">
                        {step.title}
                    </span>
                                        </div>
                                        {idx < arr.length - 1 && (
                                            <span className="mx-1 mt-[-16px] hidden h-px w-6 bg-orange-200 sm:block" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-center leading-relaxed text-slate-600">
                            Каждое исследование проходит по единой системе, что обеспечивает
                            глубину анализа и практическую ценность для вашего бизнеса.
                        </p>
                    </div>

                    {/* Audience */}
                    <div className="rounded-2xl bg-slate-900 p-8 text-white">
                        <h3 className="text-lg font-bold">Для кого мы работаем</h3>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                            {audience.map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-start gap-3">
                                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" strokeWidth={1.75} />
                                    <span className="text-sm leading-snug text-slate-200">
                    {text}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem strip */}
            <section className="mx-auto max-w-7xl px-6 pb-16">
                <div className="flex flex-col items-center gap-8 rounded-2xl bg-slate-900 px-8 py-8 text-white lg:flex-row lg:justify-between">
                    <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Share2 className="h-5 w-5 text-orange-400" strokeWidth={1.75} />
            </span>
                        <div>
                            <h3 className="font-semibold">Часть экосистемы WTMA.uz</h3>
                            <p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-300">
                                Tex Area Analytics интегрирована с другими платформами
                                экосистемы и профессиональным сообществом, создавая единое
                                пространство для роста бизнеса.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3 lg:flex lg:gap-10">
                        {ecosystem.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                    <Image src={item} alt={"dssa"} width={100}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}