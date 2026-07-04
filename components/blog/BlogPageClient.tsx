"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

interface Props {
    lang: string;
}

export default function BlogPageClient({ lang }: Props) {
    return (
        <main className="blog-page">
            <div className="blog-container">
                <div className="blog-header">
                    <h1 className="blog-main-title">
                        {lang === 'ru' ? 'Блог' : 'Blog'}
                    </h1>
                    <p className="blog-subtitle">
                        {lang === 'ru'
                            ? 'Аналитика, исследования и новости мировой текстильной индустрии'
                            : 'Analytics, research and news of the global textile industry'
                        }
                    </p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/${lang}/blog/${post.id}`}
                            className="blog-card"
                        >
                            <div className="blog-card-image">
                                <Image
                                    src={post.heroImage}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: "cover" }}
                                />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-meta">
                                    <span className="blog-date">
                                        {new Date(post.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h2 className="blog-card-title">{post.title}</h2>
                                <p className="blog-card-description">{post.description}</p>
                                <div className="blog-tags">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="blog-tag">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .blog-page {
                    background: #ffffff;
                    min-height: 100vh;
                    padding-top: 140px;
                    padding-bottom: 80px;
                }

                .blog-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .blog-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .blog-main-title {
                    color: #000;
                    font-size: clamp(36px, 5vw, 56px);
                    font-weight: 700;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.02em;
                }

                .blog-subtitle {
                    color: #666;
                    font-size: clamp(16px, 2vw, 20px);
                    line-height: 1.6;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
                    gap: 32px;
                }

                .blog-card {
                    background: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    text-decoration: none;
                    border: 1px solid #f0f0f0;
                }

                .blog-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
                }

                .blog-card-image {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 10;
                    background: #f5f5f5;
                    overflow: hidden;
                }

                .blog-category {
                    position: absolute;
                    top: 16px;
                    left: 16px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(8px);
                    padding: 6px 14px;
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #000;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .blog-card-content {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .blog-meta {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 12px;
                    font-size: 14px;
                    color: #888;
                }

                .blog-date {
                    font-weight: 500;
                }

                .blog-read-time::before {
                    content: "•";
                    margin-right: 12px;
                }

                .blog-card-title {
                    color: #000;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0 0 12px 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .blog-card-description {
                    color: #555;
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 0 0 16px 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    flex: 1;
                }

                .blog-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                }

                .blog-tag {
                    color: #666;
                    font-size: 13px;
                    font-weight: 500;
                    padding: 4px 10px;
                    background: #f5f5f5;
                    border-radius: 6px;
                    transition: background 0.2s ease;
                }

                .blog-card:hover .blog-tag {
                    background: #eee;
                }

                @media (max-width: 1024px) {
                    .blog-grid {
                        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                        gap: 24px;
                    }
                }

                @media (max-width: 768px) {
                    .blog-page {
                        padding-top: 110px;
                        padding-bottom: 60px;
                    }

                    .blog-header {
                        margin-bottom: 40px;
                    }

                    .blog-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .blog-card-content {
                        padding: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .blog-page {
                        padding-top: 90px;
                        padding-bottom: 50px;
                    }

                    .blog-container {
                        padding: 0 16px;
                    }

                    .blog-header {
                        margin-bottom: 32px;
                    }

                    .blog-card-image {
                        aspect-ratio: 4 / 3;
                    }

                    .blog-category {
                        top: 12px;
                        left: 12px;
                        font-size: 12px;
                        padding: 5px 12px;
                    }

                    .blog-card-content {
                        padding: 18px;
                    }

                    .blog-card-title {
                        font-size: 20px;
                    }

                    .blog-card-description {
                        font-size: 14px;
                    }
                }
            `}</style>
        </main>
    );
}
