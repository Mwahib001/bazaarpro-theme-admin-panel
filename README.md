# Bazaar Pro Admin Panel

A sophisticated admin panel built for the **Bazaar Pro React Ecommerce Template v4.0.0** using **Next.js 13** with the App Router, **Payload CMS**, and **TypeScript**. This project demonstrates advanced content management capabilities with dynamic layouts, drag-and-drop section management, and seamless Supabase database integration.

## 🚀 Key Features

### Dynamic Content Management
- **Drag-and-Drop Layout Builder**: Fully customizable homepage with modular blocks that can be rearranged dynamically
- **Reusable Content Blocks**: Over 15+ pre-built blocks for banners, product carousels, category grids, and more
- **Real-time Content Updates**: Changes reflect immediately in the frontend without redeployment

### Ecommerce-Specific Collections
- **Products**: Complete product management with pricing, images, and customer reviews
- **Categories**: Hierarchical category system with nested subcategories and parent relationships
- **Media Library**: Centralized media management with alt text and automatic resizing
- **Icons**: Custom icon management for UI elements
- **Pages**: Static page management with SEO fields

### Advanced Block System
- **Hero Banners**: Multi-layout hero sections with customizable text lines and CTAs
- **Product Displays**: Carousels, grids, and filtered product lists
- **Banner Systems**: Full-width, half-width, and equal-width banner configurations
- **Feature Sections**: Service highlights with icons and descriptions
- **Category Integration**: Dynamic category grids with nested relationships

### Technical Architecture
- **Next.js 13 App Router**: Modern React framework with server components
- **Payload CMS**: Headless CMS with rich editing capabilities
- **Supabase Integration**: PostgreSQL database with real-time capabilities
- **TypeScript**: Full type safety with auto-generated Payload types
- **Lexical Editor**: Rich text editing for content blocks
- **Sharp Image Processing**: Automatic image optimization and resizing

## 🛠 Tech Stack

- **Framework**: Next.js 13 (App Router)
- **CMS**: Payload CMS v3
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Styling**: Custom SCSS with Payload admin UI
- **Image Processing**: Sharp
- **Rich Text**: Lexical Editor
- **Deployment**: Docker-ready with docker-compose

## 📁 Project Structure

```
src/
├── collections/          # Database collections
│   ├── Users.ts         # Authentication
│   ├── Media.ts         # File uploads
│   ├── Products.ts      # Ecommerce products
│   ├── Categories.ts    # Product categories
│   ├── Icons.ts         # UI icons
│   └── Pages.ts         # Static pages
├── globals/             # Global content
│   ├── Home.ts          # Homepage layout
│   ├── Header.ts        # Site header
│   └── Footer.ts        # Site footer
├── blocks/              # Reusable content blocks
│   ├── HeroBannersLeftMain.ts
│   ├── CategoriesGrid.ts
│   ├── ProductListWithCatList.ts
│   └── ... (15+ blocks)
├── fields/              # Shared field configurations
│   ├── fourTextLinesForBanners.ts
│   ├── threeTextLinesForBanners.ts
│   └── bannerGroupFields.ts
├── app/                 # Next.js app router
│   ├── (frontend)/      # Public pages
│   └── (payload)/       # Admin panel
└── payload-types.ts     # Auto-generated TypeScript types
```

## 🔧 Setup & Development

### Prerequisites
- Node.js 18+
- pnpm
- Supabase account

### Local Development

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd bazaar-pro-admin
   pnpm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Add your Supabase DATABASE_URI and PAYLOAD_SECRET
   ```

3. **Database Migration**
   ```bash
   pnpm payload migrate
   ```

4. **Generate Types**
   ```bash
   pnpm payload generate:types
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

6. **Access Admin Panel**
   - Open `http://localhost:3000/admin`
   - Create your first admin user

### Docker Setup (Alternative)

```bash
docker-compose up -d
pnpm dev
```

## 🎨 Content Management Features

### Homepage Builder
- **Hero Section**: Left-main banner layout with right-side banners
- **Content Blocks**: Add/remove/reorder sections like:
  - Feature rectangles with icons
  - Category grids with nested categories
  - Product carousels with filters
  - Brand logo bars
  - Special offer banners

### Product Management
- Rich product data with reviews system
- Category relationships
- Media integration
- SEO-friendly slugs

### Category System
- Hierarchical categories with parent-child relationships
- Subcategory arrays
- Image associations
- Nested document plugin for URL generation

## 🔒 Security & Performance

- **Type-Safe**: Full TypeScript coverage with generated types
- **Secure Auth**: Payload's built-in authentication
- **Optimized Images**: Automatic resizing and WebP conversion
- **Database Relations**: Efficient querying with Supabase
- **SEO Ready**: Meta fields for all content types

## 📊 Database Schema

### Collections
- **Users**: Admin authentication
- **Media**: File uploads with metadata
- **Products**: Ecommerce products with reviews
- **Categories**: Nested category hierarchy
- **Icons**: UI icon management
- **Pages**: Static content pages

### Globals
- **Home**: Dynamic homepage layout
- **Header**: Navigation and topbar
- **Footer**: Site footer content

## 🚀 Deployment

### Production Build
```bash
pnpm build
pnpm start
```

### Docker Deployment
```bash
docker build -t bazaar-admin .
docker run -p 3000:3000 bazaar-admin
```

## 🤝 Contributing

This admin panel is designed to be extensible. New blocks can be added in the `src/blocks/` directory and registered in the global configurations.

## 📝 License

Built for Bazaar Pro React Ecommerce Template - Custom implementation showcasing modern web development practices.

---

**Showcase Skills**: Next.js 13, Payload CMS, TypeScript, Supabase, Dynamic CMS, Ecommerce Admin Systems, Content Management, API Design
