'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Shield, Award, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-editorial-dark border-t border-editorial-cardDarkBorder text-gray-300 transition-colors">
      {/* Newsletter VIP Dispatch Banner */}
      <section id="newsletter" className="border-b border-editorial-cardDarkBorder py-16 px-4 sm:px-8 bg-gradient-to-b from-[#111315] to-[#0c0d0e]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/20 mb-4">
            <Award className="w-3.5 h-3.5 mr-1.5" /> Private Circulation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            The Sovereign Intelligence Memo
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            Receive exclusive briefings on central bank bullion flows, unlisted high-horology private sales, and sovereign asset preservation. Delivered twice weekly.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center px-6 py-3 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-semibold">
              <CheckCircle className="w-4 h-4 mr-2" /> Welcome to the private circulation list. Check your inbox shortly.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your personal or family office email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-editorial-subtle border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-gold-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? 'Registering...' : (
                  <>
                    Subscribe <Send className="w-3.5 h-3.5 ml-2" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-[11px] text-gray-500 mt-4">
            Strict editorial discretion. No spam, ever. Unsubscribe with one click.
          </p>
        </div>
      </section>

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
          <div className="text-xs font-mono text-gray-500 pt-2">
            Zurich &bull; London &bull; Dubai &bull; New York
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
