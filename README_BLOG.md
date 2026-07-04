# Blog tizimi - Tex Area Analytics

## Yangi blog qo'shish yo'riqnomasi

### 1. Rasm fayllarini qo'shish

Bloglar uchun rasmlarni `public/images/blog/` papkasiga joylashtiring:

```
public/
  images/
    blog/
      blog-1.jpg          (Hero image - asosiy sahifa uchun)
      blog-2.jpg          (Hero image)
      blog-3.jpg          (Hero image)
      content-1.jpg       (Kontent ichidagi rasmlar)
      content-2.jpg
      content-3.jpg
```

### 2. Yangi blog qo'shish

`data/blogs.ts` faylidagi `blogPosts` arrayga yangi blog qo'shing:

```typescript
{
    id: "unique-blog-id",                    // URL uchun unikal ID
    title: "Blog sarlavhasi",                // Asosiy sarlavha
    description: "Qisqa tavsif",             // Meta va kartochkalarda ko'rsatiladi
    heroImage: "/images/blog/blog-4.jpg",    // Hero rasm (har doim birinchi)
    author: "Tex Area Analytics",            // Muallif
    date: "2026-07-05",                      // Sana (YYYY-MM-DD formatda)
    readTime: "7 мин",                       // O'qish vaqti
    category: "Аналитика",                   // Kategoriya
    tags: ["tag1", "tag2", "tag3"],         // Teglar
    content: [
        // Content bloklar quyida...
    ]
}
```

### 3. Content bloklar turlari

Blog contentida 4 xil blok turi mavjud:

#### a) Text blok
```typescript
{
    type: "text",
    content: "Matn matni..."
}
```

#### b) Heading blok (sarlavha)
```typescript
{
    type: "heading",
    content: "Sarlavha matni",
    level: 2  // 2, 3, yoki 4 (h2, h3, h4)
}
```

#### c) Image blok (rasm)
```typescript
{
    type: "image",
    src: "/images/blog/content-4.jpg",
    alt: "Rasm tavsifi"  // Caption sifatida ko'rsatiladi
}
```

#### d) List blok (ro'yxat)
```typescript
{
    type: "list",
    items: [
        "Birinchi element",
        "Ikkinchi element",
        "Uchinchi element"
    ]
}
```

### 4. To'liq misol

```typescript
{
    id: "new-textile-technology-2026",
    title: "Новые технологии в текстильной промышленности",
    description: "Обзор инновационных решений, меняющих отрасль",
    heroImage: "/images/blog/blog-4.jpg",
    author: "Tex Area Analytics",
    date: "2026-07-05",
    readTime: "9 мин",
    category: "Технологии",
    tags: ["технологии", "инновации", "автоматизация"],
    content: [
        {
            type: "text",
            content: "Текстильная индустрия переживает период цифровой трансформации..."
        },
        {
            type: "heading",
            content: "Ключевые технологии 2026 года",
            level: 2
        },
        {
            type: "text",
            content: "Автоматизация производства становится стандартом..."
        },
        {
            type: "image",
            src: "/images/blog/content-new-1.jpg",
            alt: "Современное текстильное оборудование"
        },
        {
            type: "heading",
            content: "Преимущества автоматизации",
            level: 3
        },
        {
            type: "list",
            items: [
                "Повышение производительности на 40%",
                "Снижение затрат на рабочую силу",
                "Улучшение качества продукции",
                "Сокращение отходов производства"
            ]
        },
        {
            type: "text",
            content: "Внедрение этих технологий требует инвестиций..."
        }
    ]
}
```

## Xususiyatlar

✅ **Backend'siz ishlaydi** - Barcha ma'lumotlar `data/blogs.ts` faylida  
✅ **Static export** - `npm run build` bajarilganda HTML fayllar generatsiya qilinadi  
✅ **SEO optimized** - Metadata, Open Graph taglari  
✅ **Responsive dizayn** - Desktop, planshet, mobil uchun moslashgan  
✅ **Tez yuklanadi** - Next.js Image optimization  
✅ **To'liq dinamik** - Content bloklar istalgan kombinatsiyada  

## Build va deployment

```bash
# Development rejimida ishga tushirish
npm run dev

# Static export uchun build
npm run build

# Build natijasi `out/` papkasida chiqadi
# Uni istalgan static hosting'ga deploy qilish mumkin
```

## Struktura

```
app/
  [lang]/
    blog/
      page.tsx           → Blog listing (barcha bloglar)
      [id]/
        page.tsx         → Blog detail (bitta blog)

data/
  blogs.ts               → Blog ma'lumotlari va typlar

public/
  images/
    blog/                → Blog rasmlari
```

## Eslatmalar

- Blog ID'lar unikal bo'lishi kerak
- Sanalar `YYYY-MM-DD` formatda
- Rasm yo'llari `/images/blog/` dan boshlanadi
- Hero rasm har doim content'dan oldin ko'rsatiladi
- Content bloklar ketma-ketligi muhim - ular berilgan tartibda ko'rsatiladi
