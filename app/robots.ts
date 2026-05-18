export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://quickchecky.com/sitemap.xml",
  };
}