import React from "react";

type IconProps = { className?: string };

export const DownloadIcon = ({ className }: IconProps) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const PresentationIcon = ({ className }: IconProps) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16M6 4v11a2 2 0 0 0 2 2h1l-1.5 3M18 4v11a2 2 0 0 1-2 2h-1l1.5 3M9.5 11.5 12 9l2 2 3-3"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const PopulationIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.2 14.3c2.4.2 4.3 2 4.3 4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const GdpIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19V9m5 10V5m5 14v-7m5 7V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 19h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const ImportIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v6m0 0-2.4-2.4M12 14l2.4-2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const SuppliersIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c0-2.8 2-4.8 4.5-4.8s4.5 2 4.5 4.8M13.8 19c.2-2.3 1.7-3.9 3.7-3.9 1.9 0 3.5 1.6 3.5 3.9"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const CategoriesIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4 5 7v13h14V7l-3-3M8 4h8M8 4a2 2 0 0 0 4 1.5A2 2 0 0 0 16 4"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CurrencyIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.5v9M9.5 9.8h3.8a1.7 1.7 0 0 1 0 3.4H9.5m0 0h4.5a1.7 1.7 0 0 1 0 3.4H9.5"
              stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const LanguageIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h9M8 4v2c0 4-2 8-6 9.5M6 10c1.3 2.4 3.4 4 6 4.8"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m14 20 3.5-9L21 20M15.3 17h4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CalendarIcon = ({ className }: IconProps) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const MarketSizeIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19V13m5 6V9m5 10V5m5 14v-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m4 12 5-5 5 3 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ImportAnalysisIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v12m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="17" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.7" />
    </svg>
);

export const ExportAnalysisIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21V9m0 0 4 4m-4-4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="3" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.7" />
    </svg>
);

export const CompetitiveIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    </svg>
);

export const PricingIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 12.4 12.6 20.3a2 2 0 0 1-2.8 0l-6.1-6.1a2 2 0 0 1 0-2.8L11.6 3.5 20.5 4l.5 8.4Z"
              stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="1.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
);

export const DemandIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const SalesChannelsIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="6" width="17" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 10.5h17M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const SwotIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="5" cy="5" r="1.6" fill="currentColor" />
        <circle cx="19" cy="5" r="1.6" fill="currentColor" />
        <circle cx="5" cy="19" r="1.6" fill="currentColor" />
        <circle cx="19" cy="19" r="1.6" fill="currentColor" />
    </svg>
);

export const OpportunityIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21c-3.3 0-4-2-4-4h8c0 2-.7 4-4 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 17V13.5M8.5 10a3.5 3.5 0 1 1 7 0c0 2-1.5 2.6-2 3.5H10.5c-.5-.9-2-1.5-2-3.5Z"
              stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m4 6 1.6 1.6M20 6l-1.6 1.6M12 3v2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const KpiImportIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v8m-3-5 3-3 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const KpiExportIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="17" r="2.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.3 8.7 14.7 15.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const KpiGrowthIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17 9 11l4 4 8-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const KpiOnlineIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.6 7.3 10.6 16M16.4 7.3 13.4 16M8 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

export const KpiCheckIcon = ({ className }: IconProps) => (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3.5h9l3 3V21l-3-1.5L12 21l-3-1.5L6 21l-3-1.5V6.5l3-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);