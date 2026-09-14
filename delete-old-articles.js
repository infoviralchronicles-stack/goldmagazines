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

  // Article 1: 12:00 PM Slot (Leonardo DiCaprio Movies - ~980 words)
  const art1Slug = 'definitive-guide-leonardo-dicaprio-movies-cinema-craft';
  const art1Content = `
<p class="lead text-xl font-serif italic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
Leonardo DiCaprio occupies a singular, almost mythical position in contemporary global cinema. While the modern Hollywood studio ecosystem has increasingly pivoted toward interchangeable superhero intellectual property and algorithmically generated streaming fodder, DiCaprio has remained the steadfast guardian of the mid-budget, auteur-driven dramatic masterwork. Over a career spanning more than three decades, his filmography serves as an architectural blueprint for how an actor can command undeniable global box office power while refusing to compromise on narrative grit, psychological nuance, and thematic complexity.
</p>

<h2 id="formative-years-breakout-dramas">The Formative Era: Defying Early Stereotypes Through Gritty Independents</h2>
<p>
Long before international adulation cemented his status as a worldwide phenomenon, DiCaprio deliberately sought out complex, fragmented characters that ran counter to conventional leading-man expectations. His breakthrough opposite Robert De Niro in This Boy's Life showcased a performer unafraid of vulnerability, defiance, and visceral domestic tension. Rather than capitalizing on his boyish charm with lightweight studio comedies, he immediately embraced the daunting challenge of What's Eating Gilbert Grape, delivering a performance of such heartbreaking authenticity and neurological nuance that it earned him his first Academy Award nomination at just nineteen years of age.
</p>
<p>
Throughout the mid-1990s, DiCaprio continued to calibrate his artistic trajectory with deliberate precision. In The Basketball Diaries, he fearlessly plunged into the raw, unvarnished descent of poet Jim Carroll, navigating addiction and emotional alienation on the streets of New York. His subsequent collaboration with Baz Luhrmann in Romeo + Juliet reimagined Shakespearean verse with vibrant postmodern energy, proving that high culture and kinetic youth rebellion could coexist seamlessly. By the time James Cameron selected him for Titanic, DiCaprio had already constructed a formidable dramatic foundation that prepared him for the unprecedented cultural shockwave that followed.
</p>

<h2 id="post-titanic-crisis-and-auteur-recalibration">The Post-Titanic Paradigm: Resisting the Franchise Trap</h2>
<p>
When Titanic shattered worldwide box office records and dominated international culture in 1997, it placed DiCaprio in a precarious professional juncture. Lesser performers might have succumbed to lucrative multi-picture franchise contracts or safe romantic comedy roles. Instead, DiCaprio exercised immense patience, taking deliberate hiatuses and choosing directors whose creative visions demanded intellectual rigor. His collaboration with Danny Boyle on The Beach explored utopian disillusionment and tourist imperialism, marking an intentional departure from traditional studio polish.
</p>
<p>
Shortly thereafter, Steven Spielberg tapped DiCaprio for Catch Me If You Can, a light-footed yet melancholy exploration of identity, paternal yearning, and deceptive mid-century glamour. Working alongside Tom Hanks and Christopher Walken, DiCaprio imbued the real-life counterfeiter Frank Abagnale Jr. with profound pathos beneath an infectious charismatic facade. This period established his core creative ethos: choosing ambitious character portraits that examined the tension between public personas and private frailty, a standard that resonates deeply across the <a href="/category/features" class="text-gold-600 dark:text-gold-400 font-semibold underline hover:text-gold-500">features dossiers at GoldMagazines</a>.
</p>
<p>
During this critical decade of transformation, critics noted how DiCaprio treated stardom not as an end in itself, but as financial capital to greenlight risky, non-formulaic cinema. By refusing long-term studio tie-ins, he maintained total autonomy over his release schedule, ensuring that every project bearing his name felt like an unmissable cinematic event rather than commercial routine.
</p>

<h2 id="martin-scorsese-creative-partnership">The Scorsese Alliance: Redefining Modern American Cinema</h2>
<p>
No discussion of Leonardo DiCaprio movies can be complete without examining his historic partnership with Martin Scorsese, a director-actor kinship that echoes the golden age of American filmmaking. Beginning with Gangs of New York in 2002, Scorsese recognized in DiCaprio a hunger for moral interrogation and intense physical dedication. In The Aviator, DiCaprio gave life to Howard Hughes, navigating the eccentric aviation pioneer's brilliant industrial innovations alongside his harrowing descent into obsessive-compulsive isolation.
</p>
<p>
Their creative zenith crystallized in The Departed, an unrelenting Boston crime saga where DiCaprio portrayed undercover state trooper Billy Costigan. The role required a suffocating psychological intensity, capturing a man slowly disintegrating under the crushing weight of dual identities and constant paranoia. Their subsequent collaborations in Shutter Island and The Wolf of Wall Street pushed aesthetic boundaries even further. In Jordan Belfort, DiCaprio unleashed an electrifying, unhinged satire of American financial excess, creating one of the most audacious, darkly comic character portraits ever committed to modern celluloid.
</p>

<h2 id="physical-immersion-and-academy-glory">Extreme Physical Immersion: The Road to The Revenant</h2>
<p>
As his career matured, DiCaprio became synonymous with profound physical immersion and grueling on-location authenticity. In Christopher Nolan's Inception, he grounded high-concept metaphysical dream architecture with raw emotional grief as Dom Cobb, guiding international audiences through mind-bending conceptual worlds without losing the character's tragic emotional anchor. Later, in Quentin Tarantino’s Django Unchained, his magnetic and terrifying portrayal of the monstrous plantation owner Calvin Candie culminated in a now-legendary moment where he cut his hand on real glass during a take and integrated the genuine injury into the scene.
</p>
<p>
This unrelenting physical commitment reached its absolute culmination in Alejandro González Iñárritu’s The Revenant. Filming exclusively in remote sub-zero Canadian and Argentinian wilderness under natural light, DiCaprio endured hypothermic river plunges, ate raw bison liver, and communicated primarily through guttural breathing and physical endurance. The performance earned him universal acclaim and the coveted Academy Award for Best Actor, cementing his status alongside celebrated screen titans such as <a href="/article/enduring-cinema-cultural-impact-julia-roberts" class="text-gold-600 dark:text-gold-400 font-semibold underline hover:text-gold-500">the enduring Hollywood icon Julia Roberts</a>.
</p>

<h2 id="veteran-mastery-and-cinema-preservation">Contemporary Mastery and the Future of Pure Cinema</h2>
<p>
In recent years, DiCaprio has embraced the reality of aging on screen with remarkable grace and artistic vulnerability. His portrayal of washed-up television actor Rick Dalton in Once Upon a Time in Hollywood balanced hilarious insecurity with profound professional melancholy, earning another Oscar nomination for its touching exploration of obsolescence. Most recently, his complex turn as Ernest Burkhart in Scorsese’s Killers of the Flower Moon demonstrated an actor fearless in portraying spineless moral complicity and greed.
</p>
<p>
Ultimately, Leonardo DiCaprio movies represent far more than individual box office triumphs; they symbolize a sovereign standard of cinematic preservation. By maintaining an unshakeable allegiance to theatrical exhibition, master directors, and profound storytelling, DiCaprio continues to prove that genuine star power stems not from omnipresence on social feeds, but from the singular magic of uncompromised big-screen artistry.
</p>
  `.trim();

  const article1 = await prisma.article.upsert({
    where: { slug: art1Slug },
    update: {
      content: art1Content,
      readTime: 8,
    },
    create: {
      title: 'The Definitive Guide to Leonardo DiCaprio Movies: Cinema, Craft, and Cultural Impact',
      slug: art1Slug,
      excerpt: 'From early breakout indie dramas to iconic Scorsese collaborations and Academy Award triumph, explore the cinematic evolution and cultural legacy of Leonardo DiCaprio movies.',
      content: art1Content,
      featuredImage: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY0MTU0fDB8MXxzZWFyY2h8MXx8Y2luZW1hJTIwZmlsbSUyMGFjdG9yfGVufDB8fHx8MTc4OTM4MTQ3MHww&ixlib=rb-4.1.0&q=80&w=1200',
      imageAlt: 'Cinematic film clapperboard symbolizing prestige Hollywood movie sets',
      readTime: 8,
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

  console.log('Updated Article 1:', article1.title);

  // Article 2: 03:00 PM Slot (How Old Is Tom Cruise - 960-1020 words)
  const art2Slug = 'how-old-is-tom-cruise-ageless-hollywood-titan-box-office';
  const art2Content = `
<p class="lead text-xl font-serif italic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
When global moviegoers ask how old Tom Cruise is, the inquiry rarely stems from mere celebrity curiosity. Instead, it reflects a universal sense of disbelief. In an entertainment landscape where action heroes typically hand over stunt harnesses to CGI digital doubles well before their fifties, Cruise continues to sprint across cinema screens, scale soaring skyscrapers, and pilot supersonic fighter jets with the vigor of an athlete in peak physical conditioning.
</p>

<h2 id="chronological-milestone-and-ageless-reality">Chronological Reality: The Milestones Behind the Legend</h2>
<p>
To answer the core factual question directly: Tom Cruise was born on July 3, 1962, in Syracuse, New York, making him sixty-four years of age. Having launched his cinematic career in the early 1980s with breakout roles in Endless Love, Taps, and the era-defining Risky Business, Cruise has maintained an unbroken streak of top-tier Hollywood leading-man status for over four decades. While most of his generational peers have transitioned into advisory character cameos, supporting roles, or semi-retirement, Cruise remains the undisputed heavyweight champion of the global box office.
</p>
<p>
The true cultural significance of his age became an international conversation with the historic release of Top Gun: Maverick in 2022. Premiering thirty-six years after the original Top Gun propelled him into global superstardom, the sequel grossed nearly one and a half billion dollars worldwide. Legendary director Steven Spielberg famously credited Cruise with saving the theatrical movie distribution model following worldwide theater closures, demonstrating that Cruise’s brand of cinematic dedication transcends generational boundaries.
</p>
<p>
What makes this longevity truly unprecedented is the consistency of his commercial dominance. While many leading stars experience sharp declines or decade-long valleys, Cruise has engineered a career marked by relentless reinvention, adapting to evolving audience tastes while staying resolutely loyal to the pure visceral joy of practical filmmaking.
</p>

<h2 id="physical-discipline-and-stunt-philosophy">The Science of Ageless Vitality: A Strict Practical Stunt Philosophy</h2>
<p>
What keeps Cruise operating at this astonishing physical altitude is not genetic fortune alone, but a legendary work ethic and rigorous lifestyle regimen. Across his inner circle, Cruise is renowned for maintaining an uncompromising training schedule that integrates functional cardiovascular conditioning, specialized high-altitude breath training, advanced aviation certifications, and precision speed-flying. He approaches cinema not simply as dramatic acting, but as an elite extreme sport that demands supreme bodily mastery, cardiovascular stamina, and mental clarity.
</p>
<p>
His absolute refusal to rely on green-screen trickery has redefined modern action filmmaking. In Mission: Impossible - Ghost Protocol, he stunned audiences by executing dizzying foot chases on the glass exterior of the Burj Khalifa in Dubai, thousands of feet above the desert floor. In Rogue Nation, he clung to the exterior fuselage of an airborne Airbus A400M during takeoff, enduring severe wind shear and airborne particulate impact without digital safety net compositing.
</p>
<p>
In Fallout, he performed over a hundred high-altitude, low-opening military parachute jumps at twilight, shattering his ankle on a London rooftop jump and completing the shot on camera despite the fracture. His willingness to submit his body to authentic gravitational forces and genuine peril communicates a visceral kinetic weight that digital computer-generated imagery simply cannot replicate.
</p>

<h2 id="dramatic-pedigree-and-auteur-collaborations">Beyond the Adrenaline: An Unrivaled Dramatic Pedigree</h2>
<p>
While modern audiences associate Cruise primarily with breathtaking death-defying set pieces, focusing exclusively on his physical stamina overlooks one of the most sophisticated dramatic filmographies in American cinema history. Long before establishing the Mission: Impossible empire, Cruise honed his craft under the tutelage of legendary auteur directors who pushed him into deeply vulnerable, psychologically challenging terrain, as documented in our <a href="/category/culture" class="text-gold-600 dark:text-gold-400 font-semibold underline hover:text-gold-500">culture and cinema archives at GoldMagazines</a>.
</p>
<p>
Working with Martin Scorsese in The Color of Money, Cruise held his own opposite Paul Newman, capturing the electric arrogance and eventual maturation of a young billiards prodigy. In Oliver Stone’s Born on the Fourth of July, he earned his first Academy Award nomination for a devastating, raw portrayal of paralyzed Vietnam veteran Ron Kovic. The performance demonstrated an actor willing to strip away vanity in pursuit of traumatic emotional truth.
</p>
<p>
Later, Stanley Kubrick spent over a year meticulously directing Cruise in Eyes Wide Shut, dissecting marital jealousy, masculine insecurity, and psychological obsession with clinical precision. When Paul Thomas Anderson cast him in Magnolia, Cruise delivered a blistering, emotionally shattering performance as motivational speaker Frank T.J. Mackey, demonstrating an expansive dramatic range that earned him yet another Oscar nomination and Golden Globe triumph.
</p>
<p>
In A Few Good Men and Jerry Maguire, his mastery of complex, rhythmic dialogue proved that he was just as commanding in an intellectual courtroom duel or an intimate character study as he was hanging from high-altitude aircraft. This multidimensional dramatic skill forms the core engine of his lasting screen charisma.
</p>

<h2 id="cultural-impact-and-theatrical-evangelism">The Savior of Theatrical Cinema and Cultural Permanence</h2>
<p>
In the contemporary media landscape, where content is frequently consumed in fleeting clips on handheld mobile screens, Cruise stands as the most passionate defender of the theatrical moviegoing experience. He routinely visits commercial theaters to watch films with regular audiences and insists on prolonged theatrical windows for his own productions. His meticulous care for sound design, camera aspect ratios, and visual clarity mirrors the exact standards that define <a href="/article/definitive-guide-leonardo-dicaprio-movies-cinema-craft" class="text-gold-600 dark:text-gold-400 font-semibold underline hover:text-gold-500">our retrospective on Leonardo DiCaprio movies</a>.
</p>
<p>
As Cruise navigates his mid-sixties, his production schedule shows no signs of slowing down. With upcoming installments of the Mission: Impossible franchise and an unprecedented narrative feature planned to shoot in actual outer space aboard the International Space Station with director Doug Liman, Cruise continues to treat his age not as a restrictive limitation, but as an earned badge of unparalleled creative wisdom and boundless ambition.
</p>
<p>
Ultimately, the question of Tom Cruise's age serves as a testament to the power of unwavering human discipline and artistic conviction. In an era dominated by shortcuts and synthetic illusions, he remains a singular titan who proves that authentic passion, tireless preparation, and deep reverence for an audience never grow old.
</p>
  `.trim();

  const article2 = await prisma.article.upsert({
    where: { slug: art2Slug },
    update: {
      content: art2Content,
      readTime: 8,
    },
    create: {
      title: 'How Old Is Tom Cruise? The Ageless Hollywood Star and Box Office Titan',
      slug: art2Slug,
      excerpt: 'Exploring Tom Cruise’s age, ageless physical discipline, record-breaking box office run, and why he remains the ultimate defender of the big-screen movie experience.',
      content: art2Content,
      featuredImage: 'https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY0MTU0fDB8MXxzZWFyY2h8MXx8Y2luZW1hdG9ncmFwaHklMjBtb3ZpZSUyMHNldCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc4OTM4MTUxMXww&ixlib=rb-4.1.0&q=80&w=1200',
      imageAlt: 'Major cinematic film production soundstage and lighting equipment',
      readTime: 8,
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

  console.log('Updated Article 2:', article2.title);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
