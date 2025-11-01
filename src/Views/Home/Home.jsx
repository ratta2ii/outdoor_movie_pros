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
                <title>Outdoor Movie Screen Rental in Phoenix | Inflatable Movie Screen Rental</title>

                <meta
                    name="description"
                    content="Outdoor movie screen rentals in Phoenix and nearby cities. Full-service backyard and park movie nights with giant inflatable screens, HD projector, pro sound, setup and teardown."
                />
                <meta name="robots" content="index,follow" />

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
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "name": "Outdoor Movie Pros",
                                "url": "https://outdoormoviepros.com",
                                "logo": "https://outdoormoviepros.com/company-logo.webp",
                                "contactPoint": { "telephone": "+1-602-638-6510", "contactType": "Customer Service" }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outdoormoviepros.com" }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* Accessible, SEO-aligned headings (no concessions/food-truck here) */}
            <header className="sr-only">
                Inflatable outdoor movie screen rentals with HD projection and professional audio in Phoenix, AZ and nearby cities.
            </header>

            <main>
                <Box className={classes.titleBox}>
                    <h1 className={classes.title}>
                        Outdoor Movie Screen Rentals in Phoenix and the Surrounding Areas
                    </h1>
                    <h2 className={classes.subTitle}>
                        Outdoor movie rentals for backyards, parks, and corporate events featuring giant inflatable screens, HD projection, pro sound, full delivery, setup, and teardown. Serving Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Tempe, Glendale, Peoria and more...
                    </h2>
                </Box>

                <Services />
                <CallToAction />
            </main>
        </section>
    );
}

export default Home;
