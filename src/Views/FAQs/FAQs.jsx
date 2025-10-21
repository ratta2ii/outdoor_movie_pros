import React from "react";
import { Helmet } from "react-helmet";
import { Typography, Box, Button } from "@material-ui/core";
import useStyles from "./FAQs.Styles";

function FAQs() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Helmet>
        <title>Outdoor Movie Rental FAQs | Phoenix Inflatable Movie Screens</title>

        <meta
          name="description"
          content="Answers to common outdoor movie rental questions in Phoenix: delivery and setup, projector and screen, start times at sunset, front vs rear projection, and wind safety."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://outdoormoviepros.com/faqs" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outdoor Movie Pros" />
        <meta property="og:url" content="https://outdoormoviepros.com/faqs" />
        <meta property="og:title" content="Outdoor Movie Rental FAQs | Phoenix Inflatable Screens" />
        <meta
          property="og:description"
          content="Get details on outdoor movie rentals in Phoenix: delivery, setup, start times, projection options, and safe wind practices."
        />
        <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
        <meta property="og:image:alt" content="Outdoor Movie Pros logo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* FAQPage schema based on visible content below */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does price include setup and delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Setup and standard delivery are included. Additional charges may apply for farther locations or unusual setups (stairs, rooftops, etc.). Contact us to review your details in advance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you deliver to other cities?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We can travel anywhere and can provide a custom quote for your location."
              }
            },
            {
              "@type": "Question",
              "name": "Are permits needed for the height of the screen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generally no. Local requirements vary, but permits are uncommon for screens up to 24’. Very large screens in some states may require permits or engineering documents."
              }
            },
            {
              "@type": "Question",
              "name": "Does the standard 2.5 hour rental include setup time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Setup and breakdown are on us. The 2.5 hours begins once setup is complete at the agreed-upon start time."
              }
            },
            {
              "@type": "Question",
              "name": "Does it have to be dark to see the picture?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Plan to start around sunset like a theater with lights out. Check local sunset times for the best start."
              }
            },
            {
              "@type": "Question",
              "name": "Does sunset direction affect screen placement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Facing the audience west (screen faces east) can allow a slightly earlier start. Direct sunlight on the screen can delay the start because the reflective surface amplifies brightness."
              }
            },
            {
              "@type": "Question",
              "name": "How much brightness drop-off is there with rear vs. front projection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rear projection has a small brightness loss (around 10%). Front projection is brighter but places the projector in front of the audience; rear projection keeps gear behind the screen for a cleaner layout."
              }
            },
            {
              "@type": "Question",
              "name": "What about wind and wind rating?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For safety, do not use screens in winds exceeding 15 mph. Use caution with approaching storms and lower the screen if severe weather appears."
              }
            }
          ]
        }`}</script>
      </Helmet>

      <header className="sr-only">Frequently Asked Questions about Outdoor Movie Rentals</header>

      <Box className={classes.titleBox}>
        <Typography variant="h1" className={classes.title}>
          Frequently Asked Questions
        </Typography>
      </Box>

      <Box className={classes.contentBox}>
        <Typography variant="h2" className={classes.subheading}>
          Does price include setup and delivery?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Setup and standard delivery are included. Additional charges may apply if:
          <ul>
            <li>The event location is farther out (trip charge may apply).</li>
            <li>The setup requires unusual accommodations (stairs, rooftop, etc.).</li>
          </ul>
          If you have a unique situation, let us know and we’ll sort it out before the event.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Do you deliver to other cities?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Absolutely! We can travel anywhere. Call us and we’ll create a custom quote for your
          location.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Are there special licenses or permits needed for the height of the screen?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Generally no. Local requirements vary, but we have never seen a permit required for
          screens up to 24’. Permits and engineering documents are usually only needed for very
          large screens in stricter states like California.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Does the standard 2.5 hour rental time include your setup time?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          No. Setup and breakdown are on us. The 2.5 hours begins once the setup is complete, at
          the agreed-upon start time.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Does it have to be dark to see the picture?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Yes. Outdoor projection works like a movie theater, except the “lights out” is sunset.
          To know when you can start, check{" "}
          <a href="https://www.timeanddate.com/astronomy/usa" style={{ color: '#3f51b5' }} target="_blank" rel="noopener noreferrer">
            local sunset times here
          </a>.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          When setting up the screen, does sunset direction affect placement?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Yes. If the audience faces west (and the screen faces east), you can usually start the
          movie earlier. Direct sunlight on the screen delays the start by about 15 minutes
          because the reflective surface amplifies the brightness.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          How much drop-off is there using rear projection versus front projection?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Light loss is minimal—about 10%. Both methods have advantages:
          <ul>
            <li>
              <strong>Front projection:</strong> Brighter image, requires projector in front of
              audience.
            </li>
            <li>
              <strong>Rear projection:</strong> Cleaner setup with equipment behind the screen,
              but slightly dimmer.
            </li>
          </ul>
          The right choice depends on your event layout.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          What about wind and wind rating?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Safety first:
          <ul>
            <li>Do not use screens in winds exceeding 15 mph.</li>
            <li>Use extreme caution with approaching storms or high winds.</li>
            <li>Lower the screen immediately if severe weather appears on radar.</li>
          </ul>
          A conservative approach ensures the safety of both your audience and equipment.
        </Typography>

        <Box className={classes.ctaBox}>
          <Typography variant="h5" className={classes.ctaText}>
            Still have questions? Give us a call.
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.ctaButton}
            href="tel:+16026386510"
          >
            (602) 638-6510
          </Button>
        </Box>
      </Box>
    </section>
  );
}

export default FAQs;
