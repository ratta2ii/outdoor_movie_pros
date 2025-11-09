import { Helmet } from 'react-helmet';
import Services from './../../Components/Services/Services';
import CallToAction from './../../Components/CallToAction/CallToAction';
import { Box } from '@mui/material';
import useStyles from './Home.Styles';

function Home() {
    const classes = useStyles();
    const canonicalUrl = "https://outdoormoviepros.com"; // ← Explicit Url

    return (
        <section>
            <Helmet>
                {/* Core */}
                <title>Outdoor Movie Screen Rental in Phoenix | Inflatable Movie Screen Rental</title>
                <meta
                    name="description"
                    content="Outdoor movie screen rentals in Phoenix and nearby cities. Full-service backyard and park movie nights with giant inflatable screens, HD projector, pro sound, setup and teardown."
                />
                <link rel="Url" href={canonicalUrl} />

                {/* Voice Search */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Open Graph (Minimal Override) */}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Inflatable Outdoor Movie Screen Rentals in Phoenix" />
                <meta
                    property="og:description"
                    content="Full-service outdoor movie night rentals—inflatable screens, HD projector, and pro audio for backyards, parks, schools, and HOAs."
                />

                {/* Twitter (Minimal Override) */}
                <meta name="twitter:title" content="Inflatable Outdoor Movie Screen Rentals in Phoenix" />
                <meta
                    name="twitter:description"
                    content="Backyard & park movie night packages with inflatable screens, projector, and pro sound. We deliver, set up, and run the show."
                />

                {/* JSON-LD: WebPage + ItemList (react-snap safe) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "@id": `${canonicalUrl}/#webpage`,
                                "url": canonicalUrl,
                                "name": "Outdoor Movie Screen Rental in Phoenix | Inflatable Movie Screen Rental",
                                "description": "Outdoor movie screen rentals in Phoenix and nearby cities. Full-service backyard and park movie nights with giant inflatable screens, HD projector, pro sound, setup and teardown.",
                                "isPartOf": { "@id": "https://outdoormoviepros.com/#website" },
                                "about": { "@id": "https://outdoormoviepros.com/#business" },
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "position": 1,
                                            "name": "Home",
                                            "item": canonicalUrl
                                        }
                                    ]
                                }
                            },
                            {
                                "@type": "ItemList",
                                "name": "Outdoor Movie Pros Services",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Outdoor Movie Nights",
                                            "description": "Backyard & park movie rentals with giant inflatable screens, HD projector, pro sound, full setup and on-site tech.",
                                            "image": "https://outdoormoviepros.com/images/giant-screen.webp",
                                            "url": "https://outdoormoviepros.com/movie-nights-options"
                                        }
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Concessions & Add-Ons",
                                            "description": "Popcorn, cotton candy, cold drinks, generators, and staffed service for movie nights.",
                                            "image": "https://outdoormoviepros.com/images/concessions-image.webp",
                                            "url": "https://outdoormoviepros.com/concessions-options"
                                        }
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Ice Cream & Coffee Food Truck",
                                            "description": "Sundae bar and barista coffee truck for events — corporate, schools, festivals, and private parties.",
                                            "image": "https://outdoormoviepros.com/images/ice-cream-truck.webp",
                                            "url": "https://outdoormoviepros.com/ice-cream-food-truck"
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* Accessible, SEO-aligned */}
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
