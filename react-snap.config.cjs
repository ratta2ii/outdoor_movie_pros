/** @type {import('react-snap').RunOptions} */
module.exports = {
  // react-snap launches its own local server; default is http://localhost:45678
  // You can omit "source" and let react-snap manage it.
  include: [
    "/",
    "/faqs",
    "/contact",
    "/locations",
    "/gallery",
    "/movie-nights-options",
    "/concessions-options",
    "/ice-cream-food-truck",
    "/mesa",
    "/scottsdale",
    "/tempe",
    "/phoenix",
    "/gilbert",
    "/chandler",
    "/paradise-valley",
    "/glendale",
    "/peoria",
    "/queen-creek",
    "/san-tan-valley",
    "/tolleson",
    "/buckeye",
    "/goodyear",
    "/anthem"
  ],
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  inlineCss: true,
  skipThirdPartyRequests: false,
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true
  }
};
