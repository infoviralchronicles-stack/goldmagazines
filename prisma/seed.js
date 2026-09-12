const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('--- Seeding GoldMagazines Editorial Database ---');

  // 1. Chief Editor
  const adminPassword = await bcrypt.hash('admin123456', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@goldmagazines.com' },
    update: {},
    create: {
      email: 'admin@goldmagazines.com',
      name: 'Julian Vance-Moreau',
      passwordHash: adminPassword,
      role: 'ADMIN',
      bio: 'Executive Editor-at-Large covering central bank bullion, high-horology, and sovereign wealth portfolios across Zurich, London, and Dubai.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      twitter: 'https://twitter.com/goldmagazines',
      linkedin: 'https://linkedin.com/company/goldmagazines',
      website: 'https://goldmagazines.com',
    },
  });

  // 2. Categories
  const categories = [
    {
      name: 'Gold & Bullion',
      slug: 'gold-bullion',
      color: '#d4af37',
      description: 'Physical bullion, central bank allocations, spot market analysis, and mining equity developments.',
      metaTitle: 'Gold & Bullion Market Intelligence | GoldMagazines',
      metaDescription: 'Institutional coverage of physical gold, gold ETFs, sovereign vaults, and global monetary policy.',
    },
    {
      name: 'Global Markets',
      slug: 'global-markets',
      color: '#b89025',
      description: 'Macroeconomics, interest rate cycles, currency debasement, and treasury yield dynamics.',
      metaTitle: 'Global Financial Markets & Macroeconomics | GoldMagazines',
      metaDescription: 'Strategic analysis on global currencies, treasury yields, and institutional capital preservation.',
    },
    {
      name: 'Luxury Assets',
      slug: 'luxury-assets',
      color: '#926e1c',
      description: 'High horology, rare gemology, bespoke numismatics, superyachts, and architectural estates.',
      metaTitle: 'Luxury Collectibles & Tangible Assets | GoldMagazines',
      metaDescription: 'World-class reporting on rare watches, fine jewelry, private aviation, and trophy real estate.',
    },
    {
      name: 'Wealth & Family Offices',
      slug: 'wealth-family-offices',
      color: '#60451b',
      description: 'Multi-generational estate structuring, private debt, hedge allocations, and geopolitical hedging.',
      metaTitle: 'Wealth Preservation & Family Office Strategy | GoldMagazines',
      metaDescription: 'Elite advisory insights for sovereign funds, family offices, and ultra-high-net-worth investors.',
    },
    {
      name: 'Culture & Lifestyle',
      slug: 'culture-lifestyle',
      color: '#c09838',
      description: 'The philosophy of enduring taste, private members clubs, fine vintages, and high society chronicle.',
      metaTitle: 'Luxury Culture & High Living | GoldMagazines',
      metaDescription: 'An insider look into global elite culture, private clubs, and refined luxury lifestyle.',
    }
  ];

  const categoryMap = {};
  for (const cat of categories) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });
    categoryMap[cat.slug] = created.id;
  }

  // 3. Articles (High Quality Editorial Pieces)
  const sampleArticles = [
    {
      title: 'The Sovereign Bullion Pivot: How Central Banks Are Rewriting Reserve Currency Rules',
      slug: 'sovereign-bullion-pivot-central-banks',
      excerpt: 'As geopolitical fragmentation accelerates, central banks accumulated over 1,000 metric tons of physical gold for the second consecutive year, signaling a structural return to unencumbered hard collateral.',
      categorySlug: 'gold-bullion',
      isFeatured: true,
      isTrending: true,
      isEditorsPick: true,
      readTime: 6,
      viewsCount: 4280,
      featuredImage: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Tier-1 vaulted physical gold bullion bars',
      content: `
<p class="lead text-xl md:text-2xl font-serif leading-relaxed text-gray-800 dark:text-gray-100 mb-8">
  Across the subterranean vaults of Basel, London, and Singapore, a quiet institutional migration is underway. Sovereign balance sheets are systematically rotating toward unallocated, counterparty-free physical gold bullion.
</p>

<h2 class="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-4">The Demise of Risk-Free Paper Assets</h2>
<p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
  For four decades, G7 sovereign bonds formed the unquestioned foundation of global reserve management. However, the weaponization of foreign reserves and relentless debt ceiling expansions have catalyzed what the Bank for International Settlements (BIS) quietly categorizes as a tier-1 collateral reallocation.
</p>

<div class="my-8 p-6 rounded-2xl bg-gold-50 dark:bg-editorial-subtle border-l-4 border-gold-500">
  <span class="text-xs uppercase tracking-widest font-mono text-gold-600 dark:text-gold-400 font-semibold block mb-1">Market Metric</span>
  <p class="text-lg font-serif italic text-gray-900 dark:text-gold-200">
    "Over 28% of total central bank annual procurement now bypasses Western clearinghouses altogether, executed directly via bilaterally settled physical swaps."
  </p>
</div>

<h2 class="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-4">Repatriation Trends Accelerate</h2>
<p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
  According to proprietary data from European and Middle Eastern treasury desks, nations that historically stored bullion in New York and London are increasingly repatriating bars to domestic soil. The rationale is simple: in an era of jurisdictional sanctions, physical custody is the only form of true sovereignty.
</p>

<blockquote class="border-l-2 border-gold-500 pl-6 my-8 text-xl font-serif italic text-gray-800 dark:text-gray-200">
  "Gold is not merely an inflation hedge; it is the ultimate neutral monetary asset in an adversarial multipolar world order."
</blockquote>

<h2 class="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-4">Strategic Implications for Family Offices</h2>
<p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
  Family offices managing generational capital are mirroring this sovereign playbook. High-net-worth liquidity frameworks are reallocating 5% to 15% of balanced portfolios into allocated, non-bank vaulting facilities across Zurich, Singapore, and Liechtenstein.
</p>
      `,
    },
    {
      title: 'High Horology as Hard Currency: The Collectors Redefining Ultra-Rare Timepieces',
      slug: 'high-horology-as-hard-currency-timepieces',
      excerpt: 'Independent master watchmakers and historic complications are outperforming traditional luxury benchmarks, emerging as portable, un-hackable tangible capital.',
      categorySlug: 'luxury-assets',
      isFeatured: false,
      isTrending: true,
      isEditorsPick: true,
      readTime: 5,
      viewsCount: 3120,
      featuredImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Mechanical luxury watch with yellow gold tourbillon',
      content: `
<p class="lead text-xl md:text-2xl font-serif leading-relaxed text-gray-800 dark:text-gray-100 mb-8">
  When Geneva and Hong Kong auction hammers fall at eight-figure valuations, the buyers are rarely fashion enthusiasts. They are asset allocators treating minute repeaters, perpetual calendars, and unique enamel dials as blue-chip tangible stores of wealth.
</p>

<h2 class="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-4">The Scarcity Premium of Independent Masters</h2>
<p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
  While mass luxury brands produce hundreds of thousands of pieces annually, ateliers such as Philippe Dufour, F.P. Journe, and Kari Voutilainen produce between 20 and 900 pieces per year worldwide. This structural supply cap guarantees that demand from expanding global fortunes permanently eclipses output.
</p>
      `,
    },
    {
      title: 'Family Offices in 2026: Navigating Global De-Dollarization and Liquidity Fortress Design',
      slug: 'family-offices-2026-liquidity-fortress-strategy',
      excerpt: 'A comprehensive study into how the world’s most sophisticated family offices are constructing counterparty-resilient structures against systemic volatility.',
      categorySlug: 'wealth-family-offices',
      isFeatured: false,
      isTrending: false,
      isEditorsPick: true,
      readTime: 7,
      viewsCount: 2450,
      featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Monolithic private financial headquarters architecture',
      content: `
<p class="lead text-xl md:text-2xl font-serif leading-relaxed text-gray-800 dark:text-gray-100 mb-8">
  The traditional 60/40 equity-bond allocation is officially obsolete for top-tier wealth managers. In its place stands the multi-jurisdictional liquidity fortress—a three-tiered capital architecture built to withstand monetary revaluations.
</p>

<h2 class="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mt-10 mb-4">Tier 1: Sovereign Vaulted Collateral</h2>
<p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
  Allocated gold, physical silver, and unencumbered raw land held outside the commercial banking matrix form the base tier. These assets produce no yield, yet guarantee insolvency immunity.
</p>
      `,
    },
    {
      title: 'The Platinum Paradigm: Why Industrial Deficits Are Igniting a Re-Rating Against Gold',
      slug: 'platinum-paradigm-industrial-deficits-gold-spread',
      excerpt: 'With the gold-to-platinum ratio at historic extremes and green hydrogen catalysts accelerating, institutional investors are eyeing the trade of the decade.',
      categorySlug: 'gold-bullion',
      isFeatured: false,
      isTrending: true,
      isEditorsPick: false,
      readTime: 4,
      viewsCount: 1890,
      featuredImage: 'https://images.unsplash.com/photo-1579247075775-68007a70823b?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Bullion minted coins and ingot bars',
      content: `
<p class="lead text-xl md:text-2xl font-serif leading-relaxed text-gray-800 dark:text-gray-100 mb-8">
  Historically, platinum traded at a notable premium to gold. Today, gold commands more than double the price of its denser sister metal. As mining supply from South Africa constricts, commodity strategists foresee a violent mean reversion.
</p>
      `,
    },
    {
      title: 'The Architecture of Solitude: Inside the Rise of Secluded Ultra-Prime Sanctuaries',
      slug: 'architecture-of-solitude-ultra-prime-sanctuaries',
      excerpt: 'From private islands in the Hebrides to self-sufficient alpine compounds in the Engadin, luxury real estate is undergoing a monumental psychological pivot toward absolute privacy.',
      categorySlug: 'culture-lifestyle',
      isFeatured: false,
      isTrending: false,
      isEditorsPick: false,
      readTime: 5,
      viewsCount: 1670,
      featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Luxury secluded minimalist estate surrounded by nature',
      content: `
<p class="lead text-xl md:text-2xl font-serif leading-relaxed text-gray-800 dark:text-gray-100 mb-8">
  Opulence in the modern era is no longer measured by penthouse heights in congested financial capitals. True luxury is sovereign privacy: vast acreages, autonomous micro-grids, and uncompromised architectural tranquility.
</p>
      `,
    }
  ];

  for (const art of sampleArticles) {
    await prisma.article.upsert({
      where: { slug: art.slug },
      update: {},
      create: {
        title: art.title,
        slug: art.slug,
        excerpt: art.excerpt,
        content: art.content,
        featuredImage: art.featuredImage,
        imageAlt: art.imageAlt,
        readTime: art.readTime,
        viewsCount: art.viewsCount,
        status: 'PUBLISHED',
        isFeatured: art.isFeatured,
        isTrending: art.isTrending,
        isEditorsPick: art.isEditorsPick,
        metaTitle: `${art.title} | GoldMagazines`,
        metaDescription: art.excerpt,
        categoryId: categoryMap[art.categorySlug],
        authorId: admin.id,
        publishedAt: new Date(),
      },
    });
  }

  // 4. RSS Sources for Real-World Automated Publishing
  const sources = [
    {
      name: 'World Gold Council News & Insights',
      url: 'https://www.gold.org/rss/gold-news.xml',
      categorySlug: 'gold-bullion',
      autoPublishMode: 'REVIEW',
      fetchIntervalMinutes: 60,
    },
    {
      name: 'Kitco Precious Metals Headlines',
      url: 'https://www.kitco.com/rss/news.xml',
      categorySlug: 'gold-bullion',
      autoPublishMode: 'REVIEW',
      fetchIntervalMinutes: 30,
    },
    {
      name: 'Bloomberg Markets & Commodities Feed',
      url: 'https://feeds.bloomberg.com/markets/news.rss',
      categorySlug: 'global-markets',
      autoPublishMode: 'REVIEW',
      fetchIntervalMinutes: 60,
    },
    {
      name: 'Robb Report Luxury & Lifestyle',
      url: 'https://robbreport.com/feed/',
      categorySlug: 'luxury-assets',
      autoPublishMode: 'REVIEW',
      fetchIntervalMinutes: 120,
    }
  ];

  for (const s of sources) {
    if (categoryMap[s.categorySlug]) {
      await prisma.source.upsert({
        where: { url: s.url },
        update: {},
        create: {
          name: s.name,
          url: s.url,
          categoryId: categoryMap[s.categorySlug],
          autoPublishMode: s.autoPublishMode,
          fetchIntervalMinutes: s.fetchIntervalMinutes,
          isActive: true,
        },
      });
    }
  }

  // 5. Initial Site Settings
  const settings = [
    { key: 'site_title', value: 'GoldMagazines' },
    { key: 'site_tagline', value: 'The World’s Premier Authority on Gold, Markets & Sovereign Living' },
    { key: 'site_description', value: 'GoldMagazines delivers unmatched intelligence on gold markets, sovereign wealth, luxury collectibles, and private asset preservation.' },
    { key: 'adsense_client_id', value: 'ca-pub-9876543210123456' },
    { key: 'adsense_enabled', value: 'true' },
    { key: 'contact_email', value: 'editor@goldmagazines.com' },
    { key: 'twitter_handle', value: '@goldmagazines' },
    { key: 'meta_keywords', value: 'gold, gold price, precious metals, bullion, luxury assets, family office, sovereign wealth, market intelligence' }
  ];

  for (const st of settings) {
    await prisma.siteSetting.upsert({
      where: { key: st.key },
      update: { value: st.value },
      create: st,
    });
  }

  console.log('--- Database Seeded Successfully! ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
