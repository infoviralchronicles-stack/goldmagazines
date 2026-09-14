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
  const author = await prisma.user.findFirst();
  const featuresCat = await prisma.category.findUnique({ where: { slug: 'features' } });
  const cultureCat = await prisma.category.findUnique({ where: { slug: 'culture' } });

  if (!author || !featuresCat || !cultureCat) {
    throw new Error('Author or categories missing');
  }

  // Article 1: 12:00 PM Slot
  const art1Slug = 'definitive-guide-leonardo-dicaprio-movies-cinema-craft';
  const art1Content = `
<p class="lead text-lg font-serif italic text-gray-700 dark:text-gray-300 mb-6">
Leonardo DiCaprio represents one of the rare cinematic figures in modern Hollywood history who successfully transitioned from a teen heartthrob into an unrelenting force of uncompromising character drama and box office supremacy. Across four distinct decades, his selective choices have defined prestige American filmmaking.
</p>

<h2 id="early-breakouts">The Formative Mastery of Early Cinema</h2>
<p>
Long before Titanic transformed him into a worldwide household phenomenon, DiCaprio had already secured critical acclaim through searing character studies that revealed a mature, instinctive performer. His work alongside Robert De Niro in This Boy's Life and his heartbreaking Academy Award-nominated portrayal in What's Eating Gilbert Grape established a standard of raw authenticity that few peers could match. While early industry executives sought to channel his fame into conventional commercial franchises, he deliberately pivoted toward complex auteurs who prioritized psychological depth over safe Hollywood formulas.
</p>

<h2 id="scorsese-collaborations">The Scorsese Era and Prestige Collaborations</h2>
<p>
The defining turning point in DiCaprio's creative evolution came through his creative partnership with Martin Scorsese, creating a director-actor kinship that rivaled the golden age of cinema. Beginning with Gangs of New York and culminating through Gangster epics like The Departed, The Aviator, and The Wolf of Wall Street, this era pushed DiCaprio into volatile, ethically compromised, and boundary-pushing roles. Much like the classical longevity of <a href="/article/enduring-cinema-cultural-impact-julia-roberts" class="text-gold-600 dark:text-gold-400 font-semibold underline hover:text-gold-500">enduring Hollywood icons like Julia Roberts</a>, DiCaprio built a legacy where his name alone promised artistic distinction and commercial vitality.
</p>

<h2 id="academy-triumph">Physical Commitment and Academy Recognition</h2>
<p>
His relentless physical immersion reached its peak in Alejandro González Iñárritu’s The Revenant, an endurance test of frozen wilderness survival that ultimately earned him the long-deserved Academy Award for Best Actor. Rather than resting on accolades, his subsequent work in Quentin Tarantino’s Once Upon a Time in Hollywood and Martin Scorsese’s Killers of the Flower Moon demonstrated an actor continuously interrogating vulnerability, aging, and moral complicity. Today, his curated filmography remains an enduring benchmark for serious global cinema lovers and collectors alike.
</p>
  `.trim();

  const article1 = await prisma.article.upsert({
    where: { slug: art1Slug },
    update: {},
    create: {
      title: 'The Definitive Guide to Leonardo DiCaprio Movies: Cinema, Craft, and Cultural Impact',
      slug: art1Slug,
      excerpt: 'From early breakout indie dramas to iconic Scorsese collaborations and Academy Award triumph, explore the cinematic evolution and cultural legacy of Leonardo DiCaprio movies.',
      content: art1Content,
      featuredImage: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY0MTU0fDB8MXxzZWFyY2h8MXx8Y2luZW1hJTIwZmlsbSUyMGFjdG9yfGVufDB8fHx8MTc4OTM4MTQ3MHww&ixlib=rb-4.1.0&q=80&w=1200',
      imageAlt: 'Cinematic film clapperboard symbolizing prestige Hollywood movie sets',
      readTime: 6,
      status: 'PUBLISHED',
      isFeatured: true,
      isTrending: true,
      isEditorsPick: true,
      metaTitle: 'The Definitive Guide to Leonardo DiCaprio Movies | GoldMagazines',
      metaDescription: 'Discover the complete cinematic retrospective of Leonardo DiCaprio movies, featuring his greatest roles, auteur collaborations, and lasting impact on cinema.',
      publishedAt: new Date('2026-09-14T12:00:00.000Z'),
      categoryId: featuresCat.id,
      authorId: author.id,
    },
  });

  console.log('Created Article 1:', article1.title);

  // Article 2: 03:00 PM Slot
  const art2Slug = 'how-old-is-tom-cruise-ageless-hollywood-titan-box-office';
  const art2Content = `
<p class="lead text-lg font-serif italic text-gray-700 dark:text-gray-300 mb-6">
Tom Cruise stands as the undisputed champion of modern theatrical cinema, defying conventional Hollywood aging through unprecedented physical stunts, boundless charisma, and an unwavering commitment to the big-screen theatrical experience.
</p>

<h2 id="chronological-age">Understanding the Milestone and Ageless Persona</h2>
<p>
Born on July 3, 1962, in Syracuse, New York, Tom Cruise is currently sixty-four years of age. Yet in an industry frequently defined by rapid turnover and algorithmic trends, Cruise commands the global box office with the kinetic endurance and physical vitality of an athlete in their absolute prime. When Top Gun: Maverick crossed the billion-dollar threshold and revitalized global theater attendance following international lockdowns, audiences witnessed a veteran star proving that cinematic dedication transcends generational boundaries.
</p>

<h2 id="cinema-philosophy">A Philosophy Grounded in Practical Stunts and Authenticity</h2>
<p>
What truly separates Cruise from his contemporaries is his fierce rejection of synthetic green screens and digital stunt doubles. From scaling the exterior of Dubai's Burj Khalifa to hanging off airborne cargo planes and executing death-defying motorcycle cliff jumps in the Mission: Impossible saga, his physical commitment has reinvented the action genre. This relentless dedication mirrors the premium standards observed across <a href="/category/features" class="text-gold-600 dark:text-gold-400 font-semibold underline hover:text-gold-500">GoldMagazines feature dossiers</a> and <a href="/article/definitive-guide-leonardo-dicaprio-movies-cinema-craft" class="text-gold-600 dark:text-gold-400 font-semibold underline hover:text-gold-500">prestige cinema retrospectives</a>.
</p>

<h2 id="cultural-legacy">The Enduring Impact on Global Film Culture</h2>
<p>
Beyond physical feats, Cruise possesses an extraordinary dramatic pedigree shaped by historic masterworks with Stanley Kubrick, Paul Thomas Anderson, and Michael Mann. In Magnolia, Born on the Fourth of July, and Jerry Maguire, he demonstrated an expansive emotional range that earned multiple Academy Award nominations. As he approaches yet another decade in the spotlight, his career remains a living masterclass in theatrical reverence, discipline, and uncompromising cinematic spectacle.
</p>
  `.trim();

  const article2 = await prisma.article.upsert({
    where: { slug: art2Slug },
    update: {},
    create: {
      title: 'How Old Is Tom Cruise? The Ageless Hollywood Star and Box Office Titan',
      slug: art2Slug,
      excerpt: 'Exploring Tom Cruise’s age, ageless physical discipline, record-breaking box office run, and why he remains the ultimate defender of the big-screen movie experience.',
      content: art2Content,
      featuredImage: 'https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY0MTU0fDB8MXxzZWFyY2h8MXx8Y2luZW1hdG9ncmFwaHklMjBtb3ZpZSUyMHNldCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc4OTM4MTUxMXww&ixlib=rb-4.1.0&q=80&w=1200',
      imageAlt: 'Major cinematic film production soundstage and lighting equipment',
      readTime: 5,
      status: 'PUBLISHED',
      isFeatured: false,
      isTrending: true,
      isEditorsPick: true,
      metaTitle: 'How Old Is Tom Cruise? Age, Career, and Legacy | GoldMagazines',
      metaDescription: 'Discover how old Tom Cruise is, his legendary physical discipline, box office records, and his lasting legacy in global cinema.',
      publishedAt: new Date('2026-09-14T15:00:00.000Z'),
      categoryId: cultureCat.id,
      authorId: author.id,
    },
  });

  console.log('Created Article 2:', article2.title);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
