export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-10">
      <header className="border-b border-gray-200 dark:border-editorial-cardDarkBorder pb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-950 dark:text-white mb-2">
          Financial & Investment Disclaimer
        </h1>
        <p className="text-xs font-mono text-gray-500">Notice to Readers</p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 text-sm leading-relaxed">
        <div className="p-6 rounded-xl bg-gold-500/10 border-l-4 border-gold-500 text-gray-900 dark:text-gray-200 font-medium">
          The dispatches, market commentaries, and bullion analysis published on GoldMagazines are strictly for informational, educational, and journalistic purposes. No content published constitutes individualized financial, legal, or investment advice.
        </div>

        <h2 className="text-xl font-serif font-bold text-gray-950 dark:text-white">1. Not an Investment Advisory</h2>
        <p>
          GoldMagazines is not a registered investment advisor, broker-dealer, or commodity trading advisor under SEC, FINRA, FCA, or Swiss FINMA regulatory bodies. You should never execute financial trades or allocate capital based solely on editorial commentary.
        </p>

        <h2 className="text-xl font-serif font-bold text-gray-950 dark:text-white">2. Commodity & Volatility Risks</h2>
        <p>
          Precious metals, sovereign bonds, and tangible luxury collectibles involve substantial market risk, liquidity variations, and storage considerations. Past asset performance is no guarantee of future returns.
        </p>

        <h2 className="text-xl font-serif font-bold text-gray-950 dark:text-white">3. Independent Consultation</h2>
        <p>
          Always seek the advice of a certified independent financial advisor, legal counsel, or tax professional prior to making significant portfolio commitments.
        </p>
      </div>
    </div>
  );
}
