# Next.js E-commerce Landing Starter

Production-ready landing page optimized for paid traffic and product launches with strong SEO, tracking, and lead capture capabilities.

![Landing Page Preview](https://github.com/user-attachments/assets/095491ae-ad95-4339-bd8d-7ec75b13a91b)

## Features

- ⚡ **Next.js 14+** with App Router and TypeScript strict mode
- 🎨 **Tailwind CSS** for styling with modern responsive design
- 🔍 **SEO Optimized** with comprehensive metadata and structured data
- 📊 **Analytics Ready** with GA4, GTM, and Meta Pixel integration
- 🗺️ **Sitemap & Robots.txt** auto-generation with next-sitemap
- 📱 **Mobile-First** responsive design
- 🚀 **Performance Optimized** with Next.js image optimization (AVIF/WebP)
- 🔒 **Type Safe** with TypeScript and typed routes
- 📧 **Lead Capture Ready** with environment variables for email integration

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-ecommerce-landing-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your actual values:
   ```env
   SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_META_PIXEL_ID=123456789
   RESEND_API_KEY=re_xxxxxxxxxx
   CONTACT_TO_EMAIL=contact@yourdomain.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes sitemap generation)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global Tailwind CSS
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   └── analytics.tsx      # Analytics tracking components
├── public/               # Static assets
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # Auto-generated sitemap
├── .env.example          # Environment variables template
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next-sitemap.config.js # Sitemap generation config
```

## Analytics Integration

The starter automatically loads analytics scripts when environment variables are provided:

- **Google Analytics 4**: Set `NEXT_PUBLIC_GA_ID`
- **Google Tag Manager**: Set `NEXT_PUBLIC_GTM_ID`
- **Meta Pixel**: Set `NEXT_PUBLIC_META_PIXEL_ID`

All scripts are loaded with `next/script` using the `afterInteractive` strategy for optimal performance.

## SEO Features

- Comprehensive metadata with Open Graph and Twitter Cards
- Automatic sitemap generation with `next-sitemap`
- Robots.txt configuration
- Structured data ready
- Image optimization with AVIF/WebP support
- Fast loading optimized for Core Web Vitals

## Customization

1. **Update metadata** in `app/layout.tsx`
2. **Modify styling** using Tailwind CSS classes
3. **Add components** in the `components/` directory
4. **Configure analytics** via environment variables
5. **Customize sitemap** in `next-sitemap.config.js`

## Deployment

This starter is ready to deploy on:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

Make sure to set up environment variables in your deployment platform.

## License

MIT License - feel free to use this for your projects!