const { PrismaClient } = require('@prisma/client');
const path = require('path');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(process.cwd(), 'prisma', 'dev.db')}`,
    },
  },
});

async function main() {
  console.log('Publishing SEO Optimized Article for "julia roberts"...');

  let author = await prisma.user.findFirst();
  if (!author) {
    console.error('No author found');
    process.exit(1);
  }

  let cultureCategory = await prisma.category.findFirst({
    where: {
      OR: [
        { slug: 'culture' },
        { slug: 'culture-lifestyle' },
        { name: { contains: 'Culture' } },
      ],
    },
  });

  if (!cultureCategory) {
    cultureCategory = await prisma.category.findFirst();
  }

  const title = "The Enduring Cinema and Cultural Impact of Julia Roberts";
  const slug = "enduring-cinema-cultural-impact-julia-roberts";
  const excerpt = "An in-depth exploration into the illustrious career of Julia Roberts, charting her journey from breakout romantic icon to Academy Award-winning powerhouse in global cinema.";

  const content = `
<div class="space-y-6">
  <div class="bg-gold-500/10 border-l-4 border-gold-500 p-5 rounded-r-lg my-6">
    <h3 class="text-sm font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 font-bold mb-2">Featured Snippet: What Defines the Enduring Appeal of Julia Roberts?</h3>
    <p class="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      Julia Roberts remains one of the most bankable and influential figures in modern Hollywood history, characterized by her peerless box office record, versatile dramatic range, and the definitive romantic comedies of the nineteen-nineties. Her Oscar-winning tour de force in Erin Brockovich permanently transformed compensation parity for female actors and solidified her position as a quintessential American screen legend.
    </p>
  </div>

  <p class="lead text-lg font-serif leading-relaxed text-gray-800 dark:text-gray-100">
    Few performers have commanded the silver screen with the luminous authenticity and enduring warmth that define the career of Julia Roberts. Across more than three decades in international entertainment, Roberts transitioned effortlessly from defining the golden age of romantic comedies to headlining gripping prestige dramas and independent cinema masterpieces. Her impact transcends box office metrics, establishing a blueprint for star-driven Hollywood power that continues to influence contemporary storytelling.
  </p>

  <h2 class="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-8 mb-4">
    The Meteoric Ascent: Defining an Era of Romantic Cinema
  </h2>
  <p>
    The early nineteen-nineties witnessed an unprecedented cultural phenomenon when Roberts headlined classic cinematic releases that revitalized the romantic genre. Her irresistible charm, magnetic smile, and innate comic timing transformed productions like Pretty Woman, My Best Friend's Wedding, and Notting Hill into enduring global sensations that continue to captivate multi-generational audiences today.
  </p>
  <p>
    During this period, Roberts brought an unprecedented depth and accessibility to her heroines. Rather than portraying conventional romantic archetypes, her characters exhibited genuine wit, vulnerability, independent agency, and spirited humor. This nuanced perspective established her as the premiere leading lady of American cinema and set extraordinary commercial records worldwide.
  </p>

  <h2 class="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-8 mb-4">
    Dramatic Versatility and the Academy Award Triumph
  </h2>
  <p>
    While audiences embraced her comedic brilliance, Roberts repeatedly challenged herself with complex dramatic narratives. Films such as Steel Magnolias, The Pelican Brief, and Sleeping with the Enemy highlighted her ability to convey quiet intensity, sharp intellectual conviction, and profound emotional vulnerability under immense pressure.
  </p>
  <p>
    The zenith of her critical acclaim arrived with her portrayal of legal clerk and activist Erin Brockovich. Delivering a tour de force performance that garnered her the Academy Award for Best Actress, Roberts captured both the fiery tenacity and maternal warmth of the real-life crusader. The role was not merely an artistic triumph; it broke industry records by securing her unprecedented twenty-million-dollar compensation, resetting historical pay paradigms for women across the global entertainment industry.
  </p>

  <h2 class="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-8 mb-4">
    Later Collaborations, Ensemble Mastery, and Modern Dispatches
  </h2>
  <p>
    In subsequent chapters of her distinguished filmography, Roberts demonstrated remarkable discernment in curating high-caliber ensemble productions and auteur-driven cinema. Her dynamic collaborations with director Steven Soderbergh across the Ocean's Eleven franchise, alongside resonant adaptations like August: Osage County and Wonder, proved her enduring capacity to elevate every creative ensemble she joins.
  </p>
  <p>
    Recently, her lead performance in the dystopian psychological thriller Leave the World Behind demonstrated her fearless engagement with modern technological anxiety and societal fractures. Much like our readers exploring <a href="/category/culture" class="text-gold-600 dark:text-gold-400 font-medium underline hover:text-gold-500">Culture & Lifestyle trends</a> and cinematic artistry, audiences appreciate her ability to mirror contemporary human dilemmas with timeless poise.
  </p>

  <h2 class="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-8 mb-4">
    Philanthropy, Global Ambassadorship, and Personal Grace
  </h2>
  <p>
    Beyond the glare of Hollywood premiere spotlights, Roberts has maintained a fiercely guarded personal life grounded in family devotion and international humanitarian advocacy. Serving as a dedicated global ambassador for UNICEF and supporting environmental conservation initiatives, she channels her influential platform toward meaningful social advancement without sensationalism.
  </p>
  <p>
    Her collaborative luxury partnerships with iconic European fine jewelry houses and prestigious horology ateliers further underscore her status as an arbiter of understated sophistication. Her poise mirrors the timeless ideals celebrated across our <a href="/article/evolution-of-smart-phones-flagship-guide" class="text-gold-600 dark:text-gold-400 font-medium underline hover:text-gold-500">modern flagship technology</a> and design chronicles, blending classical elegance with contemporary relevance.
  </p>

  <div class="border-t border-gray-200 dark:border-gray-800 pt-6 mt-8">
    <p class="font-serif italic text-gray-600 dark:text-gray-400">
      <strong>Closing Reflection:</strong> In a fast-moving entertainment landscape dominated by fleeting digital media, Julia Roberts embodies the timeless power of authentic star presence. Her enduring filmography, trailblazing industry legacy, and steadfast artistic integrity ensure her position as one of the most celebrated and beloved cultural icons of our time.
    </p>
  </div>
</div>
`;

  const article = await prisma.article.upsert({
    where: { slug },
    update: {
      title,
      excerpt,
      content,
      readTime: 6,
      status: 'PUBLISHED',
      publishedAt: new Date(),
      isFeatured: true,
      isTrending: true,
      categoryId: cultureCategory.id,
      featuredImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Elegant portrait representing Hollywood cinema star Julia Roberts',
      metaTitle: 'The Enduring Cinema and Cultural Legacy of Julia Roberts',
      metaDescription: 'Discover the iconic career of Julia Roberts: from Pretty Woman and Erin Brockovich to modern cinema, awards, philanthropy, and lasting cultural impact.',
    },
    create: {
      title,
      slug,
      excerpt,
      content,
      readTime: 6,
      status: 'PUBLISHED',
      publishedAt: new Date(),
      isFeatured: true,
      isTrending: true,
      categoryId: cultureCategory.id,
      authorId: author.id,
      featuredImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
      imageAlt: 'Elegant portrait representing Hollywood cinema star Julia Roberts',
      metaTitle: 'The Enduring Cinema and Cultural Legacy of Julia Roberts',
      metaDescription: 'Discover the iconic career of Julia Roberts: from Pretty Woman and Erin Brockovich to modern cinema, awards, philanthropy, and lasting cultural impact.',
    },
  });

  console.log('Successfully published article:');
  console.log(`Title: ${article.title}`);
  console.log(`Slug: /article/${article.slug}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
