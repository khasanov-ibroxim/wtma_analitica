import i1 from "@/assets/analytics/1.jpg"
import {StaticImageData} from "next/image";

export interface AnalyticsFaq {
    q: string;
    a: string;
    defaultOpen?: boolean;
}

export interface AnalyticsStat {
    value: string;
    label: string;
    percent: number;
}

export interface AnalyticsPost {
    id: string;
    title: string;           // Pagehero title
    watermarkText: string;   // Pagehero watermark
    image: StaticImageData;           // Hero image path
    introTitle: string;
    introParagraphs: string[];
    bottomParagraphs: string[];
    stats: AnalyticsStat[];
    faqs: AnalyticsFaq[];
    services: { name: string; href: string }[];
    downloads: { label: string; href: string }[];
}

export const analyticsPosts: AnalyticsPost[] = [
    {
        id: "cotton-market-2024",
        title: "Аналитика рынков",
        watermarkText: "WTMA ANALITIC",
        image: i1,
        introTitle: "Intro Details",
        introParagraphs: [
            "A consultant is a professional who provides expert advice and guidance to individuals or organizations in a particular field or industry. Consultants are typically hired to solve problems, improve performance, or provide specialized knowledge that the client lacks internally.",
            "With 22 years of experience and a proven track record, we have become a trusted partner for startups and high-potential companies seeking to disrupt industries and create lasting impact.",
            "From seed funding to growth-stage investments, we offer tailored solutions that address the unique needs and challenges of each portfolio company. Our track record speaks for itself.",
        ],
        bottomParagraphs: [
            "With 22 years of experience and a proven track record, we have become a trusted partner for startups and high-potential companies seeking to disrupt industries and create lasting impact.",
            "A consultant is a professional who provides expert advice and guidance to individuals or organizations in a particular field or industry. Consultants can work independently or as part of consulting firms.",
        ],
        stats: [
            { value: "75%", label: "Affordable Cost", percent: 75 },
            { value: "34%", label: "Cost Consume",    percent: 34 },
        ],
        faqs: [
            {
                q: "What challenges do businesses face during change?",
                a: "Consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address under-lying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking.",
                defaultOpen: true,
            },
            { q: "How do consultants stay updated on trends?",        a: "" },
            { q: "What ethical rules do they follow?",                a: "" },
            { q: "What are the risks of using consultancy services?", a: "" },
            { q: "Can you share a recent successful project?",        a: "" },
        ],
        services: [
            { name: "Business Insurance", href: "#" },
            { name: "Online Business",    href: "#" },
            { name: "Health Insurance",   href: "#" },
            { name: "Life Insurance",     href: "#" },
            { name: "Auto Insurance",     href: "#" },
            { name: "Home Insurance",     href: "#" },
        ],
        downloads: [
            { label: "Investments",     href: "#" },
            { label: "Online Business", href: "#" },
        ],
    },
    {
        id: "textile-trends-2024",
        title: "Textile Market Trends",
        watermarkText: "WTMA ANALITIC",
        image: i1,
        introTitle: "Market Overview",
        introParagraphs: [
            "The global textile market is undergoing significant transformation driven by sustainability demands and shifting consumer preferences. Key players are adapting their supply chains to meet new regulatory requirements.",
            "Central Asian textile exports have grown 18% year-over-year, with Uzbekistan emerging as a leading supplier of high-quality cotton yarn and finished fabrics.",
            "Investment in modernizing textile production facilities has accelerated, with over $2.4 billion committed across the region in the past fiscal year.",
        ],
        bottomParagraphs: [
            "The outlook for the textile sector remains positive, driven by strong demand from European and Asian markets and continued government support for export-oriented production.",
            "Companies investing in sustainable practices and digital transformation are positioned to capture the highest growth opportunities in the coming years.",
        ],
        stats: [
            { value: "18%", label: "Export Growth",    percent: 18 },
            { value: "62%", label: "Market Share",     percent: 62 },
        ],
        faqs: [
            {
                q: "What drives textile export growth in Central Asia?",
                a: "A combination of competitive labor costs, improved logistics infrastructure, and preferential trade agreements with the EU and neighboring countries have fueled export growth significantly.",
                defaultOpen: true,
            },
            { q: "Which markets are the largest importers?",          a: "" },
            { q: "How is sustainability affecting the industry?",     a: "" },
            { q: "What investment opportunities exist?",              a: "" },
            { q: "How do exchange rates impact profitability?",       a: "" },
        ],
        services: [
            { name: "Market Research",    href: "#" },
            { name: "Export Consulting",  href: "#" },
            { name: "Trade Finance",      href: "#" },
            { name: "Risk Assessment",    href: "#" },
            { name: "Logistics Support",  href: "#" },
            { name: "Compliance Review",  href: "#" },
        ],
        downloads: [
            { label: "Textile Report Q2", href: "#" },
            { label: "Export Guidelines", href: "#" },
        ],
    },
    {
        id: "cotton-index-q3",
        title: "Cotton Index Q3 Report",
        watermarkText: "WTMA ANALITIC",
        image: i1,
        introTitle: "Quarterly Analysis",
        introParagraphs: [
            "The Cotton A Index averaged 89.5 cents per pound during Q3, representing a 7% decline from the previous quarter amid improved crop forecasts in key producing regions.",
            "Weather conditions in the United States, India, and Brazil proved more favorable than anticipated, leading to upward revisions in global production estimates.",
            "Demand from spinning mills in Asia remained subdued as yarn prices continued to face downward pressure from synthetic fiber competition.",
        ],
        bottomParagraphs: [
            "Looking ahead to Q4, analysts expect cotton prices to stabilize as demand from the holiday season picks up and logistical constraints ease.",
            "Traders should monitor currency movements in major importing countries, as exchange rate volatility remains a key risk factor for cotton pricing.",
        ],
        stats: [
            { value: "89¢", label: "Avg. Index Price", percent: 89 },
            { value: "7%",  label: "Quarter Decline",  percent: 7  },
        ],
        faqs: [
            {
                q: "What caused the Q3 price decline?",
                a: "Improved weather in major producing regions led to higher-than-expected harvest forecasts, increasing global supply projections and putting downward pressure on prices.",
                defaultOpen: true,
            },
            { q: "How does synthetic fiber competition affect cotton?", a: "" },
            { q: "Which regions showed the most price volatility?",    a: "" },
            { q: "What is the Q4 price forecast?",                     a: "" },
            { q: "How can mills hedge against price risk?",             a: "" },
        ],
        services: [
            { name: "Price Forecasting",   href: "#" },
            { name: "Hedging Strategies",  href: "#" },
            { name: "Supply Chain Audit",  href: "#" },
            { name: "Crop Monitoring",     href: "#" },
            { name: "Trade Analytics",     href: "#" },
            { name: "Market Reports",      href: "#" },
        ],
        downloads: [
            { label: "Cotton Index Q3 PDF", href: "#" },
            { label: "Price History Data",  href: "#" },
        ],
    },
];

// ID boyicha postni topish
export function getPostById(id: string): AnalyticsPost | undefined {
    return analyticsPosts.find((p) => p.id === id);
}

// Keyingi postni topish (oxirgisi bo'lsa — birinchisiga qaytadi)
export function getNextPost(id: string): AnalyticsPost {
    const idx = analyticsPosts.findIndex((p) => p.id === id);
    const nextIdx = (idx + 1) % analyticsPosts.length;
    return analyticsPosts[nextIdx];
}

// Oldingi postni topish
export function getPrevPost(id: string): AnalyticsPost {
    const idx = analyticsPosts.findIndex((p) => p.id === id);
    const prevIdx = (idx - 1 + analyticsPosts.length) % analyticsPosts.length;
    return analyticsPosts[prevIdx];
}