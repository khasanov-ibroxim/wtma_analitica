"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

interface Props {
    post: BlogPost;
    recentPosts: BlogPost[];
    lang: string;
}

export default function BlogDetailClient({ post, recentPosts, lang }: Props) {
    return (
        <main className="blog-detail-page">
            <article className="blog-article">
                <div className="blog-article-container">
                    {/* Hero Section */}
                    <div className="blog-hero">
                        <div className="blog-hero-content">
                            <div className="blog-breadcrumb">
                                <Link href={`/${lang}/blog`} className="breadcrumb-link">
                                    {lang === 'ru' ? 'Блог' : 'Blog'}
                                </Link>
                                <span className="breadcrumb-separator">/</span>
                                <span className="breadcrumb-current">{post.category}</span>
                            </div>

                            <h1 className="blog-hero-title">{post.title}</h1>

                            <div className="blog-hero-meta">
                                <span className="blog-hero-author">{post.author}</span>
                                <span className="meta-separator">•</span>
                                <span className="blog-hero-date">
                                    {new Date(post.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="meta-separator">•</span>
                                <span className="blog-hero-read-time">{post.readTime}</span>
                            </div>
                        </div>

                        <div className="blog-hero-image">
                            <Image
                                src={post.heroImage}
                                alt={post.title}
                                fill
                                priority
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="blog-content">
                        {post.content.map((block, index) => {
                            switch (block.type) {
                                case "text":
                                    return (
                                        <p key={index} className="content-text">
                                            {block.content}
                                        </p>
                                    );

                                case "heading":
                                    const HeadingTag = `h${block.level || 2}` as keyof React.JSX.IntrinsicElements;
                                    return (
                                        <HeadingTag key={index} className={`content-heading level-${block.level || 2}`}>
                                            {block.content}
                                        </HeadingTag>
                                    );

                                case "image":
                                    return (
                                        <div key={index} className="content-image-wrapper">
                                            <div className="content-image">
                                                <Image
                                                    src={block.src || ""}
                                                    alt={block.alt || ""}
                                                    fill
                                                    sizes="(max-width: 800px) 100vw, 800px"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            {block.alt && (
                                                <span className="content-image-caption">{block.alt}</span>
                                            )}
                                        </div>
                                    );

                                case "list":
                                    return (
                                        <ul key={index} className="content-list">
                                            {block.items?.map((item, i) => (
                                                <li key={i} className="content-list-item">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    );

                                default:
                                    return null;
                            }
                        })}
                    </div>

                    {/* Tags Section */}
                    <div className="blog-tags-section">
                        <div className="blog-tags-list">
                            {post.tags.map((tag) => (
                                <span key={tag} className="blog-tag">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {recentPosts.length > 0 && (
                <section className="related-posts">
                    <div className="related-container">
                        <h2 className="related-title">
                            {lang === 'ru' ? 'Читайте также' : 'Related Articles'}
                        </h2>
                        <div className="related-grid">
                            {recentPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/${lang}/blog/${relatedPost.id}`}
                                    className="related-card"
                                >
                                    <div className="related-card-image">
                                        <Image
                                            src={relatedPost.heroImage}
                                            alt={relatedPost.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="related-card-content">
                                        <span className="related-category">{relatedPost.category}</span>
                                        <h3 className="related-card-title">{relatedPost.title}</h3>
                                        <p className="related-card-description">{relatedPost.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <style jsx>{`
                .blog-detail-page {
                    background: #ffffff;
                    min-height: 100vh;
                    padding-top: 100px;
                }

                .blog-article-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .blog-hero {
                    margin-bottom: 60px;
                }

                .blog-hero-content {
                    max-width: 800px;
                    margin: 0 auto 40px;
                    text-align: center;
                }

                .blog-breadcrumb {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 24px;
                    font-size: 14px;
                }

                .breadcrumb-link {
                    color: #666;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .breadcrumb-link:hover {
                    color: #000;
                }

                .breadcrumb-separator {
                    color: #ccc;
                }

                .breadcrumb-current {
                    color: #000;
                    font-weight: 600;
                }

                .blog-hero-title {
                    color: #000;
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 700;
                    line-height: 1.2;
                    margin: 0 0 24px 0;
                    letter-spacing: -0.02em;
                }

                .blog-hero-meta {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    color: #666;
                    font-size: 15px;
                }

                .blog-hero-author {
                    font-weight: 600;
                    color: #000;
                }

                .meta-separator {
                    color: #ccc;
                }

                .blog-hero-image {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    border-radius: 20px;
                    overflow: hidden;
                    background: #f5f5f5;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                }

                .blog-content {
                    max-width: 800px;
                    margin: 0 auto 60px;
                }

                .content-text {
                    color: #333;
                    font-size: 18px;
                    line-height: 1.8;
                    margin: 0 0 24px 0;
                }

                .content-heading {
                    color: #000;
                    font-weight: 700;
                    line-height: 1.3;
                    margin: 48px 0 24px 0;
                    letter-spacing: -0.01em;
                }

                .content-heading.level-2 {
                    font-size: clamp(28px, 4vw, 36px);
                }

                .content-heading.level-3 {
                    font-size: clamp(24px, 3.5vw, 30px);
                }

                .content-heading.level-4 {
                    font-size: clamp(20px, 3vw, 24px);
                }

                .content-image-wrapper {
                    margin: 40px 0;
                }

                .content-image {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 10;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #f5f5f5;
                }

                .content-image-caption {
                    display: block;
                    margin-top: 12px;
                    text-align: center;
                    color: #666;
                    font-size: 14px;
                    font-style: italic;
                }

                .content-list {
                    margin: 24px 0;
                    padding-left: 24px;
                }

                .content-list-item {
                    color: #333;
                    font-size: 18px;
                    line-height: 1.8;
                    margin-bottom: 12px;
                }

                .content-list-item::marker {
                    color: #000;
                    font-weight: 600;
                }

                .blog-tags-section {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 32px 0;
                    border-top: 1px solid #eee;
                }

                .blog-tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .blog-tag {
                    color: #666;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 8px 16px;
                    background: #f5f5f5;
                    border-radius: 8px;
                    transition: background 0.2s ease;
                }

                .blog-tag:hover {
                    background: #eee;
                }

                .related-posts {
                    background: #fafafa;
                    padding: 80px 0;
                }

                .related-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .related-title {
                    color: #000;
                    font-size: clamp(28px, 4vw, 36px);
                    font-weight: 700;
                    margin: 0 0 40px 0;
                    text-align: center;
                }

                .related-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 32px;
                }

                .related-card {
                    background: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                }

                .related-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
                }

                .related-card-image {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 10;
                    background: #f5f5f5;
                }

                .related-card-content {
                    padding: 24px;
                }

                .related-category {
                    display: inline-block;
                    color: #666;
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                }

                .related-card-title {
                    color: #000;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0 0 10px 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .related-card-description {
                    color: #555;
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                @media (max-width: 768px) {
                    .blog-detail-page {
                        padding-top: 80px;
                    }

                    .blog-article-container {
                        padding: 0 20px;
                    }

                    .blog-hero {
                        margin-bottom: 40px;
                    }

                    .blog-hero-content {
                        margin-bottom: 24px;
                    }

                    .blog-hero-image {
                        border-radius: 16px;
                        aspect-ratio: 4 / 3;
                    }

                    .content-text,
                    .content-list-item {
                        font-size: 16px;
                    }

                    .content-image {
                        border-radius: 12px;
                    }

                    .related-posts {
                        padding: 60px 0;
                    }

                    .related-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }
                }

                @media (max-width: 480px) {
                    .blog-article-container,
                    .related-container {
                        padding: 0 16px;
                    }

                    .blog-hero-title {
                        margin-bottom: 20px;
                    }

                    .blog-hero-meta {
                        font-size: 14px;
                    }

                    .blog-hero-image {
                        border-radius: 12px;
                    }

                    .content-heading {
                        margin: 36px 0 20px 0;
                    }

                    .content-image-wrapper {
                        margin: 32px 0;
                    }
                }
            `}</style>
        </main>
    );
}
