import { Helmet } from 'react-helmet';
import Services from './../../Components/Services/Services';
import CallToAction from './../../Components/CallToAction/CallToAction';
import { Box } from '@mui/material';
import useStyles from './Home.Styles';

function Home() {
  const classes = useStyles();

  return (
    <section>
      <Helmet>
        {/* Title uses App.js titleTemplate to append the brand */}
        <title>Inflatable Outdoor Movie Screen Rentals in Phoenix</title>

        <meta
          name="description"
          content="Inflatable outdoor movie screen rentals in Phoenix and nearby cities. Full-service backyard and park movie nights with HD projector, pro sound, setup and teardown."
        />
        <meta name="robots" content="index,follow" />

        {/* Canonical: no trailing slash */}
        <link rel="canonical" href="https://outdoormoviepros.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outdoor Movie Pros" />
        <meta property="og:url" content="https://outdoormoviepros.com" />
        <meta property="og:title" content="Inflatable Outdoor Movie Screen Rentals in Phoenix" />
        <meta
          property="og:description"
          content="Full-service outdoor movie night rentals—inflatable screens, HD projector, and pro audio for backyards, parks, schools, and HOAs."
        />
        <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
        <meta property="og:image:alt" content="Outdoor Movie Pros company logo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inflatable Outdoor Movie Screen Rentals in Phoenix" />
        <meta
          name="twitter:description"
          content="Backyard & park movie night packages with inflatable screens, projector, and pro sound. We deliver, set up, and run the show."
        />
        <meta name="twitter:image" content="https://outdoormoviepros.com/company-logo.webp" />

        <meta name="author" content="Outdoor Movie Pros" />
      </Helmet>

      {/* Accessible, SEO-aligned headings (no concessions/food-truck here) */}
      <header className="sr-only">
        Inflatable outdoor movie screen rentals with HD projection and professional audio in Phoenix, AZ and nearby cities.
      </header>

      <main>
        <Box className={classes.titleBox}>
          <h1 className={classes.title}>
            Inflatable Outdoor Movie Screen Rentals in Phoenix
          </h1>
          <h2 className={classes.subTitle}>
            Backyard & park movie nights with HD projector, pro sound, delivery, setup, on-site tech, and teardown.
            Serving Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Tempe, Glendale & Peoria.
          </h2>
        </Box>

        <Services />
        <CallToAction />
      </main>
    </section>
  );
}

export default Home;
