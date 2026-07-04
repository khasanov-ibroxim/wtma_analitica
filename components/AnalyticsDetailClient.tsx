"use client"
import React from "react";
import Image from "next/image";
import type { AnalyticsItem } from "@/data/analytics";

interface Props {
    item: AnalyticsItem;
}

const AnalyticsDetailClient = ({ item }: Props) => {
    return (
        <main className="analytics-page">
            <div className="analytics-container">
                {/* Sarlavha va breadcrumb */}
                <h1 className="analytics-title">{item.title}</h1>
                <p className="analytics-breadcrumb">{item.breadcrumb}</p>

                {/* Asosiy grid: preview / matn */}
                <div className="analytics-grid">
                    {/* Chap/yuqori — asosiy preview (taqdimot muqovasi nisbatida) */}
                    <div className="analytics-preview">
                        <Image
                            src={item.coverImage}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 900px) 100vw, 600px"
                            priority
                        />
                        <span className="analytics-period">{item.period}</span>
                    </div>

                    {/* O'ng/pastki — matn va yuklab olish */}
                    <div className="analytics-content">
                        <h2 className="analytics-heading">{item.title}</h2>

                        {item.description.map((para, idx) => (
                            <p key={idx} className="analytics-paragraph">
                                {para}
                            </p>
                        ))}

                        {/* public/downloads/<downloadFile> ichidagi faylni yuklaydi */}
                        <a href={`/downloads/${item.downloadFile}`} download className="analytics-download-btn">
                            Скачать
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .analytics-page {
                    background: #fff;
                    min-height: 100vh;
                    padding-top: 140px;
                    padding-bottom: 80px;
                }

                .analytics-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .analytics-title {
                    color: #000;
                    font-size: clamp(26px, 4vw, 44px);
                    font-weight: 700;
                    margin: 0;
                }

                .analytics-breadcrumb {
                    color: #000;
                    font-size: 14px;
                    margin-top: 8px;
                    margin-bottom: 40px;
                }

                .analytics-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 1fr;
                    gap: 40px;
                    align-items: center;
                }

                .analytics-preview {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 3 / 2;
                    background: #000;
                    border-radius: 16px;
                    overflow: hidden;
                }

                .analytics-period {
                    position: absolute;
                    right: 14px;
                    bottom: 14px;
                    background: #ffffff;
                    border-radius: 8px;
                    padding: 6px 14px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #111;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                .analytics-heading {
                    color: #000;
                    font-size: clamp(24px, 3vw, 36px);
                    font-weight: 700;
                    margin-top: 0;
                    margin-bottom: 22px;
                }

                .analytics-paragraph {
                    color: #000;
                    font-size: 15px;
                    line-height: 1.7;
                    margin-bottom: 18px;
                }

                .analytics-download-btn {
                    display: inline-block;
                    margin-top: 10px;
                    padding: 14px 32px;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 600;
                    color: #ffffff;
                    text-decoration: none;
                    background: #000;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }

                .analytics-download-btn:hover {
                    opacity: 0.92;
                    transform: translateY(-1px);
                }

                /* Planshet: ustunlar torayadi, matn hali yonida */
                @media (max-width: 1024px) {
                    .analytics-grid {
                        gap: 28px;
                    }
                }

                /* Kichik planshet / katta telefon: ustma-ust joylashadi */
                @media (max-width: 860px) {
                    .analytics-page {
                        padding-top: 110px;
                    }
                    .analytics-grid {
                        grid-template-columns: 1fr;
                    }
                    .analytics-preview {
                        aspect-ratio: 3 / 2;
                    }
                }

                /* Mobil */
                @media (max-width: 480px) {
                    .analytics-page {
                        padding-top: 90px;
                        padding-bottom: 56px;
                    }
                    .analytics-container {
                        padding: 0 16px;
                    }
                    .analytics-breadcrumb {
                        margin-bottom: 24px;
                    }
                    .analytics-grid {
                        gap: 20px;
                    }
                    .analytics-preview {
                        border-radius: 12px;
                        aspect-ratio: 4 / 3;
                    }
                    .analytics-period {
                        right: 10px;
                        bottom: 10px;
                        padding: 5px 11px;
                        font-size: 12px;
                    }
                    .analytics-download-btn {
                        width: 100%;
                        text-align: center;
                        padding: 14px 0;
                    }
                }
            `}</style>
        </main>
    );
};

export default AnalyticsDetailClient;