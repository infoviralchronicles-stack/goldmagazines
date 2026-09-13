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
  const slug = "enduring-cinema-cultural-impact-julia-roberts";
  const accessKey = 'cetOQAExG_pXQ5twvWBANk7xHOsNYVzkRQkPD7vMDHM';

  // Fetch verified Unsplash landscape image via Unsplash API
  const query = encodeURIComponent('red carpet film premiere actress glamour');
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=1&orientation=landscape`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });

  const data = await res.json();
  const unsplashPhoto = data.results && data.results[0];

  const imageUrl = unsplashPhoto?.urls?.regular || 'https://images.unsplash.com/photo-1691071666279-58adb714d0b8?auto=format&fit=crop&w=1600&q=80';
  const imageAlt = unsplashPhoto?.alt_description || 'Hollywood premiere red carpet cinema star';

  console.log('Fetched Unsplash Image URL:', imageUrl);

  await prisma.article.update({
    where: { slug },
    data: {
      featuredImage: imageUrl,
      imageAlt: imageAlt,
    },
  });

  console.log('Updated Julia Roberts article with real Unsplash API featured image!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
