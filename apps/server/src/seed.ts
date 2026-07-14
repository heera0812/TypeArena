import { PrismaClient } from "../prisma/generated/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  
  const passwordHash = await bcrypt.hash("password", 10);
  
  await prisma.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      passwordHash
    }
  });

  const paragraphsData = [
    // English paragraphs
    {
      title: "English Easy 1",
      content: "The quick brown fox jumps over the lazy dog. A typing test is a good way to practice your speed.",
      language: "EN",
      difficulty: "EASY"
    },
    {
      title: "English Medium 1",
      content: "Computer science is the study of computation and information. It involves both theoretical studies of algorithms and the practical challenges of implementing computing systems in hardware and software.",
      language: "EN",
      difficulty: "MEDIUM"
    },
    {
      title: "English Hard 1",
      content: "The development of artificial intelligence has transformed the way we interact with technology. Machine learning algorithms can now recognize patterns in vast datasets, enabling applications in healthcare, finance, and natural language processing.",
      language: "EN",
      difficulty: "HARD"
    },
    // Hindi paragraphs
    {
      title: "Hindi Easy 1",
      content: "ज्ञान मनुष्य के जीवन को प्रकाश प्रदान करता है। शिक्षा से ही देश का विकास संभव है।",
      language: "HI",
      difficulty: "EASY"
    },
    {
      title: "Hindi Medium 1",
      content: "भारत एक विविधताओं से भरा देश है। यहाँ अनेक भाषाएँ, धर्म और संस्कृतियाँ एक साथ फलती-फूलती हैं। भारतीय सभ्यता विश्व की प्राचीनतम सभ्यताओं में से एक है।",
      language: "HI",
      difficulty: "MEDIUM"
    },
    {
      title: "Hindi Hard 1",
      content: "विज्ञान और प्रौद्योगिकी के क्षेत्र में भारत ने अभूतपूर्व प्रगति की है। अंतरिक्ष अनुसंधान से लेकर सूचना प्रौद्योगिकी तक, भारतीय वैज्ञानिकों और इंजीनियरों ने विश्व में अपनी पहचान बनाई है।",
      language: "HI",
      difficulty: "HARD"
    }
  ];

  for (const p of paragraphsData) {
    const existing = await prisma.paragraph.findFirst({ where: { title: p.title } });
    if (existing) {
      await prisma.paragraph.update({ where: { id: existing.id }, data: { content: p.content, language: p.language, difficulty: p.difficulty } });
    } else {
      await prisma.paragraph.create({ data: p });
    }
  }
  console.log("Paragraphs seeded/updated.");

  console.log("Seeding complete.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
