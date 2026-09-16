import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import HeroGrid from '@/components/magazine/HeroGrid';
import ArticleCard from '@/components/magazine/ArticleCard';
import AdBanner from '@/components/layout/AdBanner';
import { TrendingUp, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const revalidate = 60;

export default async function HomePage() {
  const now = new Date();

  // 1. Fetch Lead & Featured Articles (only live articles)
  const featuredArticles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      publishedAt: { lte: now },
    },
    include: { category: true, author: true },
    orderBy: { publishedAt: 'desc' },
    take: 6,
  });

  const leadArticle = featuredArticles[0] || null;
  const secondaryArticles = featuredArticles.slice(1, 4);

  // 2. Fetch Trending / Most Viewed
  const trendingArticles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      isTrending: true,
      publishedAt: { lte: now },
    },
    include: { category: true, author: true },
    orderBy: { viewsCount: 'desc' },
    take: 6,
  });

  // 3. Fetch Editor's Picks (Always show 3 articles)
  let editorsPicks = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      isEditorsPick: true,
      publishedAt: { lte: now },
    },
    include: { category: true, author: true },
    orderBy: { publishedAt: 'desc' },
    take: 3,
  });

  // If fewer than 3 are tagged, fill with latest published articles so grid never has empty gaps
  if (editorsPicks.length < 3) {
    const existingIds = editorsPicks.map((a) => a.id);
    const fillers = await prisma.article.findMany({
      where: {
        status: 'PUBLISHED',
        publishedAt: { lte: now },
        id: { notIn: existingIds },
      },
      include: { category: true, author: true },
      orderBy: { publishedAt: 'desc' },
      take: 3 - editorsPicks.length,
    });
    editorsPicks = [...editorsPicks, ...fillers];
  }

  // 4. Fetch Category Spotlights
  const techArticles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      category: { slug: 'tech' },
      publishedAt: { lte: now },
    },
    include: { category: true, author: true },
    take: 4,
  });

  const cultureArticles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      category: { slug: 'culture' },
      publishedAt: { lte: now },
    },
    include: { category: true, author: true },
    orderBy: { publishedAt: 'desc' },
    take: 4,
  });

  const featuresArticles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      category: { slug: 'features' },
      publishedAt: { lte: now },
    },
    include: { category: true, author: true },
    orderBy: { publishedAt: 'desc' },
    take: 4,
  });

  const styleArticles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      category: { slug: 'style-luxury' },
      publishedAt: { lte: now },
    },
    include: { category: true, author: true },
    take: 4,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-12">
      {/* Top Editorial Leaderboard Ad */}
      <AdBanner slot="987654321" format="banner" label="Sponsorship" />

      {/* Hero Section */}
      {leadArticle && (
        <HeroGrid leadArticle={leadArticle} secondaryArticles={secondaryArticles} />
      )}

      {/* Editor's Curated Selection Bar */}
      {editorsPicks.length > 0 && (
        <section className="py-8 border-y border-gray-200 dark:border-editorial-cardDarkBorder">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Editor&apos;s Private Selection</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorsPicks.map((art) => (
              <ArticleCard key={art.id} article={art} layout="standard" />
            ))}
          </div>
        </section>
      )}

      {/* Two-Column Grid: Latest News Stream & Sticky Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Feed (8 Columns) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Category Section: Tech & Innovation */}
          {techArticles.length > 0 && (
            <section>
              <div className="flex items-center justify-between border-b-2 border-gold-500 pb-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-black text-gray-950 dark:text-white flex items-center">
                  Tech & Innovation
                </h2>
                <Link
                  href="/category/tech"
                  className="text-xs uppercase font-mono tracking-wider text-gold-600 dark:text-gold-400 hover:underline"
                >
                  View Section &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {techArticles.map((art) => (
                  <ArticleCard key={art.id} article={art} layout="standard" />
                ))}
              </div>
            </section>
          )}

          {/* In-Feed Responsive Native Ad Placement */}
          <AdBanner slot="456789123" format="horizontal" />

          {/* Category Section: Features & Long-form */}
          {featuresArticles.length > 0 && (
            <section>
              <div className="flex items-center justify-between border-b-2 border-gold-500 pb-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-black text-gray-950 dark:text-white flex items-center">
                  Features & Cover Stories
                </h2>
                <Link
                  href="/category/features"
                  className="text-xs uppercase font-mono tracking-wider text-gold-600 dark:text-gold-400 hover:underline"
                >
                  View Archive &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(featuresArticles.length >= 4 ? featuresArticles.slice(0, 4) : featuresArticles.slice(0, 2)).map((art) => (
                  <ArticleCard key={art.id} article={art} layout="standard" />
                ))}
              </div>
            </section>
          )}

          {/* Category Section: Culture & Lifestyle */}
          {cultureArticles.length > 0 && (
            <section>
              <div className="flex items-center justify-between border-b-2 border-gold-400 pb-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-black text-gray-950 dark:text-white flex items-center">
                  Culture & Lifestyle
                </h2>
                <Link
                  href="/category/culture"
                  className="text-xs uppercase font-mono tracking-wider text-gold-600 dark:text-gold-400 hover:underline"
                >
                  View Collection &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(cultureArticles.length >= 4 ? cultureArticles.slice(0, 4) : cultureArticles.slice(0, 2)).map((art) => (
                  <ArticleCard key={art.id} article={art} layout="standard" />
                ))}
              </div>
            </section>
          )}

          {/* Category Section: Style & Luxury */}
          {styleArticles.length > 0 && (
            <section>
              <div className="flex items-center justify-between border-b-2 border-[#926e1c] pb-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-black text-gray-950 dark:text-white flex items-center">
                  Style & Luxury
                </h2>
                <Link
                  href="/category/style-luxury"
                  className="text-xs uppercase font-mono tracking-wider text-gold-600 dark:text-gold-400 hover:underline"
                >
                  View Collection &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {styleArticles.map((art) => (
                  <ArticleCard key={art.id} article={art} layout="standard" />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky Editorial Sidebar (4 Columns) */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 h-fit">
          {/* Trending Bar */}
          <div className="p-5 rounded-2xl bg-white dark:bg-editorial-cardDark border border-gray-200 dark:border-editorial-cardDarkBorder shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-editorial-cardDarkBorder">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-white font-bold flex items-center">
                <TrendingUp className="w-4 h-4 text-gold-500 mr-2" /> Top Stories
              </h3>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-editorial-cardDarkBorder">
              {trendingArticles.map((art) => (
                <ArticleCard key={art.id} article={art} layout="horizontal" />
              ))}
            </div>
          </div>

          {/* Quick Category Directory */}
          <div className="p-5 rounded-2xl bg-white dark:bg-editorial-cardDark border border-gray-200 dark:border-editorial-cardDarkBorder shadow-sm space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-white font-bold flex items-center border-b border-gray-100 dark:border-editorial-cardDarkBorder pb-2">
              <Compass className="w-4 h-4 text-gold-500 mr-2" /> Featured Desks
            </h3>
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
              <Link href="/category/tech" className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-editorial-subtle text-gray-800 dark:text-gray-200 hover:bg-gold-500 hover:text-black transition-colors">
                Tech & Innovation
              </Link>
              <Link href="/category/features" className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-editorial-subtle text-gray-800 dark:text-gray-200 hover:bg-gold-500 hover:text-black transition-colors">
                Features & Cinema
              </Link>
              <Link href="/category/culture" className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-editorial-subtle text-gray-800 dark:text-gray-200 hover:bg-gold-500 hover:text-black transition-colors">
                Culture & Lifestyle
              </Link>
              <Link href="/category/business" className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-editorial-subtle text-gray-800 dark:text-gray-200 hover:bg-gold-500 hover:text-black transition-colors">
                Business & Finance
              </Link>
              <Link href="/category/style-luxury" className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-editorial-subtle text-gray-800 dark:text-gray-200 hover:bg-gold-500 hover:text-black transition-colors">
                Style & Luxury
              </Link>
            </div>
          </div>

          {/* Editorial Philosophy Statement Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gold-500/10 via-editorial-subtle to-transparent border border-gold-500/20 text-gray-800 dark:text-gray-200">
            <div className="flex items-center space-x-2 text-gold-600 dark:text-gold-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">The Standard</span>
            </div>
            <h4 className="text-base font-serif font-bold text-gray-950 dark:text-white mb-2">
              Uncompromised Hard-Asset Discretion
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              GoldMagazines operates under strict conflict-of-interest disclaimers. Our editorial staff does not engage in sponsored stock promotions or unverified algorithmic forecasts.
            </p>
            <Link
              href="/editorial-policy"
              className="text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline inline-flex items-center"
            >
              Read our full ethics charter &rarr;
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
