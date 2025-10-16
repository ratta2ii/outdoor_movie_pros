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
                <title>Outdoor Movie Nights in Phoenix | Outdoor Movie Pros</title>
                <meta
                    name="description"
                    content="Outdoor Movie Pros offers outdoor movie rentals, concessions, and a food truck with ice cream sundaes and coffee in Phoenix, AZ. Bring outdoor movie magic with HD projection, pro audio, and full setup."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://outdoormoviepros.com" />

                {/* Open Graph */}
                <meta property="og:title" content="Outdoor Movie Nights in Phoenix | Outdoor Movie Pros" />
                <meta
                    property="og:description"
                    content="Outdoor movie rentals, concessions, and a food truck with ice cream sundaes and coffee in Phoenix. HD projection, pro audio, full setup & teardown."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Outdoor Movie Pros" />
                <meta property="og:url" content="https://outdoormoviepros.com" />
                <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
                <meta property="og:image:alt" content="Outdoor Movie Pros company logo" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Outdoor Movie Nights in Phoenix | Outdoor Movie Pros" />
                <meta
                    name="twitter:description"
                    content="Outdoor movie rentals, concessions, and a food truck with ice cream sundaes and coffee in Phoenix. HD projection, pro audio, setup & teardown."
                />
                <meta name="twitter:image" content="https://outdoormoviepros.com/company-logo.webp" />
                <meta name="author" content="Outdoor Movie Pros" />
            </Helmet>

            <header className="sr-only">
                Outdoor movie nights with big screens, HD projection & pro audio—plus concessions and a food truck serving ice cream sundaes and coffee in Phoenix, AZ.
            </header>
            <main>
                <Box className={classes.titleBox}>
                    <h1 className={classes.title}>
                        Outdoor Movie Nights • Concessions • Ice Cream Sundaes & Coffee Food Truck
                    </h1>
                    <h2 className={classes.subTitle}>
                        Perfect for homeowners, corporate events, HOAs, schools, churches, parks & rec, apartment communities, festivals, fundraisers, birthdays, graduations, block parties & more.
                    </h2>
                </Box>
                <Services />
                {/* Call to Action */}
                <CallToAction />
            </main>
        </section>
    );
}

export default Home;
