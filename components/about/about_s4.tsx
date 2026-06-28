"use client";

// Grid: 4 ustun, 2 qator.
// 1-qator: [Matn+grafika (2 ustun)] [VOEMA] [Beanca]
// 2-qator: [Mosvolk] [Recoletta] [vagoda] [100k]

const logos = [
    { name: "Mosvolk", className: "text-2xl sm:text-3xl font-medium tracking-tight" },
    { name: "Recoletta", className: "text-2xl sm:text-3xl font-serif font-bold" },
    { name: "vagoda", className: "text-2xl sm:text-3xl font-light italic" },
];

// Faqat aniq kesishish nuqtalarida chiqadigan "+" belgilari
// (matn katakchasi ustida — yuqori chap ikki kesishma — chiqmaydi)
const plusMarks = [
    { x: 50, y: 0 },
    { x: 75, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: 50 },
    { x: 25, y: 50 },
    { x: 50, y: 50 },
    { x: 75, y: 50 },
    { x: 100, y: 50 },
    { x: 0, y: 100 },
    { x: 25, y: 100 },
    { x: 50, y: 100 },
    { x: 75, y: 100 },
    { x: 100, y: 100 },
];

const PlusMark = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="text-neutral-300">
        <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1" />
    </svg>
);

// Fonda turuvchi xira "globe wireframe" naqshi — deterministik nuqta/chiziqlar
const dots = [
    [60, 60], [110, 40], [160, 75], [210, 35], [260, 70], [300, 50],
    [340, 90], [380, 60], [420, 110], [120, 110], [180, 130], [240, 120],
    [290, 140], [330, 150], [370, 120], [400, 160], [150, 170], [200, 190],
    [250, 200], [300, 195], [350, 210], [180, 230], [230, 250], [280, 240],
    [320, 260], [360, 250],
];
const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8],
    [0, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
    [9, 16], [16, 17], [17, 18], [18, 19], [19, 20], [16, 21], [21, 22],
    [22, 23], [23, 24], [24, 25], [1, 9], [4, 13], [6, 15], [10, 17],
    [12, 19], [17, 21], [19, 23],
];

const AboutS4 = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
            <div className="relative mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
                {/* Matn + fon grafikasi */}
                <div className="relative col-span-2 overflow-hidden border-b border-r border-neutral-200 p-8 sm:p-10 lg:p-12">
                    <svg
                        viewBox="0 0 450 300"
                        className="pointer-events-none absolute -right-4 top-2 h-[220px] w-[320px] text-neutral-400 opacity-25 sm:h-[260px] sm:w-[380px]"
                    >
                        {links.map(([a, b], i) => (
                            <line
                                key={i}
                                x1={dots[a][0]}
                                y1={dots[a][1]}
                                x2={dots[b][0]}
                                y2={dots[b][1]}
                                stroke="currentColor"
                                strokeWidth="0.5"
                            />
                        ))}
                        {dots.map(([cx, cy], i) => (
                            <circle key={i} cx={cx} cy={cy} r="2" fill="currentColor" />
                        ))}
                    </svg>

                    <p className="relative text-sm text-neutral-400">Meet our clients</p>
                    <h2 className="relative mt-3 text-4xl font-light leading-[1.1] text-neutral-900 sm:text-5xl">
                        All around
                        <br />
                        the world
                    </h2>
                </div>

                {/* VOEMA */}
                <div className="flex items-center justify-center border-b border-r border-t border-neutral-200 p-10">
                    <span className="text-2xl font-medium uppercase tracking-[0.15em] text-neutral-800 sm:text-3xl">
                        VOEMA
                    </span>
                </div>

                {/* Beanca */}
                <div className="flex items-center justify-center border-b border-r border-t border-neutral-200 p-10">
                    <span className="font-serif text-2xl text-neutral-800 sm:text-3xl">
                        Beanca
                    </span>
                </div>

                {/* Mosvolk / Recoletta / vagoda */}
                {logos.map((logo, i) => (
                    <div
                        key={logo.name}
                        className={`flex items-center justify-center border-b border-r border-neutral-200 p-10 ${
                            i === 0 ? "border-l" : ""
                        }`}
                    >
                        <span className={`${logo.className} text-neutral-800`}>{logo.name}</span>
                    </div>
                ))}

                {/* 100k statistika */}
                <div className="flex flex-col items-center justify-center border-b border-r border-neutral-200 p-10">
                    <span className="text-5xl font-light text-neutral-900 sm:text-6xl">100k</span>
                    <span className="mt-2 text-xs text-neutral-400">Satisfied Clients</span>
                </div>

                {/* Kesishma nuqtalaridagi "+" belgilari */}
                {plusMarks.map((p, i) => (
                    <div
                        key={i}
                        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    >
                        <PlusMark />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutS4;