import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-editorial-dark border-t border-editorial-cardDarkBorder text-gray-300 transition-colors">
      {/* Main Footer Links & Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Col 1: Brand & Ethos */}
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="inline-flex items-center space-x-2.5 group">
            <div className="relative w-8 h-8 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/gold-bar-icon.svg"
                alt="GoldMagazines Gold Bar"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-serif font-black tracking-wider uppercase text-white">
              GOLD<span className="gold-gradient-text font-normal">MAGAZINES</span>
            </span>
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed">
            The premier digital publication covering tech innovation, global business, luxury lifestyle, and world culture.
          </p>
          <div className="pt-1 text-xs">
            <a href="mailto:bulletmagazines@gmail.com" className="text-gray-400 hover:text-gold-400 transition-colors font-mono">
              bulletmagazines@gmail.com
            </a>
          </div>
        </div>

        {/* Col 2: Editorial Sections */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
            Categories
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/category/features" className="hover:text-gold-400 transition-colors">Features</Link></li>
            <li><Link href="/category/business" className="hover:text-gold-400 transition-colors">Business & Finance</Link></li>
            <li><Link href="/category/style-luxury" className="hover:text-gold-400 transition-colors">Style & Luxury</Link></li>
            <li><Link href="/category/tech" className="hover:text-gold-400 transition-colors">Tech & Innovation</Link></li>
            <li><Link href="/category/culture" className="hover:text-gold-400 transition-colors">Culture & Lifestyle</Link></li>
          </ul>
        </div>

        {/* Col 3: Company & Policy Pages */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
            Pages
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-gold-400 transition-colors">Disclaimer</Link></li>
            <li><Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Col 4: Feeds & Technology */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
            Syndication
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Real-time multi-source automated news aggregation and verified market intelligence.
          </p>
          <div className="flex flex-col space-y-2 text-xs">
            <Link href="/sitemap.xml" className="text-gray-400 hover:text-gold-400 flex items-center">
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-editorial-cardDarkBorder py-6 px-4 sm:px-8 text-center text-xs text-gray-500 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} GoldMagazines. All international rights reserved.</span>
          <span className="text-gray-600 text-[11px]">
            Financial journalism for educational & analytical purposes only. Not investment solicitation.
          </span>
        </div>
      </div>
    </footer>
  );
}
