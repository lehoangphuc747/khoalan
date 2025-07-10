# Khoa Lan - Website Bán Tôn Sắt Thép

Website chính thức của Công ty TNHH Khoa Lan - Nhà máy sản xuất và phân phối tôn, sắt, thép hàng đầu tại Lâm Đồng.

## 🚀 Công Nghệ Sử Dụng

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Netlify

## 📁 Cấu Trúc Dự Án

```
khoalan/
├── public/                 # Tài nguyên tĩnh
│   ├── images/            # Hình ảnh sản phẩm và logo
│   ├── logo.png           # Logo chính
│   └── favicon.svg        # Favicon
├── src/
│   ├── components/        # Các component Astro
│   ├── content/           # Nội dung MDX (tin tức)
│   ├── layouts/           # Layout chính
│   ├── pages/             # Các trang của website
│   ├── scripts/           # JavaScript tùy chỉnh
│   └── styles/            # CSS toàn cục
├── astro.config.mjs       # Cấu hình Astro
├── netlify.toml           # Cấu hình Netlify
└── package.json           # Dependencies
```

## 🏗️ Layout System

### MainLayout.astro
**File**: `src/layouts/MainLayout.astro`
**Chức năng**: Layout chính cho toàn bộ website

#### Props Interface
```typescript
interface Props {
  title: string;
}
```

#### HTML Structure
- **DOCTYPE**: HTML5 với lang="vi"
- **Meta Tags**: 
  - UTF-8 charset
  - Responsive viewport
  - Favicon từ logo.png
  - Astro generator meta
- **Fonts**: 
  - Inter (body text)
  - Be Vietnam Pro (headings)
  - Preconnect optimization
- **Body**: 
  - Background gray-50
  - Scroll-smooth behavior
  - Slot cho content injection

#### Features
- **SEO Ready**: Meta tags, title injection
- **Performance**: Font preconnect, optimized loading
- **Accessibility**: Proper lang attribute, semantic HTML
- **Responsive**: Mobile-first approach
- **Branding**: Custom favicon, consistent styling

### Global Scripts
**File**: `src/scripts/main.js`
**Chức năng**: JavaScript toàn cục cho website

#### Mobile Menu Management
- **Toggle**: Show/hide mobile menu
- **Auto-close**: Close menu khi click link
- **Smooth scroll**: Anchor link navigation

#### Sticky Header
- **Scroll detection**: Window scroll event
- **Dynamic padding**: py-2/py-3 classes
- **Performance**: Optimized scroll handling

#### Animation System
- **Intersection Observer**: Fade-in-up animations
- **Threshold**: 0.1 for early triggering
- **Performance**: Efficient DOM observation

#### Counter Animations
- **Data attributes**: `data-counter` values
- **Smooth counting**: RequestAnimationFrame
- **Number formatting**: Vietnamese locale
- **Threshold**: 0.8 for late triggering
- **Speed optimization**: 
  - Projects counter (1000): `target / 50` (very fast)
  - Large numbers: `target / 100` (faster)
  - Small numbers: `increment = 1` (normal)

### Global Styles
**File**: `src/styles/global.css`
**Chức năng**: CSS toàn cục và design system

#### Typography System
- **Body Font**: Inter (400, 500, 600, 700)
- **Heading Font**: Be Vietnam Pro (500, 600, 700, 800)
- **Optimization**: Font smoothing, kerning
- **Responsive**: Mobile-optimized sizes

#### Prose Styling (MDX Content)
- **Headings**: H1-H6 với color hierarchy
- **Paragraphs**: Optimized line-height và spacing
- **Lists**: Custom bullets với brand colors
- **Blockquotes**: Brand-colored left border
- **Code**: Syntax highlighting
- **Tables**: Responsive với shadows
- **Links**: Brand color với hover effects

#### Brand Colors
```css
.khoalan-yellow: #ffb400
.bg-khoalan-yellow: background-color
.border-khoalan-yellow: border-color
```

#### Background Patterns
- **Hero Background**: 
  - Image: `/background-hero.jpg`
  - `background-size: 100% 100%` để fit chính xác với container
  - `height: 100vh` và `width: 100%` để full viewport
  - Gray overlay với opacity 0.4
  - Mobile: Cùng settings cho consistency
- **CTA Background**: Blue gradient
- **Responsive**: Mobile-optimized patterns

#### Text Color System
```css
/* Base Colors */
.text-white: #ffffff
.text-gray-800: #1f2937
.text-gray-600: #4b5563
.text-gray-500: #6b7280

/* Brand Colors */
.text-khoalan-yellow: #ffb400
.bg-khoalan-yellow: #ffb400

/* Hero Text Styling */
.hero-bg h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    color: #ffffff;
    font-weight: 900;
}

.hero-bg p {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    color: #f3f4f6;
    font-weight: 500;
}
```

#### Animation Classes
- **fade-in-up**: Initial state (opacity: 0, transform: translateY)
- **fade-in-up.visible**: Animated state (opacity: 1, transform: translateY(0))
- **Transition**: 0.6s ease-out

#### Logo Slider Animation
- **Infinite scroll**: CSS animation
- **Performance**: Hardware acceleration
- **Smooth**: Continuous loop

### Layout Usage Pattern
**Cách sử dụng MainLayout trong các trang:**

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

// Import CSS toàn cục
import '../styles/global.css';
---

<MainLayout title="Tiêu đề trang">
  <Header />
  
  <!-- Content của trang -->
  <main>
    <!-- Các component và nội dung -->
  </main>
  
  <Footer />
</MainLayout>
```

#### Layout Features
- **Slot System**: Content injection thông qua `<slot />`
- **Title Injection**: Dynamic page titles
- **Global Scripts**: Tự động load main.js
- **CSS Import**: Global styles được import trong từng trang
- **Component Composition**: Header/Footer pattern

### Performance & Optimization
#### Font Loading Strategy
- **Preconnect**: Google Fonts optimization
- **Display**: Font-display: swap
- **Subset**: Vietnamese character support
- **Weight**: Only loaded weights được sử dụng

#### JavaScript Optimization
- **Event Delegation**: Efficient event handling
- **Intersection Observer**: Performance animations
- **RequestAnimationFrame**: Smooth counter animations
- **Debouncing**: Scroll event optimization

#### CSS Optimization
- **Critical CSS**: Inline critical styles
- **PurgeCSS**: Unused CSS removal
- **Minification**: Production build optimization
- **Caching**: Long-term caching strategy

#### SEO & Accessibility
- **Meta Tags**: Complete SEO meta tags
- **Structured Data**: JSON-LD support
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Accessibility support
- **Language**: Vietnamese language declaration

#### Text Contrast Solutions - Simple Gray Overlay
**Problem**: Text bị chìm trên background images (mặt trước cửa hàng)
**Solutions Applied**:

1. **Simple Gray Overlay**: 
   - Single layer gray overlay với opacity 0.4
   - Color: rgba(75, 85, 99, 0.4) - neutral gray
   - Covers entire background để tạo consistent contrast
   - Minimal impact on image visibility

2. **Clean Text Styling**:
   - Simple text shadows cho readability
   - No complex animations hay effects
   - Clean typography với proper contrast
   - Brand color preservation

3. **Modern Layout Design**:
   - 2-column grid layout (desktop)
   - Floating animated elements
   - Glassmorphism card với backdrop blur
   - Stats section với brand colors

4. **Enhanced Button Design**:
   - Gradient buttons với hover effects
   - Scale transform animations
   - Group hover states
   - Modern shadow effects

5. **Typography & Spacing**:
   - Minimal text shadows
   - Better letter spacing
   - Responsive text sizing
   - Brand color integration

## 🧩 Các Component Chính

### 1. **AboutStats.astro**
**Chức năng**: Hiển thị thông tin giới thiệu công ty và thống kê thành tích
- Hiển thị hình ảnh nhà máy
- Thống kê số năm kinh nghiệm và đơn hàng đã giao
- Nút "Tìm Hiểu Thêm" link đến trang /about

### 2. **ContactForm.astro**
**Chức năng**: Form liên hệ với validation và xử lý submit
- Form nhập thông tin khách hàng (tên, SĐT, email, yêu cầu)
- Validation real-time với visual feedback
- Format số điện thoại tự động
- Loading state khi submit
- Thông báo thành công/lỗi

### 3. **CoreStrengths.astro**
**Chức năng**: Hiển thị 4 điểm mạnh cốt lõi của công ty
- Giá cả cạnh tranh
- Chất lượng đảm bảo
- Giao hàng nhanh chóng
- Công nghệ tiên tiến

### 4. **CTA.astro**
**Chức năng**: Call-to-action chính với thông tin liên hệ
- Nút gọi điện trực tiếp
- Thông tin số điện thoại chính

### 5. **FAQ.astro**
**Chức năng**: Component FAQ có thể tái sử dụng
- Props: mảng các câu hỏi và trả lời
- Animation mở/đóng mượt mà
- Responsive design

### 6. **Footer.astro**
**Chức năng**: Footer website với thông tin liên hệ và bản đồ
- Logo và mô tả công ty
- Menu liên kết nhanh
- Thông tin liên hệ chi tiết
- Embed Google Maps
- Copyright

### 7. **Header.astro**
**Chức năng**: Navigation header responsive
- Logo và tên công ty
- Menu navigation chính
- Nút "Yêu Cầu Báo Giá"
- Mobile menu với hamburger

### 8. **Hero.astro**
**Chức năng**: Banner chính của trang chủ
- Tiêu đề và mô tả công ty
- 2 nút CTA chính (Yêu Cầu Báo Giá, Xem Sản Phẩm)
- Background image với gray overlay
- Floating animated elements
- Centered layout với max-width container

### 9. **ImageGallery.astro**
**Chức năng**: Gallery hình ảnh với modal fullscreen
- Props: mảng hình ảnh, số cột, khoảng cách
- Modal xem hình ảnh fullscreen
- Navigation giữa các hình
- Zoom in/out với chuột
- Keyboard navigation

### 10. **Partners.astro**
**Chức năng**: Hiển thị logo đối tác với animation
- Slider logo đối tác tự động
- Hiệu ứng hover
- Fallback cho hình ảnh lỗi

### 11. **ProductCard.astro**
**Chức năng**: Card hiển thị sản phẩm
- Props: id, title, image, description, features
- Badge "Hình thật" cho sản phẩm có hình thật
- Hover effects
- Click để mở modal chi tiết

### 12. **ProductModal.astro**
**Chức năng**: Modal hiển thị chi tiết sản phẩm
- Dữ liệu chi tiết cho 8 sản phẩm chính
- Thông số kỹ thuật, tính năng, ứng dụng
- Nút liên hệ qua điện thoại và Zalo
- Thông tin bảo hành và xuất xứ

### 13. **Products.astro**
**Chức năng**: Section giới thiệu 3 nhóm sản phẩm chính
- Tôn các loại
- Sắt thép xây dựng
- Phụ kiện nhà kính & xây dựng

### 14. **QualityChart.astro**
**Chức năng**: Biểu đồ so sánh chất lượng SENDO vs thép thường
- Sử dụng Chart.js
- So sánh trọng lượng và lớp mạ kẽm
- Responsive design

### 15. **SingleImage.astro**
**Chức năng**: Component hiển thị hình ảnh đơn lẻ
- Props: src, alt, title, caption, size options
- Modal fullscreen khi click
- Responsive sizing
- Loading states

### 16. **Testimonials.astro**
**Chức năng**: Hiển thị đánh giá khách hàng
- 3 testimonial mẫu
- Star rating
- Animation fade-in

## 📄 Cấu Trúc Trang Web

### Trang Chủ (`/`)
**File**: `src/pages/index.astro`
- **Hero Section**: Banner chính với tiêu đề, mô tả và 2 CTA buttons
- **CoreStrengths**: 4 điểm mạnh cốt lõi (giá cả, chất lượng, giao hàng, công nghệ)
- **Products**: 3 nhóm sản phẩm chính (tôn, sắt thép, phụ kiện)
- **AboutStats**: Giới thiệu công ty và thống kê thành tích
- **Testimonials**: Đánh giá khách hàng
- **Partners**: Logo đối tác
- **CTA**: Call-to-action liên hệ

**Layout Pattern**: MainLayout + Header/Footer + Component composition

### Trang Giới Thiệu (`/about`)
**File**: `src/pages/about.astro`
- **Hero Section**: Banner với tiêu đề "KHOA LAN" và mô tả công ty
  - Full viewport height với flexbox centering
  - Responsive typography: text-4xl (mobile) → text-8xl (large desktop)
  - CTA button "Khám Phá Ngay" link đến trang sản phẩm
- **Company Introduction**: Thông tin chi tiết về Khoa Lan
- **Features Grid**: 3 điểm mạnh (Uy tín, Dịch vụ, Giá cả)
- **Services Section**: 3 dịch vụ chính (Thi công sắt, Mái vòm, Cung cấp vật liệu)
- **Vision & Mission**: Tầm nhìn và sứ mệnh công ty
- **Team Section**: Đội ngũ chuyên nghiệp với 4 vai trò
- **CTA Section**: Call-to-action hợp tác

**Features**: Fade-in animations, responsive design, gradient backgrounds

### Trang Tôn Sắt Thép (`/ton-sat-thep`)
**File**: `src/pages/ton-sat-thep.astro`
- **Hero Section**: Banner với tiêu đề "TÔN SẮT THÉP CHẤT LƯỢNG CAO"
  - Full viewport height với flexbox centering
  - Responsive typography: text-4xl (mobile) → text-8xl (large desktop)
  - CTA buttons "Xem Sản Phẩm" và "Liên Hệ Ngay"
- **Breadcrumb Navigation**: Điều hướng trang
- **Products Grid**: 8 sản phẩm chính với ProductCard
- **Advantages Section**: 4 ưu điểm khi chọn Khoa Lan
- **ProductModal**: Modal chi tiết sản phẩm
- **CTA Section**: Call-to-action liên hệ

**Data Structure**: Products array với id, title, image, description, features
**Components**: ProductCard, ProductModal, CTA

### Trang Liên Hệ (`/contact`)
**File**: `src/pages/contact.astro`
- **Desktop Layout**: 2 cột (Phone + Action buttons)
- **Mobile Layout**: Single column responsive
- **Phone Display**: Số điện thoại lớn với copy button
- **Action Buttons**: 
  - Gọi điện (tel:)
  - Chat Zalo (external link)
  - Google Maps (external link)
- **Store Status**: Real-time giờ mở cửa (7:00-18:00)
- **Copy Functionality**: Copy phone number với toast notification

**JavaScript Features**: 
- Real-time clock với Vietnam timezone
- Copy to clipboard functionality
- Store status detection
- Toast notifications

### Trang Giới Thiệu (`/about`)
- Thông tin chi tiết về công ty
- Lịch sử phát triển
- Tầm nhìn và sứ mệnh

### Trang Tôn Sắt Thép (`/ton-sat-thep`)
- Danh sách sản phẩm chi tiết
- ProductCard cho từng sản phẩm
- ProductModal cho thông tin chi tiết
- QualityChart so sánh chất lượng

### Trang Tin Tức (`/news`)
**File**: `src/pages/news.astro`
- **Hero Section**: Banner với tiêu đề "TIN TỨC KHOA LAN"
  - Full viewport height với flexbox centering
  - Responsive typography: text-4xl (mobile) → text-8xl (large desktop)
  - Mô tả về cập nhật thông tin mới nhất
- **Breadcrumb Navigation**: Điều hướng trang
- **Category Filter**: Bộ lọc theo danh mục (Thông báo, Khuyến mãi, Sản phẩm mới, Sự kiện, Hướng dẫn)
- **News Grid**: Hiển thị tin tức dạng card với:
  - Hình ảnh thumbnail
  - Badge danh mục và featured
  - Tiêu đề và mô tả
  - Hover effects và click navigation
- **CTA Section**: Call-to-action liên hệ tư vấn
- **JavaScript**: Filter functionality theo category

**Data Source**: 
- Collection `news` từ `src/content/news/`
- Schema validation với `src/content/config.ts`
- Sorting theo `pubDate` (mới nhất trước)

### Trang Chi Tiết Tin Tức (`/news/[slug]`)
**File**: `src/pages/news/[...slug].astro`
- **Static Generation**: Pre-render tất cả bài viết
- **SEO Optimization**: 
  - Open Graph meta tags
  - Twitter Card meta tags
  - Structured data (JSON-LD)
  - Meta description và title
- **Article Layout**:
  - Breadcrumb navigation
  - Article header với category, title, description
  - Featured image với alt text
  - MDX content rendering
  - Tags display
  - Author và publish date
- **Related Posts**: 3 bài viết cùng category
- **Social Sharing**: Share buttons
- **Reading Time**: Ước tính thời gian đọc

**Content Structure**:
- **Frontmatter**: title, description, author, pubDate, category, tags, featured, draft
- **MDX Content**: Markdown với React components support
- **Images**: Support cho featured images và inline images

### Trang Liên Hệ (`/contact`)
- Thông tin liên hệ chi tiết
- ContactForm
- Bản đồ Google Maps
- Thông tin địa chỉ, SĐT, email

## 🎨 Design System

### Màu Sắc
- **Primary**: `#ffb400` (khoalan-yellow)
- **Secondary**: `#1d4ed8` (blue)
- **Text**: `#1f2937` (gray-800)
- **Background**: `#f9fafb` (gray-50)

### Typography
- **Heading**: Font-bold, responsive sizes
- **Body**: Font-normal, leading-relaxed
- **Button**: Font-bold, rounded-full

### Components
- **Cards**: Shadow-lg, hover:shadow-xl
- **Buttons**: Rounded-full, transition-all
- **Forms**: Border-2, focus states
- **Modals**: Backdrop-blur, shadow-2xl

## 📝 Content Management System (CMS)

### Content Collections
**File**: `src/content/config.ts`
- **News Collection**: Quản lý tin tức và bài viết
- **Schema Validation**: Zod schema cho type safety
- **Fields**:
  - `title`: Tiêu đề bài viết
  - `description`: Mô tả ngắn
  - `author`: Tác giả (default: "Khoa Lan")
  - `pubDate`: Ngày xuất bản
  - `updatedDate`: Ngày cập nhật (optional)
  - `image`: Hình ảnh chính (optional)
  - `imageAlt`: Alt text cho hình ảnh
  - `category`: Danh mục (thong-bao, khuyến-mai, san-pham-moi, su-kien, huong-dan)
  - `tags`: Mảng từ khóa (optional)
  - `featured`: Tin nổi bật (boolean)
  - `draft`: Bản nháp (boolean)

### Content Structure
**Directory**: `src/content/news/`
- **File Format**: `.mdx` (Markdown + JSX)
- **Naming Convention**: Kebab-case với tiếng Việt
- **Frontmatter**: YAML metadata ở đầu file
- **Content**: Markdown với support cho:
  - Headings, paragraphs, lists
  - Links và images
  - Code blocks
  - Tables
  - Custom React components

### Content Categories
1. **📢 Thông Báo** (`thong-bao`): Thông báo chính thức từ công ty
2. **🎉 Khuyến Mãi** (`khuyến-mai`): Chương trình khuyến mãi, giảm giá
3. **🆕 Sản Phẩm Mới** (`san-pham-moi`): Giới thiệu sản phẩm mới
4. **🎊 Sự Kiện** (`su-kien`): Sự kiện, hội thảo, triển lãm
5. **📚 Hướng Dẫn** (`huong-dan`): Hướng dẫn sử dụng, kiến thức chuyên ngành

### Content Workflow
1. **Tạo bài viết**: Tạo file `.mdx` trong `src/content/news/`
2. **Frontmatter**: Điền đầy đủ metadata theo schema
3. **Content**: Viết nội dung bằng Markdown
4. **Images**: Thêm hình ảnh vào `public/images/`
5. **Preview**: Chạy `npm run dev` để xem preview
6. **Publish**: Commit và push để deploy

## 🎨 Styles & CSS Architecture

### Global Styles
**File**: `src/styles/global.css`
- **Tailwind Import**: Base Tailwind CSS framework
- **Typography System**: Inter + Be Vietnam Pro fonts
- **Prose Styling**: MDX content với brand colors
- **Brand Colors**: Khoa Lan yellow (#ffb400)
- **Background Patterns**: Hero và CTA gradients
- **Animation Classes**: fade-in-up với transitions
- **Responsive Design**: Mobile-first approach

### CSS Features
- **Font Optimization**: Preconnect, font-display: swap
- **Vietnamese Support**: Word-break, overflow-wrap
- **Prose Styling**: Complete MDX content styling
- **Animation System**: Keyframes và transitions
- **Logo Slider**: Infinite scroll animation
- **Mobile Optimization**: Responsive breakpoints

### Design Tokens
```css
/* Brand Colors */
.khoalan-yellow: #ffb400
.bg-khoalan-yellow: background-color
.border-khoalan-yellow: border-color

/* Typography */
Body Font: Inter (400, 500, 600, 700)
Heading Font: Be Vietnam Pro (500, 600, 700, 800)

/* Animations */
fade-in-up: opacity 0.8s ease-out, transform 0.8s ease-out
```

## 🚀 Deployment & Configuration

### Netlify Configuration
**File**: `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Build Process
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`
- **Node Version**: 18.x
- **SPA Routing**: Redirect all routes to index.html

### Deployment Features
- **Automatic Builds**: Trigger từ Git commits
- **Preview Deployments**: Branch và PR previews
- **Custom Domain**: khoalan.vn
- **SSL Certificate**: Automatic HTTPS
- **CDN**: Global content delivery
- **Form Handling**: Netlify Forms integration
- **Redirects**: SPA routing support

### Environment Variables
- **NODE_VERSION**: 18 (for build environment)
- **Custom domains**: Configured in Netlify dashboard
- **Form notifications**: Email/webhook integration

## 📱 Responsive Design

Website được thiết kế responsive với breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## 📊 Project Architecture Summary

### Technology Stack
- **Framework**: Astro (Static Site Generator)
- **Styling**: Tailwind CSS + Custom CSS
- **Language**: TypeScript
- **Content**: MDX (Markdown + JSX)
- **Deployment**: Netlify
- **Fonts**: Inter + Be Vietnam Pro (Google Fonts)

### File Organization
```
src/
├── components/     # Reusable UI components (16 components)
├── content/        # MDX content with schema validation
├── layouts/        # Page layout templates
├── pages/          # Route pages (5 main pages)
├── scripts/        # Global JavaScript functionality
└── styles/         # Global CSS and design system
```

### Key Features
- **Component-Based**: Modular, reusable components
- **Type Safety**: TypeScript interfaces và Zod schemas
- **SEO Optimized**: Meta tags, structured data, Open Graph
- **Performance**: Static generation, lazy loading, optimization
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML, ARIA labels
- **Content Management**: MDX với frontmatter validation

### Development Workflow
1. **Content Creation**: MDX files với frontmatter
2. **Component Development**: Astro components với TypeScript
3. **Styling**: Tailwind CSS + custom CSS
4. **Testing**: Local development server
5. **Deployment**: Git push → Netlify auto-build

## ⚡ JavaScript Functionality

### Global Scripts
**File**: `src/scripts/main.js`
- **Mobile Menu Management**: Toggle, auto-close, smooth scroll
- **Sticky Header**: Scroll detection, dynamic padding
- **Animation System**: Intersection Observer cho fade-in-up
- **Counter Animations**: Smooth counting với RequestAnimationFrame

### News Page Features
**File**: `src/pages/news.astro` (inline script)
- **Category Filtering**: 
  - Filter buttons với data-category attributes
  - Dynamic grid filtering
  - Active state management
  - Smooth transitions
- **Image Fallback**: 
  - Error handling cho broken images
  - Fallback gradient với logo công ty
  - Lazy loading cho performance
- **Hover Effects**: 
  - Scale transform cho images
  - Shadow transitions
  - Color transitions cho text

### News Detail Page Features
**File**: `src/pages/news/[...slug].astro`
- **SEO Optimization**: 
  - Dynamic meta tags generation
  - Open Graph và Twitter Card
  - Structured data (JSON-LD)
- **Related Posts**: 
  - Auto-generation từ cùng category
  - Limit 3 posts
  - Sort by publish date
- **Social Sharing**: 
  - Share buttons cho Facebook, Twitter
  - Copy link functionality
- **Reading Progress**: 
  - Progress bar indicator
  - Scroll-based animation

### Contact Page Features
**File**: `src/pages/contact.astro` (inline script)
- **Real-time Clock**: Vietnam timezone với rotating clock icon
- **Store Status**: Auto-detect open/closed (7:00-18:00)
- **Copy Functionality**: Copy phone number với toast notification
- **Responsive Layout**: Desktop 2-column, mobile single-column
- **External Links**: Zalo, Google Maps integration

### Component Scripts
- **ContactForm**: Form validation, phone formatting, submit handling
- **ProductModal**: Modal management, product data, zoom functionality
- **ImageGallery**: Fullscreen modal, navigation, keyboard controls
- **FAQ**: Accordion functionality, smooth animations

## 📞 Thông Tin Liên Hệ

- **Địa chỉ**: 358 Nam Hiệp 1, Xã Ka Đô, tỉnh Lâm Đồng
- **Điện thoại**: 0867 555 211
- **Email**: hoahongphuc0803@gmail.com
- **Website**: https://khoalan.vn

## 📝 Changelog

### Version 2.3 - Complete Hero Sections Unification
**Date**: Current Update

#### 🎯 **Major Changes**
1. **Complete Hero Sections Standardization**
   - Unified Hero sections across ALL pages (index, about, ton-sat-thep, news)
   - Consistent layout: `hero-bg` class với full viewport height
   - Standardized typography: `text-4xl md:text-5xl lg:text-7xl xl:text-8xl`
   - Consistent button styling: rounded-full với proper hover effects
   - Flexbox centering: `h-screen flex items-center justify-center`

2. **News Page Updates**
   - Changed from gradient background to `hero-bg` class
   - Updated typography scaling cho consistency
   - Standardized layout và responsive behavior
   - Improved visual consistency với other pages

3. **Ton-Sat-Thep Page Updates**
   - Changed from gradient background to `hero-bg` class
   - Updated typography scaling cho consistency
   - Standardized button design và hover effects
   - Improved responsive behavior

#### 🔧 **Technical Improvements**
- **Consistent Layout**: All Hero sections use same structure
- **Unified Styling**: Same background, typography, và button styles
- **Responsive Design**: Consistent scaling across all pages
- **Code Maintainability**: Easier to maintain với unified approach

#### 📱 **Layout Changes**
- **All Pages**: Full viewport height với perfect centering
- **Typography**: Progressive scaling: mobile (36px) → large desktop (96px)
- **Buttons**: Rounded-full design với consistent hover effects
- **Background**: Unified `hero-bg` class với gray overlay

#### 🎨 **Design Updates**
- **Visual Consistency**: Same Hero design across all pages
- **Brand Cohesion**: Unified brand presentation
- **User Experience**: Consistent navigation experience
- **Professional Look**: Cohesive design language

---

### Version 2.1 - About Page Hero Optimization
**Date**: Previous Update

#### 🎯 **Major Changes**
1. **About Page Hero Section**
   - Simplified title from "KHOA LAN ĐƠN DƯƠNG" to "KHOA LAN"
   - Full viewport height với flexbox centering
   - Responsive typography scaling: mobile (36px) → large desktop (96px)
   - Removed padding để perfect centering
   - CTA button "Khám Phá Ngay" với proper styling

#### 🔧 **Technical Improvements**
- **Flexbox Layout**: `h-screen flex items-center justify-center`
- **Responsive Typography**: `text-4xl md:text-5xl lg:text-7xl xl:text-8xl`
- **Content Centering**: `max-w-4xl mx-auto text-center`
- **Visual Balance**: Proper spacing và alignment

#### 📱 **Layout Changes**
- **Hero**: Full viewport height với perfect centering
- **Typography**: Progressive scaling theo screen size
- **Mobile**: Maintained readable size (36px)
- **Desktop**: Enhanced visual impact (72px-96px)

#### 🎨 **Design Updates**
- **Clean Layout**: Removed unnecessary padding
- **Brand Consistency**: Simplified company name
- **Visual Hierarchy**: Clear typography scaling
- **User Experience**: Better readability trên mọi device

---

### Version 2.0 - Hero & Stats Restructure
**Date**: Previous Update

#### 🎯 **Major Changes**
1. **Hero Component Simplification**
   - Removed stats section from Hero
   - Simplified to core content: title, description, 2 CTA buttons
   - Centered layout với max-width container
   - Maintained floating elements và modern styling

2. **Stats Component Removal**
   - Removed `Stats.astro` component completely
   - Stats information integrated into AboutStats component
   - Simplified page structure and improved performance
   - Reduced component complexity

#### 🔧 **Technical Improvements**
- **Component Consolidation**: Stats integrated into AboutStats
- **Simplified Structure**: Reduced component complexity
- **Maintainability**: Easier to manage with fewer components
- **Performance**: Better performance with fewer components to render

#### 📱 **Layout Changes**
- **Hero**: Single column centered layout
- **CoreStrengths**: Moved to position 2 (after Hero)
- **Products**: Moved to position 3 (early product showcase)
- **Stats Component**: Removed completely
- **Spacing**: Proper section padding và margins
- **Responsive**: Mobile-first approach maintained

#### 🎨 **Design Updates**
- **Hero**: Clean, focused design
- **AboutStats**: Integrated stats với company information
- **Icons**: SVG icons cho từng metric
- **Animations**: Hover effects và counter animations
- **CTA Buttons**: Simplified design - solid color cho primary button, border cho secondary button

---

**Gợi ý tiếp theo**: Bạn có muốn tôi đi sâu vào phần nào cụ thể không?
1. **Chi tiết từng component** - Mô tả kỹ thuật và code
2. **Cấu trúc dữ liệu** - Props, interfaces, data flow
3. **Styling và CSS** - Design system, responsive
4. **JavaScript functionality** - Interactions, animations
5. **SEO và Performance** - Optimization strategies
6. **Deployment và CI/CD** - Build process, hostin