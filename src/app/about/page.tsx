import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | GoldMagazines Editorial Profile & Mission',
  description: 'Learn about GoldMagazines, our journalistic principles, editorial mission, and global coverage spanning technology, business, luxury lifestyle, and culture.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-10">
      <header className="text-center space-y-4 border-b border-gray-200 dark:border-editorial-cardDarkBorder pb-10">
        <span className="text-xs uppercase font-mono tracking-widest text-gold-600 dark:text-gold-400 font-bold">
          About Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-gray-950 dark:text-white">
          About GoldMagazines
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-serif max-w-2xl mx-auto italic">
          The premier digital magazine for modern insights, business & finance, tech innovations, and luxury lifestyle.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-gray-700 dark:text-gray-300 space-y-6">
        <p className="lead text-xl font-serif leading-relaxed text-gray-900 dark:text-gray-100">
          <strong>GoldMagazines</strong> is an authoritative digital lifestyle and journalism publication delivering comprehensive coverage across modern technology, international commerce, high luxury, and contemporary culture.
        </p>

        <h2 className="text-2xl font-serif font-bold text-gray-950 dark:text-white mt-8">What We Cover</h2>
        <p>
          Our mission is to bring readers deep perspectives, informed reporting, and thoughtful commentary across key domains:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tech & Innovation:</strong> In-depth dispatches on artificial intelligence, future tech breakthroughs, and digital frontiers.</li>
          <li><strong>Business & Finance:</strong> Macro trends, capital markets, sovereign developments, and entrepreneurial leadership.</li>
          <li><strong>Style & Luxury:</strong> High design, fine horology, bespoke craftsmanship, and luxury living.</li>
          <li><strong>Culture & Lifestyle:</strong> Thoughtful critiques, global trends, travel, and cultural chronicles.</li>
        </ul>

        <h2 className="text-2xl font-serif font-bold text-gray-950 dark:text-white mt-8">Editorial Integrity</h2>
        <p>
          We hold our writing to stringent standards of accuracy, editorial independence, and quality journalism. Our team is committed to providing valuable, factual, and engaging stories for global readers.
        </p>
      </div>
    </div>
  );
}
