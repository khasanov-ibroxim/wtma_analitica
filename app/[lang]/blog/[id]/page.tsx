import React from "react";
import { notFound } from "next/navigation";
import { getBlogById, getAllBlogIds, getRecentBlogs } from "@/data/blogs";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ lang: string; id: string }>;
}

export async function generateStaticParams() {
    return getAllBlogIds().map((id) => ({ id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const post = getBlogById(id);

    if (!post) {
        return {
            title: 'Blog Not Found',
        };
    }

    return {
        title: `${post.title} | Tex Area Analytics`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

const BlogDetailPage = async ({ params }: PageProps) => {
    const { lang, id } = await params;
    const post = getBlogById(id);

    if (!post) {
        notFound();
    }

    const recentPosts = getRecentBlogs(3).filter(p => p.id !== id);

    return <BlogDetailClient post={post} recentPosts={recentPosts} lang={lang} />;
};

export default BlogDetailPage;
