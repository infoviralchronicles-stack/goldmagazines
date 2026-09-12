export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-10">
      <header className="text-center space-y-4 border-b border-gray-200 dark:border-editorial-cardDarkBorder pb-10">
        <span className="text-xs uppercase font-mono tracking-widest text-gold-600 dark:text-gold-400 font-bold">
          Institutional Profile
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-gray-950 dark:text-white">
          About GoldMagazines
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-serif max-w-2xl mx-auto italic">
          The international journal of sovereign wealth, monetary reserves, and unencumbered tangible luxury.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-gray-700 dark:text-gray-300 space-y-6">
        <p className="lead text-xl font-serif leading-relaxed text-gray-900 dark:text-gray-100">
          Founded as an independent chronicle for discerning asset allocators, family offices, and high-horology collectors, <strong>GoldMagazines</strong> bridges the gap between macroeconomic sovereign bullion strategy and timeless material wealth.
        </p>

        <h2 className="text-2xl font-serif font-bold text-gray-950 dark:text-white mt-8">Our Core Focus</h2>
        <p>
          In a world defined by monetary debasement and geopolitical re-alignment, true capital preservation requires physical certainty. We provide unfiltered reportage on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sovereign Gold Reserves:</strong> Tracking bilateral central bank bullion flows, vault repatriation, and Tier-1 Basel III collateral.</li>
          <li><strong>Macroeconomic Hedging:</strong> Yield curve dynamics, inflation mitigation, and de-dollarization frameworks.</li>
          <li><strong>Ultra-Rare Collectibles:</strong> Independent high horology, museum-grade gems, and blue-chip historical numismatics.</li>
          <li><strong>Generational Preservation:</strong> Multi-jurisdictional family office architecture and tangible asset protection.</li>
        </ul>

        <h2 className="text-2xl font-serif font-bold text-gray-950 dark:text-white mt-8">Editorial Integrity</h2>
        <p>
          We do not solicit retail trading brokerage fees, endorse algorithmic crypto schemes, or accept paid undisclosed promotions. Our dispatches are produced under strict international journalism codes of conduct.
        </p>
      </div>
    </div>
  );
}
