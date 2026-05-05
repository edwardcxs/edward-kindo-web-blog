import { ARTICLES } from './constants/articles';

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Only run for blog article paths
  if (pathname.startsWith('/blog/') && pathname.split('/').length === 3) {
    const userAgent = request.headers.get('user-agent') || '';
    const botPatterns = [
      'facebookexternalhit',
      'Twitterbot',
      'whatsapp',
      'discordbot',
      'telegrambot',
      'slackbot',
      'googlebot',
      'linkedinbot'
    ];

    const isBot = botPatterns.some(pattern => 
      userAgent.toLowerCase().includes(pattern.toLowerCase())
    );

    if (isBot) {
      const articleId = pathname.split('/')[2];
      const article = ARTICLES.find(a => a.id === articleId);

      if (article) {
        const title = `${article.title} | Edward Kindo`;
        const description = article.excerpt;
        const image = `${url.origin}${article.image}`;

        // Return a minimal HTML with the meta tags for the bot
        return new Response(
          `<!DOCTYPE html>
          <html>
            <head>
              <title>${title}</title>
              <meta name="description" content="${description}">
              <meta property="og:title" content="${title}">
              <meta property="og:description" content="${description}">
              <meta property="og:image" content="${image}">
              <meta property="og:url" content="${url.href}">
              <meta property="og:type" content="article">
              <meta name="twitter:card" content="summary_large_image">
              <meta name="twitter:title" content="${title}">
              <meta name="twitter:description" content="${description}">
              <meta name="twitter:image" content="${image}">
              <meta http-equiv="refresh" content="0;url=${url.href}">
            </head>
            <body>
              <p>Redirecting to article...</p>
            </body>
          </html>`,
          {
            headers: {
              'content-type': 'text/html',
            },
          }
        );
      }
    }
  }

  // Continue to the static files
  return fetch(request);
}

// Configuration for the middleware
export const config = {
  matcher: '/blog/:path*',
};
