import { prisma } from '@/lib/prisma';
import ArticleCard from '@/components/magazine/ArticleCard';
import { Search } from 'lucide-react';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (searchParams.q || '').trim();

  let articles: any[] = [];
  if (query) {
    articles = await prisma.article.findMany({
      where: {
        status: 'PUBLISHED',
        OR: [
          { title: { contains: query } },
          { excerpt: { contains: query } },
          { content: { contains: query } },
        ],
      },
      include: { category: true, author: true },
      orderBy: { publishedAt: 'desc' },
      take: 24,
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-10">
      {/* Search Header Form */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-950 dark:text-white">
          Intelligence Archives & Index Search
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Query our curated repository of precious metals, sovereign bullion flows, and luxury asset reports.
        </p>

        <form method="GET" action="/search" className="pt-4 flex items-center max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search by keyword, asset, or theme..."
              className="w-full pl-11 pr-4 py-3 rounded-l-xl bg-white dark:bg-editorial-cardDark border border-gray-200 dark:border-editorial-cardDarkBorder text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gold-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-gold-500 text-black text-xs font-bold uppercase tracking-wider rounded-r-xl hover:bg-gold-400 transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results Header */}
      {query && (
        <div className="border-b border-gray-200 dark:border-editorial-cardDarkBorder pb-4 text-xs font-mono text-gray-500 dark:text-gray-400 flex items-center justify-between">
          <span>Search query: &ldquo;{query}&rdquo;</span>
          <span>{articles.length} dispatches indexed</span>
        </div>
      )}

      {/* Results Grid */}
      {query && articles.length === 0 && (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400 font-mono text-sm">
          No dispatches matching &ldquo;{query}&rdquo; found. Try broadening your terms or explore our categories.
        </div>
      )}

      {articles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <ArticleCard key={art.id} article={art} layout="standard" />
          ))}
        </div>
      )}
    </div>
  );
}
