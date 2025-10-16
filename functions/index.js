const functions = require('firebase-functions');

exports.handleRequests = functions.https.onRequest((req, res) => {
  try {
    const validRoutes = [
      '/',
      '/faqs',
      '/contact',
      '/locations',
      '/gallery',
      '/movie-nights-options',
      '/concessions-options',
      '/ice-cream-food-truck',
      '/mesa',
      '/scottsdale',
      '/tempe',
      '/phoenix',
      '/gilbert',
      '/chandler',
      '/paradise-valley',
      '/glendale',
      '/peoria',
      '/queen-creek',
      '/san-tan-valley',
      '/tolleson',
      '/buckeye',
      '/goodyear',
      '/anthem',
    ];

    const normalizedPath = req.path.replace(/\/$/, '') || '/';
    
    functions.logger.info(`Received request for: ${req.path}`, { structuredData: true });

    // Detect crawlers (basic check for common bots)
    const userAgent = req.headers['user-agent'] || '';
    const isCrawler = /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|twitterbot|linkedinbot/i.test(userAgent) || req.query._escaped_fragment_ !== undefined;

    if (isCrawler && validRoutes.includes(normalizedPath)) {
      // Placeholder for Prerender.io (to be implemented when token is available)
      // Add prerendering logic here later
      res.redirect(302, '/index.html');
      return;
    }

    if (!validRoutes.includes(normalizedPath)) {
      res.status(404).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>404 Not Found</title>
          <meta name="robots" content="noindex, nofollow" />
        </head>
        <body style="font-family:sans-serif;text-align:center;padding:50px;">
          <h1>404 - Page Not Found</h1>
          <p>This page does not exist. <a href="/">Go to Homepage</a></p>
        </body>
        </html>`);
      return;
    }

    res.redirect(302, '/index.html');
  } catch (error) {
    functions.logger.error('Error handling request:', error, { structuredData: true });
    res.status(500).send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>500 Internal Server Error</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style="font-family:sans-serif;text-align:center;padding:50px;">
        <h1>500 - Internal Server Error</h1>
        <p>Something went wrong. Please try again later.</p>
      </body>
      </html>`);
  }
});