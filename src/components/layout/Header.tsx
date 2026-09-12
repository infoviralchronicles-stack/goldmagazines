'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Shield, TrendingUp, DollarSign } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const CATEGORIES = [
  { name: 'Features', href: '/category/features' },
  { name: 'Business & Finance', href: '/category/business' },
  { name: 'Style & Luxury', href: '/category/style-luxury' },
  { name: 'Tech & Innovation', href: '/category/tech' },
  { name: 'Culture & Lifestyle', href: '/category/culture' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="w-full bg-white dark:bg-editorial-dark border-b border-gray-200 dark:border-editorial-cardDarkBorder transition-colors sticky top-0 z-50">

      {/* Main Luxury Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gold-500 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center Logo */}
        <div className="flex flex-col items-center flex-1 lg:flex-none">
          <Link href="/" className="group text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-widest uppercase text-gray-950 dark:text-white transition-all group-hover:text-gold-500">
              GOLD<span className="gold-gradient-text font-normal">MAGAZINES</span>
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-gold-600 dark:text-gold-400 mt-0.5">
              The Sovereign Wealth & Luxury Journal
            </p>
          </Link>
        </div>

        {/* Actions (Search, Dark Mode, Subscribe CTA) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search articles"
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gold-500 transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>

          <ThemeToggle />

          <Link
            href="#newsletter"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 transition-all shadow-sm"
          >
            Dispatch
          </Link>
        </div>
      </div>

      {/* Primary Editorial Navigation Bar (Desktop) */}
      <nav className="hidden lg:block border-t border-gray-100 dark:border-gray-800/60 bg-white/50 dark:bg-editorial-dark/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center space-x-8 py-3 text-xs uppercase tracking-wider font-semibold font-sans">
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-100 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          >
            Home
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/search"
            className="text-gold-600 dark:text-gold-400 hover:text-gold-500 transition-colors flex items-center"
          >
            <TrendingUp className="w-3.5 h-3.5 mr-1" /> Search
          </Link>
        </div>
      </nav>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div className="border-t border-b border-gold-500/30 bg-gray-50/90 dark:bg-editorial-cardDark/90 backdrop-blur-md px-4 py-3">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex items-center">
            <Search className="w-5 h-5 text-gold-500 mr-3" />
            <input
              type="text"
              placeholder="Search precious metals, market forecasts, luxury assets, collectors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none font-sans"
            />
            <button
              type="submit"
              className="ml-2 px-3 py-1 bg-gold-500 text-black text-xs font-semibold uppercase tracking-wider rounded"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-editorial-dark px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 py-1"
            >
              Home
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gold-500 py-1"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gold-600 dark:text-gold-400 py-1"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
