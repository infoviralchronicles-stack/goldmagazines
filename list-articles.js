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
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      publishedAt: true,
    },
    orderBy: { publishedAt: 'desc' },
  });

  console.log(`Total articles found: ${articles.length}`);
  articles.forEach((a) => {
    console.log(`- [${a.publishedAt?.toISOString()}] ${a.title} (${a.slug})`);
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
