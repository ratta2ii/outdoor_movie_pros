import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Grid, Typography, Box, Divider, Button, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from "./Locations.Styles";
import GiantScreenImage from "../../Assets/Images/GalleryImages/gallery6.webp";
import ConcessionsImage from "../../Assets/Images/concessions-image.webp";
import FoodTruckImage from "../../Assets/Images/ice-cream-truck-two.webp";
import CallToAction from "../../Components/CallToAction/CallToAction";
import { Helmet } from "react-helmet";

function Locations() {
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -175; // adjust based on navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  const city = location.pathname.split("/")[1]; // '' for /locations (general route)
  const isGeneralAreaPage = city === "locations" || city === "";

  const formattedCity = !isGeneralAreaPage
    ? (() => {
        const formatted = city
          .split("-")
          .map((word) =>
            word.toLowerCase() === "d" ? "d'" : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(" ")
          .replace("d' ", "d'");
        return `${formatted}, AZ`;
      })()
    : null;

  // For canonical/og:url (no trailing slash policy)
  const pathForSeo = isGeneralAreaPage ? "/locations" : `/${city}`;

  // Shorter label (e.g., "Queen Creek")
  const cityShort = formattedCity ? formattedCity.replace(", AZ", "") : "Phoenix Metro";

  const regionLabel = "Phoenix Metro Area, including Maricopa, Pinal, and surrounding counties";

  // Visible H1 text (keyword-forward but still human)
  const visibleH1 = isGeneralAreaPage
    ? "Outdoor Movie Screen Rentals Near Me — Phoenix Metro"
    : `Inflatable Outdoor Movie Screen Rentals in ${formattedCity}`;

  // Subhead / intro (can mention concessions/food truck; not in SEO)
  const introCopy = isGeneralAreaPage
    ? (
      <>
        We serve the entire {regionLabel}. Book an outdoor movie night, add concessions, or bring our ice cream sundae & coffee food truck to your next event.
      </>
    ) : (
      <>
        We serve {formattedCity} and nearby communities. Book an outdoor movie night, add concessions, or bring our ice cream sundae & coffee food truck to your next event.
      </>
    );

  return (
    <section className={classes.root}>
      {/* Dynamic SEO for city pages and the general service-area page (movie-rental focused only) */}
      <Helmet>
        <title>
          {isGeneralAreaPage
            ? "Outdoor Movie Screen Rentals Near Me | Phoenix Metro Locations"
            : `Inflatable Outdoor Movie Screen Rentals in ${cityShort}, AZ`}
        </title>

        <meta
          name="description"
          content={
            isGeneralAreaPage
              ? "Find inflatable outdoor movie screen rentals near you across the Phoenix metro. Full-service backyard and park movie nights with HD projector, pro sound, setup, on-site tech, and teardown."
              : `Inflatable outdoor movie screen rentals in ${formattedCity}. Full-service backyard and park movie nights with HD projector, pro sound, setup, on-site tech, and teardown.`
          }
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={`https://outdoormoviepros.com${pathForSeo}`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outdoor Movie Pros" />
        <meta property="og:url" content={`https://outdoormoviepros.com${pathForSeo}`} />
        <meta
          property="og:title"
          content={
            isGeneralAreaPage
              ? "Outdoor Movie Screen Rentals Near Me | Phoenix Metro Locations"
              : `Inflatable Outdoor Movie Screen Rentals in ${cityShort}, AZ`
          }
        />
        <meta
          property="og:description"
          content={
            isGeneralAreaPage
              ? "Inflatable outdoor movie screen rentals across Phoenix metro—HD projector, pro sound, delivery, setup, on-site tech, and teardown."
              : `Inflatable outdoor movie screen rentals in ${formattedCity}—HD projector, pro sound, delivery, setup, on-site tech, and teardown.`
          }
        />
        <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
        <meta property="og:image:alt" content="Outdoor Movie Pros logo" />
      </Helmet>

      {/* sr-only heading for SEO/a11y: strict to rentals & near-me intent */}
      <h1 className="sr-only">
        {isGeneralAreaPage
          ? "Inflatable outdoor movie screen rentals near me in the Phoenix metro area"
          : `Inflatable outdoor movie screen rentals in ${formattedCity}`}
      </h1>

      {/* Visible header */}
      <header className={classes.header}>
        <Box className={classes.titleBox}>
          <Typography variant="h1" className={classes.title}>
            {visibleH1}
          </Typography>
          <Typography className={classes.subText}>
            {introCopy}
            <br />
            <br />
            Ready to schedule your event{isGeneralAreaPage ? "" : ` in ${cityShort}`}?
            <br />
            <a href="tel:+16026386510" className={`${classes.phoneLink}`}>
              (602) 638-6510
            </a>
          </Typography>
        </Box>
      </header>

      {/* Section 1: Outdoor Movie Nights */}
      <Grid container spacing={4} className={classes.sectionContainer}>
        <Grid item xs={12} id="sampling-section" className={classes.serviceSection}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box className={classes.imageButtonWrapper}>
                <img
                  src={GiantScreenImage}
                  alt={`Outdoor movie screen setup${isGeneralAreaPage ? " in the Phoenix metro area" : ` in ${formattedCity}`}`}
                  className={classes.sectionImage}
                />
                <Box className={classes.buttonContainerDesktop}>
                  <Button size="medium" className={classes.contactButton} component={Link} to="/movie-nights-options">
                    View Options
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} className={classes.sectionContent}>
              <Typography variant="h4" className={classes.sectionTitle}>
                Outdoor Movie Nights
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body1" className={classes.sectionText}>
                Book an outdoor movie night {isGeneralAreaPage ? "anywhere in the Phoenix metro" : `in ${formattedCity} and nearby areas`}.
                We provide the inflatable screen, bright HD projector, professional audio, delivery and setup,
                an on-site technician to run the show, and teardown after the credits. It’s the easiest way to host a
                backyard, school, church, HOA, or park movie night near you.
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "Inflatable screen sizes for small yards to large crowds",
                  "HD projector with simple laptop/streaming hookup",
                  "Pro PA speakers, mixer & pre-show music",
                  "Delivery, setup, on-site tech & teardown included",
                ].map((item, i) => (
                  <ListItem key={i} className={classes.listItem}>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <Box className={classes.buttonContainerMobile}>
                <Button size="medium" className={classes.contactButton} component={Link} to="/movie-nights-options">
                  View Options
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 2: Concessions & Add-Ons (content OK here, not in SEO) */}
        <Grid item xs={12} id="productivity-section" className={classes.serviceSection}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box className={classes.imageButtonWrapper}>
                <img
                  src={ConcessionsImage}
                  alt={`Concessions setup (popcorn, candy, drinks)${isGeneralAreaPage ? " in the Phoenix metro area" : ` in ${formattedCity}`}`}
                  className={classes.sectionImage}
                  loading="lazy"
                />
                <Box className={classes.buttonContainerDesktop}>
                  <Button size="medium" className={classes.contactButton} component={Link} to="/concessions-options">
                    View Options
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} className={classes.sectionContent}>
              <Typography variant="h4" className={classes.sectionTitle}>
                Concessions & Add-Ons
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body1" className={classes.sectionText}>
                Elevate your movie night with fresh popcorn, sweet treats, and helpful equipment add-ons.
                Choose concessions, seating, generators, microphones, sponsor slides, and more—available
                {isGeneralAreaPage ? " across the Phoenix metro." : ` in ${formattedCity}.`}
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "Fresh popcorn machine & supplies",
                  "Candy, cotton candy & cold drinks",
                  "Chairs, tables, generators & cables",
                  "Mic, pre-show music & sponsor slides",
                ].map((item, i) => (
                  <ListItem key={i} className={classes.listItem}>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <Box className={classes.buttonContainerMobile}>
                <Button size="medium" className={classes.contactButton} component={Link} to="/concessions-options">
                  View Options
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 3: Ice Cream & Coffee Food Truck (content OK here, not in SEO) */}
        <Grid item xs={12} id="system-inspection-section" className={classes.serviceSection} style={{ marginBottom: -15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box className={classes.imageButtonWrapper}>
                <img
                  src={FoodTruckImage}
                  alt={`Ice cream & coffee food truck serving events${isGeneralAreaPage ? " in the Phoenix metro area" : ` in ${formattedCity}`}`}
                  className={classes.sectionImage}
                  loading="lazy"
                />
                <Box className={classes.buttonContainerDesktop}>
                  <Button size="medium" className={classes.contactButton} component={Link} to="/ice-cream-food-truck">
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} className={classes.sectionContent}>
              <Typography variant="h4" className={classes.sectionTitle}>
                Ice Cream & Coffee Food Truck
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body1" className={classes.sectionText}>
                Add a memorable treat with our full-service ice cream and coffee truck—sundaes, novelties, espresso,
                lattes, and cold brew. We serve guests quickly and professionally
                {isGeneralAreaPage ? " across the Phoenix metro." : ` in ${formattedCity} and surrounding areas.`} Dairy-free options available.
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "Premium ice cream, sundaes & novelties",
                  "Espresso drinks, coffee & hot cocoa",
                  "Fast, friendly, uniformed staff",
                  "Great for schools, HOAs & corporate",
                ].map((item, i) => (
                  <ListItem key={i} className={classes.listItem}>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <Box className={classes.buttonContainerMobile}>
                <Button size="medium" className={classes.contactButton} component={Link} to="/ice-cream-food-truck">
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <CallToAction />
    </section>
  );
}

export default Locations;
