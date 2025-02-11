import Image from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/letter_t_logo._simple_logo.-removebg-preview.png";
import introducingSupabaseImg from "@/app/blog/_assets/images/authors/KYJxmYLwRRObQcf8Ayn9Ig.webp";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  ai_trends: "ai_trends",
  tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.ai_trends,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "AI Trends and Updates",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "AI Trends",
    // The description of the category to display in the category page. Up to 160 characters.
    description: "Stay updated with the latest trends, news, and discussions about artificial intelligence and its impact on various industries.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Latest AI trends and updates."
  },
  {
    slug: categorySlugs.tutorial,
    title: "How Tos & Tutorials",
    titleShort: "Tutorials",
    description:
      "Learn how to use 10xShip with these step-by-step tutorials. I'll show you how to ship faster and save time.",
    descriptionShort:
      "Learn how to use 10xShip with these step-by-step tutorials.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  techiral: "techiral",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.techiral,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Techiral",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Maker of Devseek AI",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Techiral is built by Lakshya Gupta, who is a developer and an entrepreneur. He's built 20 startups in the last 3 years. 6 were profitable and 3 were acquired. He's currently building 10xShip, the #1 NextJS foundation packed with essentials to create your SaaS, AI solution, or any web app and quickly earn your first $ online.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: marcImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://www.twitter.com/techiral_/",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/techiral",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/Techiral",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "will-ai-replace-developers-2025",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Will AI Replace Developers by 2025?",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Is AI coming for your developer job? Explore how AI tools like GitHub Copilot and ChatGPT are transforming coding, automation, and software development. Discover the limitations of AI and how developers can future-proof their skills.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.ai_trends),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.techiral),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2025-02-11",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: {introducingSupabaseImg},
      alt: "I don't think AI will completely replace mid-level engineers, at least not by 2025. Even OpenAI is still hiring web developers with salaries exceeding $300k a year",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
      <Image
        src={introducingSupabaseImg}
        alt="AI vs Developers - Will AI Replace Developers by 2025?"
        width={786}
        height={440}
        priority={true}
        className="rounded-box"
        placeholder="blur"
      />
      <section>
        <h1 className={styles.h2}>Will AI Replace Developers by 2025?</h1>
        <p className={styles.p}>
          The rise of AI in software development has sparked a heated debate: Will AI completely replace human developers by 2025? With advancements in machine learning, automation, and AI-driven coding tools, many believe that traditional programming jobs may soon become obsolete. But is that really the case? Let&apos;s dive deep into this discussion.
        </p>
      </section>

      <section>
        <h2 className={styles.h3}>The Evolution of AI in Software Development</h2>
        <p className={styles.p}>
          AI in software development isn&apos;t new. Tools like GitHub Copilot, OpenAI Codex, and automated testing frameworks have already changed how developers work. AI can now generate code snippets, detect bugs, and even optimize performance. But is this enough to replace human expertise?
        </p>
      </section>

      <section>
        <h2 className={styles.h3}>Current AI Capabilities in Development</h2>
        <ul className={styles.ul}>
          <li>Automated Code Generation (e.g., Copilot, CodeWhisperer)</li>
          <li>AI-Powered Debugging and Testing</li>
          <li>Low-Code & No-Code Platforms</li>
          <li>AI-Driven DevOps Automation</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.h3}>Why AI Won&apos;t Fully Replace Developers (Yet)</h2>
        <p className={styles.p}>
          While AI is powerful, software development is more than just writing code. Developers handle:
        </p>
        <ul className={styles.ul}>
          <li>Complex problem-solving and critical thinking</li>
          <li>System architecture and scalable design</li>
          <li>Understanding client needs and business logic</li>
          <li>Debugging unpredictable errors</li>
        </ul>
        <p className={styles.p}>
          AI lacks human intuition, creativity, and adaptability—essential qualities in software development.
        </p>
      </section>

      <section>
        <h2 className={styles.h3}>Will AI Take Over Junior Developer Roles?</h2>
        <p className={styles.p}>
          Entry-level jobs might be at risk. AI can handle repetitive coding tasks, reducing the need for junior developers. However, it also creates new opportunities in AI-assisted development, requiring human oversight.
        </p>
      </section>

      <section>
        <h2 className={styles.h3}>The Future: Collaboration Between AI and Developers</h2>
        <p className={styles.p}>
          The most likely scenario? AI will enhance developer productivity rather than replace them. AI tools will automate mundane tasks, allowing developers to focus on higher-level problem-solving and innovation.
        </p>
      </section>

      <section>
        <h2 className={styles.h3}>Conclusion</h2>
        <p className={styles.p}>
          While AI is revolutionizing software development, the complete replacement of developers by 2025 is unlikely. Instead, AI will serve as a powerful assistant, making coding faster, more efficient, and accessible.
        </p>
      </section>

      <section>
        <h2 className={styles.h3}>FAQs</h2>
        <ul className={styles.ul}>
          <li><strong>Will AI replace all developers?</strong> No, but it may reduce the need for some junior-level coding roles.</li>
          <li><strong>Is AI good for software development?</strong> Yes! It speeds up coding, debugging, and deployment processes.</li>
          <li><strong>Should developers learn AI?</strong> Absolutely. Understanding AI will give developers a competitive edge in the job market.</li>
          <li><strong>What AI tools should developers use?</strong> GitHub Copilot, ChatGPT, DeepCode, and AI-powered DevOps tools.</li>
          <li><strong>How can developers stay relevant?</strong> Focus on high-level problem-solving, architecture, and AI integration skills.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.h3}>Devseek AI: Build Apps, No Developers Needed</h2>
        <p className={styles.p}>
          <strong>Devseek.ai</strong> is a revolutionary AI-powered SaaS platform that automates the entire software development lifecycle—from ideation to deployment—without human developers.
        </p>
        <ul className={styles.ul}>
          <li>AI generates code, tests applications, and fixes bugs automatically.</li>
          <li>Launch-ready applications with zero human intervention.</li>
          <li>Faster, cost-effective, and error-free software development.</li>
        </ul>
        <p className={styles.p}>
          Could this mean the end of human developers? Try Devseek.ai and decide for yourself!
        </p>
        <p className={styles.p}>
          <a href="https://devseek-ai.vercel.app/" target="_blank" className={styles.link}>
            🔗 Visit Devseek.ai
          </a>
        </p>
      </section>
    </>
    ),
  },
];
