"use client"
import React, { useState } from "react";
import Image from "next/image";
import type { AnalyticsItem } from "@/data/analytics";

interface Props {
    item: AnalyticsItem;
}

const AnalyticsDetailClient = ({ item }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TODO: bu yerga real yuborish logikasi (Telegram / Google Sheets / API) qo'shiladi
            await new Promise((resolve) => setTimeout(resolve, 800));
            setIsSubmitted(true);
            setForm({ firstName: "", lastName: "", phone: "", message: "" });
            setTimeout(() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
            }, 1800);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsSubmitted(false);
    };

    return (
        <main className="bg-white min-h-screen pt-[90px] pb-14 sm:pt-[110px] sm:pb-20 md:pt-[140px] md:pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Sarlavha va breadcrumb */}
                <h1 className="text-black font-bold text-[26px] sm:text-4xl lg:text-[44px] m-0">
                    {item.title}
                </h1>
                <p className="text-black text-sm mt-2 mb-6 sm:mb-10">
                    {item.breadcrumb}
                </p>

                {/* Asosiy grid: preview / matn */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 lg:gap-10 items-center">
                    {/* Chap/yuqori — asosiy preview */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[3/2] bg-black rounded-xl md:rounded-2xl overflow-hidden">
                        <Image
                            src={item.coverImage}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 900px) 100vw, 600px"
                            priority
                        />
                        <span className="absolute right-2.5 bottom-2.5 sm:right-3.5 sm:bottom-3.5 bg-white rounded-lg px-2.5 py-1.5 sm:px-3.5 text-xs sm:text-[13px] font-semibold text-gray-900 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                            {item.period}
                        </span>
                    </div>

                    {/* O'ng/pastki — matn va yuklab olish */}
                    <div>
                        <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-[36px] mt-0 mb-5 sm:mb-[22px]">
                            {item.title}
                        </h2>

                        {item.description.map((para, idx) => (
                            <p key={idx} className="text-black text-[15px] leading-[1.7] mb-4 sm:mb-[18px]">
                                {para}
                            </p>
                        ))}

                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block w-full sm:w-auto mt-2 px-8 py-3.5 sm:py-3.5 rounded-[10px] text-[15px] font-semibold text-white bg-black cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-px text-center"
                        >
                            Скачать
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={closeModal}
                    />

                    {/* Modal card */}
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 fade-in duration-200 max-h-[90vh] overflow-y-auto">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Закрыть"
                            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-4">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-black mb-1">Заявка отправлена!</h3>
                                <p className="text-sm text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">
                                    Скачать отчёт
                                </h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    Заполните форму, и мы вышлем вам полную версию отчёта
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-xs font-medium text-gray-600 mb-1.5">
                                                Имя
                                            </label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                required
                                                value={form.firstName}
                                                onChange={handleChange}
                                                placeholder="Иван"
                                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-xs font-medium text-gray-600 mb-1.5">
                                                Фамилия
                                            </label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                required
                                                value={form.lastName}
                                                onChange={handleChange}
                                                placeholder="Иванов"
                                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-gray-600 mb-1.5">
                                            Телефон
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+998 90 123 45 67"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-600 mb-1.5">
                                            Сообщение
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Ваш комментарий..."
                                            className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition-colors focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg bg-black py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                                    >
                                        {isSubmitting ? "Отправка..." : "Отправить"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default AnalyticsDetailClient;