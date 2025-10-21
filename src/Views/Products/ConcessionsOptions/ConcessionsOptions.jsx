import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PopcornImage from './../../../Assets/Images/popcorn-machine.webp';
import CottonCandyImage from './.././../../Assets/Images/product-cotton-candy.jpg';
import ConcessionBoothImage from './.././../../Assets/Images/concession-booth.webp';
import ConcessionStaffImage from './.././../../Assets/Images/concession-staff.webp';
import SoundSystemImage from './.././../../Assets/Images/sound.webp';
import LightTowersImage from './.././../../Assets/Images/light-tower.webp';
import GeneratorImage from './../../../Assets/Images/generator.webp';
import GlowNecklacesImage from './.././../../Assets/Images/glow-necklaces.webp';
import BottledWaterImage from './.././../../Assets/Images/bottled-water.webp';
import DrinkTroughImage from './.././../../Assets/Images/drink-trough.webp';
import WaterBarrelImage from './.././../../Assets/Images/water-barrel.webp';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './ConcessionsOptions.Styles';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ConcessionsOptions() {
  const classes = useStyles();

  const cards = [
    {
      key: 'popcorn',
      to: '/concessions-options#popcorn',
      image: PopcornImage,
      imageAlt: 'Popcorn Machine Rentals Arizona',
      title: 'Popcorn Machine',
      subtitle: 'Movie-theater style, fresh & hot',
      price: '$89',
      bullets: [
        'Commercial popcorn machine',
        'Supplies included (kernels, oil, bags)',
        'On-site attendant optional',
        'Additional servings ($20 per 50 servings)',
      ],
    },
    {
      key: 'cotton-candy',
      to: '/concessions-options#cotton-candy',
      image: CottonCandyImage,
      imageAlt: 'Cotton candy concession',
      title: 'Cotton Candy',
      subtitle: 'Classic spun sugar fun',
      price: '$89',
      bullets: [
        'Commercial cotton candy machine',
        '60 cones and floss sugar',
        'On-site attendant optional',
        'Additional servings ($20 per 50 servings)',
      ],
    },
    {
      key: 'concession-booth',
      to: '/concessions-options#concession-booth',
      image: ConcessionBoothImage,
      imageAlt: 'Concession booth canopy with backdrop',
      title: 'Concession Booth',
      subtitle: 'Add eye appeal for any event',
      price: '$99',
      bullets: [
        "10' x 10' canopy",
        'Includes front and backdrop',
      ],
    },
    {
      key: 'concession-staff',
      to: '/concessions-options#concession-staff',
      image: ConcessionStaffImage,
      imageAlt: 'Concession staff for events',
      title: 'Concession Staff',
      subtitle: "We'll take care of it all",
      price: '$150',
      bullets: [
        'Professional staff for concession',
        'Movie screen rentals include staff',
      ],
    },
    {
      key: 'sound-system',
      to: '/concessions-options#sound-system',
      image: SoundSystemImage,
      imageAlt: 'Sound system for rent Scottsdale, AZ',
      title: 'Sound System Rental',
      price: '$249.00',
      subtitle: 'Powerful audio for any event',
      bullets: [
        'Pair of powered speakers',
        'Wireless handheld microphone',
        'Mixer + all necessary cables',
        'Setup and basic sound check',
      ],
    },
    {
      key: 'light-towers',
      to: '/concessions-options#light-towers',
      image: LightTowersImage,
      imageAlt: 'Light towers for events',
      title: 'Light Towers',
      subtitle: 'Ideal in dark areas',
      price: '$150',
      bullets: [
        'Add a generator if no outlet',
      ],
    },
    {
      key: 'generators',
      to: '/concessions-options#generators',
      image: GeneratorImage,
      imageAlt: 'Quiet inverter generator',
      title: 'Generators',
      subtitle: 'Quiet power for any venue',
      price: '$69',
      bullets: [
        'Quiet inverter generators',
        'Power for projector, audio, and screens',
        'Cables & distro included',
        'Fuel included for standard runtimes',
      ],
    },
    {
      key: 'glow-necklaces',
      to: '/concessions-options#glow-necklaces',
      image: GlowNecklacesImage,
      imageAlt: 'Glow necklaces for party',
      title: 'Glow Necklaces',
      subtitle: 'Brighten up any party',
      price: '$39',
      bullets: [
        '22" necklaces',
        '100 pack per order',
      ],
    },
    {
      key: 'bottled-water-soda',
      to: '/concessions-options#bottled-water-soda',
      image: BottledWaterImage,
      imageAlt: 'Bottled water and soda add-on',
      title: 'Bottled Water / Soda',
      subtitle: 'Chilled beverages for guests',
      price: '$0.50 – $1.00',
      bullets: [
        'Minimum order required',
        'Add a trough or cooler for cooling',
        'Ice is an additional charge',
      ],
    },
    {
      key: 'drink-trough',
      to: '/concessions-options#drink-trough',
      image: DrinkTroughImage,
      imageAlt: 'Drink trough for beverages',
      title: 'Drink Trough',
      subtitle: 'Holds up to 200 drinks',
      price: '$49',
      bullets: [
        'Ice not included',
        'Ice is an additional charge',
      ],
    },
    {
      key: 'water-barrel',
      to: '/concessions-options#water-barrel',
      image: WaterBarrelImage,
      imageAlt: 'Water barrel for anchoring',
      title: 'Water Barrel',
      subtitle: 'Anchoring when sandbags and stakes do not work',
      price: '$25',
      bullets: [
        'We can bring pre-filled (upon request)',
      ],
    },
  ];

  return (
    <main>
      <Helmet>
        <title>Concessions & Add-Ons for Outdoor Movie Night Events in Phoenix</title>
        <meta
          name="description"
          content="Popcorn and cotton candy machines, generators, light towers, sound systems, and more—everything to power your outdoor movie night in Phoenix."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://outdoormoviepros.com/concessions-options" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outdoor Movie Pros" />
        <meta property="og:url" content="https://outdoormoviepros.com/concessions-options" />
        <meta property="og:title" content="Concessions & Add-Ons for Outdoor Movie Nights in Phoenix" />
        <meta
          property="og:description"
          content="From popcorn and cotton candy to generators, lighting, and sound—browse add-ons for outdoor movie nights in Phoenix."
        />
        <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
        <meta property="og:image:alt" content="Outdoor Movie Pros company logo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* sr-only heading for SEO/a11y (not visible) */}
      <h1 className="sr-only">
        Concessions and add-ons for outdoor movie nights in Phoenix — popcorn, cotton candy, generators, lighting, sound, and more
      </h1>

      <Box className={classes.titleBox}>
        <h1 className={classes.title}>
          Concessions & Add-Ons — Popcorn • Cotton Candy • Generators • Lighting • Sound • And More
        </h1>
      </Box>

      <Grid container spacing={4} alignItems="stretch" justifyContent="center" className={classes.gridContainer}>
        {cards.map(({ key, to, image, imageAlt, title, price, subtitle, bullets }) => (
          <Grid item xs={12} md={4} key={key} id={key}>
            <Card className={classes.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Link to={to} style={{ textDecoration: 'none', flexGrow: 1, display: 'flex' }}>
                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="275"
                    image={image}
                    alt={imageAlt}
                    aria-label={imageAlt}
                  />
                  <CardContent style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="h2"
                      className={classes.cardTitle}
                      style={{ fontFamily: 'inherit' }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="h3"
                      component="h3"
                      className={classes.cardSubtitle}
                    >
                      {subtitle}
                    </Typography>

                    <Divider style={{ height: 1, marginTop: 16, backgroundColor: "#730a1b" }} />

                    <List className={classes.bulletList}>
                      {bullets.map((item, i) => (
                        <ListItem key={i} className={classes.listItem}>
                          <ListItemIcon>
                            <CheckCircleIcon className={classes.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>

                    {/* Bottom block pinned above the buttons */}
                    <Box style={{ marginTop: 'auto' }}>
                      <Typography
                        variant="h4"
                        component="p"
                        className={classes.cardPrice}
                        aria-label={`${price}`}
                      >
                        {price}
                      </Typography>

                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.quoteNote}
                        style={{ color: '#444', marginBottom: 0 }}
                      >
                        Final quote determined by event location.{' '}Don't forget to check out our{' '}
                        <Link to="/movie-nights-options" className={classes.movieEventsLink}>
                          Outdoor Movie Event Options
                        </Link>
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Link>

              <CardActions style={{ padding: 0 }}>
                <Box className={classes.buttonContainer}>
                  <Button
                    size="small"
                    className={classes.contactButton}
                    component="a"
                    href="tel:+16026386510"
                    aria-label="Call Outdoor Movie Pros at 602-638-6510"
                  >
                    (602) 638-6510
                  </Button>
                  <Button
                    size="small"
                    className={classes.contactButton}
                    component={Link}
                    to="/contact"
                    aria-label="Contact Outdoor Movie Pros for a quote"
                  >
                    Get a Quote
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <CallToAction />
    </main>
  );
}

export default ConcessionsOptions;
