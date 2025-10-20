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
      '/anthem'
    ];

    const normalizedPath = req.path.replace(/\/$/, '') || '/';
    
    functions.logger.info(`Received request for: ${req.path}`, { structuredData: true });

    // For invalid routes, return 404
    if (!validRoutes.includes(normalizedPath)) {
      res.status(404).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>404 Not Found - Outdoor Movie Pros</title>
          <meta name="robots" content="noindex, nofollow" />
        </head>
        <body style="font-family:sans-serif;text-align:center;padding:50px;">
          <h1>404 - Page Not Found</h1>
          <p>This page does not exist. <a href="/">Go to Homepage</a></p>
        </body>
        </html>`);
      return;
    }

    // For valid routes, rely on Firebase Hosting to serve react-snap static files
    // or redirect to /index.html for SPA routing
    res.redirect(302, '/index.html');
  } catch (error) {
    functions.logger.error('Error handling request:', error, { structuredData: true });
    res.status(500).send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>500 Internal Server Error - Outdoor Movie Pros</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style="font-family:sans-serif;text-align:center;padding:50px;">
        <h1>500 - Internal Server Error</h1>
        <p>Something went wrong. Please try again later.</p>
      </body>
      </html>`);
  }
});