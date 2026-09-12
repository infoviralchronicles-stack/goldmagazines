export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-10">
      <header className="border-b border-gray-200 dark:border-editorial-cardDarkBorder pb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-950 dark:text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-gray-500">Legal Agreement & Access Rules</p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 text-sm leading-relaxed">
        <p>
          Welcome to <strong>GoldMagazines</strong>. By accessing our platform, website, feeds, and private memos, you agree to abide by these Terms of Service.
        </p>

        <h2 className="text-xl font-serif font-bold text-gray-950 dark:text-white">1. Intellectual Property</h2>
        <p>
          All original commentary, custom layouts, mastheads, logos, and curated dossiers published by GoldMagazines are protected by international copyright laws. Any unauthorized scraping, content reproduction, or commercial re-distribution without explicit written permission is strictly prohibited.
        </p>

        <h2 className="text-xl font-serif font-bold text-gray-950 dark:text-white">2. External Links & Syndication Attributions</h2>
        <p>
          GoldMagazines frequently features outbound links to original wire services, sovereign central bank filings, and international auction houses. We do not assume responsibility for external website content, terms, or privacy practices.
        </p>

        <h2 className="text-xl font-serif font-bold text-gray-950 dark:text-white">3. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with international digital media publishing standards.
        </p>
      </div>
    </div>
  );
}
