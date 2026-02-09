// app/robots.ts (o app/robots.txt/route.ts)
export const dynamic = 'force-static';
export const revalidate = false;

// Para 'app/robots.ts' (file convention) con App Router:
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://edwinpuertas.github.io/sitemap.xml',
  };
}

// -- O -- para route handler en 'app/robots.txt/route.ts':
// export async function GET() {
//   const body = `User-agent: *\nAllow: /\n\nSitemap: https://edwinpuertas.github.io/sitemap.xml\n`;
//   return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
// }
