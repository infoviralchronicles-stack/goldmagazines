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
  console.log('Inserting natural contextual internal and external links into published articles...');

  // 1. Update Laptop Guide with natural links to Smartphone guide, category, and authority references
  const laptopSlug = "how-to-buy-a-laptop-ultimate-buyers-guide";
  const laptopArticle = await prisma.article.findUnique({ where: { slug: laptopSlug } });

  if (laptopArticle) {
    let content = laptopArticle.content;

    // Naturally link to smartphone guide in the introductory paragraph
    content = content.replace(
      'whether you are an executive managing enterprise operations, a creative professional rendering 4K media, a student, or a remote digital nomad',
      'whether you are pairing a mobile setup with the latest <a href="/article/evolution-of-smart-phones-flagship-guide" class="text-gold-600 dark:text-gold-400 font-medium underline hover:text-gold-500">flagship smart phone</a>, managing enterprise operations, or creating high-resolution digital media'
    );

    // Naturally link to Tech & Innovation category
    content = content.replace(
      'defining your primary operational demands and price ceiling',
      'defining your primary operational demands within our <a href="/category/tech" class="text-gold-600 dark:text-gold-400 font-medium underline hover:text-gold-500">Tech & Innovation</a> coverage and price ceiling'
    );

    await prisma.article.update({
      where: { slug: laptopSlug },
      data: { content },
    });
    console.log('Updated Laptop Guide with natural links.');
  }

  // 2. Update Smartphone Guide with natural link to Laptop guide and category
  const phoneSlug = "evolution-of-smart-phones-flagship-guide";
  const phoneArticle = await prisma.article.findUnique({ where: { slug: phoneSlug } });

  if (phoneArticle) {
    let content = phoneArticle.content;

    // Naturally link to laptop guide in ecosystem section
    content = content.replace(
      'smartwatches, wireless earbuds, and portable workstations ensures continuous workflow transitions',
      'smartwatches, wireless earbuds, and <a href="/article/how-to-buy-a-laptop-ultimate-buyers-guide" class="text-gold-600 dark:text-gold-400 font-medium underline hover:text-gold-500">high-performance laptops</a> ensures continuous workflow transitions'
    );

    // Naturally link to category
    content = content.replace(
      'selecting the best smart phone requires looking past ephemeral trends',
      'exploring our <a href="/category/tech" class="text-gold-600 dark:text-gold-400 font-medium underline hover:text-gold-500">technology dispatches</a> and selecting the best smart phone requires looking past ephemeral trends'
    );

    await prisma.article.update({
      where: { slug: phoneSlug },
      data: { content },
    });
    console.log('Updated Smart Phone Guide with natural links.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
