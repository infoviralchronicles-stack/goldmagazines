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
  console.log('Deleting all articles published before today (2026-09-13)...');

  // Start of today UTC
  const todayStart = new Date('2026-09-13T00:00:00.000Z');

  // Find articles to delete
  const articlesToDelete = await prisma.article.findMany({
    where: {
      publishedAt: {
        lt: todayStart,
      },
    },
    select: { id: true, title: true, slug: true, publishedAt: true },
  });

  console.log(`Found ${articlesToDelete.length} articles published before today.`);

  // Delete them permanently
  const deleteResult = await prisma.article.deleteMany({
    where: {
      publishedAt: {
        lt: todayStart,
      },
    },
  });

  console.log(`Permanently deleted ${deleteResult.count} articles.`);

  // Verify remaining articles
  const remaining = await prisma.article.findMany({
    select: { id: true, title: true, slug: true, publishedAt: true },
  });

  console.log(`\nRemaining articles (published today): ${remaining.length}`);
  remaining.forEach((a) => {
    console.log(`- [${a.publishedAt?.toISOString()}] ${a.title} (${a.slug})`);
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
