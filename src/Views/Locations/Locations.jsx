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

/**
 * Cities supported (exactly the routes you listed) + /locations:
 * phoenix, mesa, scottsdale, gilbert, chandler, tempe, paradise-valley,
 * glendale, peoria, queen-creek, san-tan-valley, tolleson, buckeye,
 * goodyear, anthem, and the general /locations page.
 *
 * Fallback for unknown slugs -> /locations (prevents title/copy mixups).
 * Each city has expanded, unique copy for movie/concessions/food-truck sections.
 * Seating/tables references removed system-wide.
 */
const cityData = {
    locations: {
        formattedCity: null,
        cityShort: "Phoenix Metro",
        regionLabel: "Phoenix Metro Area, including Maricopa, Pinal, and surrounding counties",
        visibleH1: "Outdoor Movie Screen Rentals Near Me — Phoenix Metro",
        introCopy:
            "We serve the entire Phoenix Metro Area, including Maricopa, Pinal, and surrounding counties. Book an unforgettable outdoor movie night, enhance it with concessions, or bring our ice cream sundae & coffee food truck to your next gathering under the stars. Discover top-rated outdoor movie screen rentals near me for backyard cinema, community dive-in pool parties, and movies in the park across the Valley.",
        readyToSchedule: "Ready to schedule your event?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Inflatable outdoor movie screen rentals near me in the Phoenix metro area",
        title: "Outdoor Movie Screen Rental Near Me | Phoenix Metro Locations",
        description:
            "Find inflatable outdoor movie screen rentals near you across the Phoenix metro. Full-service backyard and park movie nights with bright HD projector, pro sound, setup, on-site tech, and teardown. Ideal for dive-in pool parties, movies in the park, and outdoor cinema events in Arizona’s desert nights.",
        ogTitle: "Outdoor Movie Screen Rentals Near Me | Phoenix Metro Locations",
        ogDescription:
            "Inflatable outdoor movie screen rentals across Phoenix metro—HD projector, pro sound, delivery, setup, on-site tech, and teardown for outdoor movie nights.",
        movieSectionAlt: "Outdoor movie screen setup in the Phoenix metro area",
        movieSectionText:
            "Book an outdoor movie night anywhere in the Phoenix metro. We provide the inflatable screen, bright HD projector, professional audio, delivery and setup, an on-site technician to run the show, and teardown after the credits. Popular spots include backyard lawns, community parks, rooftop decks, and poolside dive-ins. Whether you’re in downtown Phoenix, North Scottsdale, East Mesa, or West Chandler, we tailor each setup to your space and crowd size for a seamless movie night experience.",
        concessionsText:
            "Add the finishing touch with concessions and helpful add-ons. Choose popcorn, cotton candy, bottled drinks, generators, microphones, sponsor slides, and more—available across the Phoenix metro. Neighborhood festivals and park series benefit from clean cable runs, pre-show music, and straightforward power planning for consistent playback in warm desert evenings.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in the Phoenix metro area",
        foodTruckText:
            "Pair your movie with our ice cream & coffee food truck—sundaes, novelties, espresso, lattes, and cold brew. We serve quickly across the Valley, from North Phoenix to the Southeast Cities, with dairy-free options and kid-favorite flavors. It’s a perfect match for poolside dive-ins and community nights when the temperature drops after sunset.",
    },

    phoenix: {
        formattedCity: "Phoenix, AZ",
        cityShort: "Phoenix",
        regionLabel: "Phoenix, AZ and nearby communities",
        visibleH1: "Outdoor Movie Screen Rentals in Phoenix, AZ",
        introCopy:
            "We serve Phoenix, AZ and nearby communities. Bring the magic of outdoor movie nights to your backyard or local park with our inflatable screens, bright projectors, and pro sound systems. Add concessions for that theater vibe or our ice cream sundae & coffee food truck for a sweet twist. From downtown rooftops to North Phoenix pool parties, we tailor each setup to your space.",
        readyToSchedule: "Ready to schedule your event in Phoenix?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Inflatable outdoor movie screen rental in Phoenix, AZ",
        title: "Outdoor Movie Screen Rental in Phoenix, AZ",
        description:
            "Outdoor movie screen rentals in Phoenix, AZ. Full-service backyard and park movie nights with large inflatable screens, HD projector, pro sound, setup, on-site tech, and teardown included. Perfect for dive-in movies and outdoor cinema under the desert stars.",
        ogTitle: "Outdoor Movie Screen Rental in Phoenix, AZ",
        ogDescription:
            "Inflatable outdoor movie screen rental in Phoenix, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for unforgettable outdoor movie nights.",
        movieSectionAlt: "Outdoor movie screen setup in Phoenix, AZ",
        movieSectionText:
            "Host an outdoor movie night in Phoenix with a package sized for your crowd and space. Our tech runs the show end-to-end—screen, projector, audio, and timing—so you can relax with your guests. Popular Phoenix spots include Encanto Park lawns, Roosevelt Row rooftops, the green spaces around Central Ave, and pool decks in Arcadia and Ahwatukee. For larger community nights near South Mountain or Papago Park, we tune audio for open fields and set long-throw projections for sharp, bright images. From backyard premieres to school fundraisers and church gatherings, we make outdoor cinema simple across the city.",
        concessionsText:
            "Make it feel like a theater with concessions and event add-ons: popcorn, cotton candy, sweets, drinks, glow necklaces, generators, mic kits, and more. In Phoenix downtown and Midtown, sponsor slides and short announcements help recognize partners; in North Phoenix and Desert Ridge neighborhoods, pre-show music keeps the energy up while guests settle in. We keep cable runs neat and power reliable so your feature starts right on time.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Phoenix, AZ",
        foodTruckText:
            "Cool treats and barista drinks keep Phoenix events humming. Our food truck serves the best ice cream sundaes, espresso and lattes—with dairy-free choices. It’s a favorite add-on for warm summer evenings at neighborhood parks like Hance and Cesar Chavez Park and for HOA parties across North Phoenix.",
    },

    scottsdale: {
        formattedCity: "Scottsdale, AZ",
        cityShort: "Scottsdale",
        regionLabel: "Scottsdale, AZ and nearby communities",
        visibleH1: "Inflatable Movie Screen Rental in Scottsdale, AZ",
        introCopy:
            "We serve Scottsdale, AZ and nearby communities. Create an elegant outdoor cinema at home, a resort, or a community green. Our team sizes the screen, tunes audio for your space, and keeps the run-of-show on track. Add concessions or our ice cream & coffee food truck for a polished experience.",
        readyToSchedule: "Ready to schedule your event in Scottsdale?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Inflatable movie screen rental in Scottsdale, AZ",
        title: "Inflatable Movie Screen Rental in Scottsdale, AZ",
        description:
            "Inflatable movie screen rentals in Scottsdale, AZ. Full-service setups for luxury backyard parties and resort events with giant inflatable screens, HD projector, pro audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Inflatable Movie Screen Rental in Scottsdale, AZ",
        ogDescription:
            "Inflatable movie screen rental in Scottsdale, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for upscale events and dive-in movies.",
        movieSectionAlt: "Outdoor movie screen setup in Scottsdale, AZ",
        movieSectionText:
            "Scottsdale screenings often mean polished spaces—pool decks, turf lawns, and resort courtyards. We plan sightlines and projector throw for clear, bright viewing. Neighborhoods and venues we frequently support include DC Ranch, McCormick Ranch, Old Town rooftops, and community greens near the McCormick-Stillman Railroad Park. For boutique resorts and private estates, our crew uses discreet cabling and quiet setup/teardown windows to keep your event refined from first frame to credits.",
        concessionsText:
            "Offer upscale touches: popcorn, chilled beverages, sponsor slides, and a compact mic kit for brief welcomes. For resort pool series and neighborhood socials, we align timing with golden-hour lighting so photos and reels look great without delaying your feature.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Scottsdale, AZ",
        foodTruckText:
            "Add ice cream sundaes and espresso drinks for a refined finish. Service is fast and tidy—ideal for resort courtyards, neighborhood socials in DC Ranch and Gainey Ranch, and private gatherings across North and Central Scottsdale.",
    },

    mesa: {
        formattedCity: "Mesa, AZ",
        cityShort: "Mesa",
        regionLabel: "Mesa, AZ and nearby communities",
        visibleH1: "Backyard Movie Night Rental in Mesa, AZ",
        introCopy:
            "We serve Mesa, AZ and nearby communities. Family-friendly neighborhoods and school fields are perfect for outdoor movies. We match the screen to your yard or park space and keep the sound comfortable for nearby homes.",
        readyToSchedule: "Ready to schedule your event in Mesa?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Backyard movie night rental in Mesa, AZ",
        title: "Backyard Movie Night Rental in Mesa, AZ",
        description:
            "Backyard movie night rentals in Mesa, AZ. Complete packages for park movie nights and school events featuring large inflatable screens, HD projector, professional sound, full setup, on-site tech, and teardown.",
        ogTitle: "Backyard Movie Night Rental in Mesa, AZ",
        ogDescription:
            "Backyard movie night rental in Mesa, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for family gatherings and dive-in movies.",
        movieSectionAlt: "Outdoor movie screen setup in Mesa, AZ",
        movieSectionText:
            "Mesa favorites include neighborhood greens and school lawns near Pioneer Park, Riverview, and Red Mountain Park. We bring the screen, projector, and PA, handle show timing, and take care of laptop/streaming hookups. Eastmark block parties, Downtown Mesa community nights, and church youth events all benefit from crisp images, pro audio, and full service movie nights.",
        concessionsText:
            "Keep it simple and fun: popcorn, candy, bottled drinks, generators, and a small mic for announcements. For PTA nights, we can roll pre-show slides to thank sponsors or promote upcoming school events—while keeping lines short so families get to the feature quickly.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Mesa, AZ",
        foodTruckText:
            "Our truck is a hit at family events—classic sundaes, floats, iced lattes, and dairy-free options. Fast lines and friendly service keep kids and parents smiling from Eastmark to Red Mountain, start to credits.",
    },

    chandler: {
        formattedCity: "Chandler, AZ",
        cityShort: "Chandler",
        regionLabel: "Chandler, AZ and nearby communities",
        visibleH1: "Movies in the Park Rental in Chandler, AZ",
        introCopy:
            "We serve Chandler, AZ and nearby communities. From HOA lawns to city park nights, we plan power, layout, and sightlines so every guest can see and hear clearly.",
        readyToSchedule: "Ready to schedule your event in Chandler?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Movies in the park rental in Chandler, AZ",
        title: "Movies in the Park Rental in Chandler, AZ",
        description:
            "Movies in the park rentals in Chandler, AZ. Full-service for HOA events and corporate gatherings with giant inflatable screens, HD projector, pro sound, setup, on-site tech, and teardown.",
        ogTitle: "Movies in the Park Rental in Chandler, AZ",
        ogDescription:
            "Movies in the park rental in Chandler, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for community events and dive-ins.",
        movieSectionAlt: "Outdoor movie screen setup in Chandler, AZ",
        movieSectionText:
            "For Chandler park series, HOA socials, and more, we right-size the screen, manage cable runs, and balance audio for open spaces. Ideal for Tumbleweed Park festivals, Veterans Oasis Lake evenings, and greenbelts across Ocotillo and Fulton Ranch. Corporate events along the Price Corridor benefit from sponsor slides, tight cues, and a polished pre-roll sequence.",
        concessionsText:
            "Round out the event with popcorn, cotton candy, cold drinks, generator planning, and a simple mic kit. We’ll coordinate quick announcements and raffle winners between trailers so pacing stays lively and family-friendly.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Chandler, AZ",
        foodTruckText:
            "Treat guests to sundaes and espresso drinks. We keep service moving for larger crowds—great for corporate gatherings in the Price Corridor and seasonal HOA movie nights throughout Chandler.",
    },

    gilbert: {
        formattedCity: "Gilbert, AZ",
        cityShort: "Gilbert",
        regionLabel: "Gilbert, AZ and nearby communities",
        visibleH1: "Backyard Cinema Rental in Gilbert, AZ",
        introCopy:
            "We serve Gilbert, AZ and nearby communities. Backyard lawns and clubhouse lawns make comfortable viewing areas. We help with projector placement and screen angles so people can mingle and still see the film.",
        readyToSchedule: "Ready to schedule your event in Gilbert?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Backyard cinema rental in Gilbert, AZ",
        title: "Backyard Cinema Rental in Gilbert, AZ",
        description:
            "Backyard cinema rentals in Gilbert, AZ. Hassle-free packages for backyard movie nights and local festivals with large inflatable screens, HD projector, pro audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Backyard Cinema Rental in Gilbert, AZ",
        ogDescription:
            "Backyard cinema rental in Gilbert, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for relaxed evenings and dive-in fun.",
        movieSectionAlt: "Outdoor movie screen setup in Gilbert, AZ",
        movieSectionText:
            "From Power Ranch to Agritopia and neighborhoods near Freestone Park, we set up quick and clean—screen, projector, audio, and show control. HOA socials, birthday watch parties, and small festivals get bright, sharp visuals without overwhelming nearby homes. We’ll map cable routes around walkways and keep the run-of-show on time so families can plan the night.",
        concessionsText:
            "Popcorn, cotton candy, and bottled drinks are easy crowd-pleasers. Add sponsor slides or a quick mic welcome for HOA boards and school organizers. We keep concession logistics compact so backyard events stay cozy and relaxed.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Gilbert, AZ",
        foodTruckText:
            "Coffee for parents, scoops for kids. We offer espresso, oat-milk lattes, classic cones and allergy-friendly choices—an easy upgrade for neighborhood movie nights across Gilbert.",
    },
    tempe: {
        formattedCity: "Tempe, AZ",
        cityShort: "Tempe",
        regionLabel: "Tempe, AZ and nearby communities",
        visibleH1: "Outdoor Cinema Rental in Tempe, AZ",
        introCopy:
            "We serve Tempe, AZ and nearby communities. Campus groups, clubs, and neighborhood parks use our packages for simple, reliable movie nights with plug-and-play streaming.",
        readyToSchedule: "Ready to schedule your event in Tempe?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Outdoor cinema rental in Tempe, AZ",
        title: "Outdoor Cinema Rental in Tempe, AZ",
        description:
            "Outdoor cinema rentals in Tempe, AZ. Dynamic setups for university events and park screenings with giant inflatable screens, HD projector, pro sound, setup, on-site tech, and teardown.",
        ogTitle: "Outdoor Cinema Rental in Tempe, AZ",
        ogDescription:
            "Outdoor cinema rental in Tempe, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for energetic gatherings and dive-ins.",
        movieSectionAlt: "Outdoor movie screen setup in Tempe, AZ",
        movieSectionText:
            "We support student orgs and community groups with easy tech: HDMI from our laptop/console, clear audio for open lawns, and a tech to keep timing tight. Great for Tempe Beach Park series, Kiwanis Park, and ASU club events around campus greens. For neighborhood associations, we balance volume and plan neat cable paths so families can spread out comfortably.",
        concessionsText:
            "We can bring the popcorn, cotton candy and cool beverages to your next event. Add a small mic for announcements or pre-show trivia—perfect for campus energy and club fundraisers. We can roll sponsor slides to recognize partners between trailers and feature.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Tempe, AZ",
        foodTruckText:
            "Cold brew, iced lattes, and classic ice cream sundaes go fast at Tempe events. Our crew moves quickly so screenings start on time—nice fit for student nights and park gatherings.",
    },

    "paradise-valley": {
        formattedCity: "Paradise Valley, AZ",
        cityShort: "Paradise Valley",
        regionLabel: "Paradise Valley, AZ and nearby communities",
        visibleH1: "Luxury Outdoor Movie Rental in Paradise Valley, AZ",
        introCopy:
            "We serve Paradise Valley, AZ and nearby communities. Private estates and resort courtyards call for careful placement, discreet cabling, and balanced audio—our crew handles every detail.",
        readyToSchedule: "Ready to schedule your event in Paradise Valley?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Luxury outdoor movie rental in Paradise Valley, AZ",
        title: "Luxury Outdoor Movie Rental in Paradise Valley, AZ",
        description:
            "Luxury outdoor movie rentals in Paradise Valley, AZ. Tailored setups for private estates and resorts with giant inflatable screens, HD projector, refined audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Luxury Outdoor Movie Rental in Paradise Valley, AZ",
        ogDescription:
            "Luxury outdoor movie rental in Paradise Valley, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for upscale evenings and poolside cinema.",
        movieSectionAlt: "Outdoor movie screen setup in Paradise Valley, AZ",
        movieSectionText:
            "We plan sightlines around view corridors and landscaping, optimize throw distance for crisp images, and keep audio tasteful for quiet neighborhoods. Popular settings include estate lawns off Lincoln Dr., intimate resort courtyards, and pool decks with dramatic Camelback Mountain backdrops. Our crew arrives in a tidy footprint and coordinates timing to align with sunset for a seamless, elegant experience.",
        concessionsText:
            "Offer elevated touches—popcorn, cotton candy, chilled beverages, sponsor slides, and a compact mic for brief remarks. We keep logistics discreet so your gathering feels effortless from pre-roll to credits.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Paradise Valley, AZ",
        foodTruckText:
            "Espresso bar, nitro cold brew, and premium ice cream sundaes served with white-glove care—an easy add-on for elegant poolside screenings and private estate premieres.",
    },

    glendale: {
        formattedCity: "Glendale, AZ",
        cityShort: "Glendale",
        regionLabel: "Glendale, AZ and nearby communities",
        visibleH1: "Dive-In Movie Rental in Glendale, AZ",
        introCopy:
            "We serve Glendale, AZ and nearby communities. Sports-themed watch parties and family films both work great with our inflatable screens and tuned audio.",
        readyToSchedule: "Ready to schedule your event in Glendale?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Dive-in movie rental in Glendale, AZ",
        title: "Dive-In Movie Rental in Glendale, AZ",
        description:
            "Dive-in movie rentals in Glendale, AZ. Sports-friendly packages for tailgates and park events with large inflatable screens, HD projector, pro audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Dive-In Movie Rental in Glendale, AZ",
        ogDescription:
            "Dive-in movie rental in Glendale, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for sports fans and outdoor movies.",
        movieSectionAlt: "Outdoor movie screen setup in Glendale, AZ",
        movieSectionText:
            "We set up clear sightlines for big groups and tune audio to open fields. Great for HOA lawns, school quads, and family events near Westgate, Sahuaro Ranch Park, and more.... For pool-friendly dive-ins, we plan safe cable paths and projector placement so everyone can see—even from the shallow end.",
        concessionsText:
            "Popcorn, candy, and bottled drinks keep things simple. Add sponsor slides or a mic for halftime shout-outs and raffle winners at community nights and youth-league celebrations.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Glendale, AZ",
        foodTruckText:
            "Sundaes for kids, espresso for adults—fast service for game nights and movie nights alike. Dairy-free options are always available for Glendale families.",
    },

    peoria: {
        formattedCity: "Peoria, AZ",
        cityShort: "Peoria",
        regionLabel: "Peoria, AZ and nearby communities",
        visibleH1: "Poolside Movie Rental in Peoria, AZ",
        introCopy:
            "We serve Peoria, AZ and nearby communities. Quiet neighborhoods and lakeside parks call for thoughtful audio and smart screen placement—our team handles it for you.",
        readyToSchedule: "Ready to schedule your event in Peoria?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Poolside movie rental in Peoria, AZ",
        title: "Poolside Movie Rental in Peoria, AZ",
        description:
            "Poolside movie rentals in Peoria, AZ. Tranquil setups for neighborhood movie nights and park series with giant inflatable screens, HD projector, pro sound, setup, on-site tech, and teardown.",
        ogTitle: "Poolside Movie Rental in Peoria, AZ",
        ogDescription:
            "Poolside movie rental in Peoria, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for serene evenings and dive-in movies.",
        movieSectionAlt: "Outdoor movie screen setup in Peoria, AZ",
        movieSectionText:
            "From Vistancia to Lake Pleasant and Rio Vista Park, we tailor throw distance and volume for comfortable viewing. Church fellowships, HOA lawns, and pool decks get a cinema feel without overpowering nearby homes. Our tech keeps the schedule tight so families can wrap up on time.",
        concessionsText:
            "Light, kid-friendly snacks and simple beverages work well for Peoria’s family nights. We can add sponsor slides and a compact mic kit for quick welcomes and thank-yous—perfect for HOA and school organizers.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Peoria, AZ",
        foodTruckText:
            "Cool, quick service—cones, sundaes, and iced coffee. It’s a smooth fit for lakeside parks and quiet neighborhood gatherings across Peoria.",
    },

    "queen-creek": {
        formattedCity: "Queen Creek, AZ",
        cityShort: "Queen Creek",
        regionLabel: "Queen Creek, AZ and nearby communities",
        visibleH1: "Dive-In Pool Party Rental in Queen Creek, AZ",
        introCopy:
            "We serve Queen Creek, AZ and nearby communities. Larger lots and community pools are perfect for inflatable screens—our crew plans throw distance and safe cable routes.",
        readyToSchedule: "Ready to schedule your event in Queen Creek?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Dive-in pool party rental in Queen Creek, AZ",
        title: "Dive-In Pool Party Rental in Queen Creek, AZ",
        description:
            "Dive-in pool party rentals in Queen Creek, AZ. Comfortable setups for farmstead movie nights and community pools with giant inflatable screens, HD projector, pro sound, setup, on-site tech, and teardown.",
        ogTitle: "Dive-In Pool Party Rental in Queen Creek, AZ",
        ogDescription:
            "Dive-in pool party rental in Queen Creek, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for family nights and outdoor cinema.",
        movieSectionAlt: "Outdoor movie screen setup in Queen Creek, AZ",
        movieSectionText:
            "We size screens for wide backyards and plan pool-safe layouts for dive-ins. Great for church picnics, PTO nights, and neighborhood socials near Schnepf Farms, Mansel Carter Oasis Park, and Founders’ Park. With careful projector placement and cable routing, everyone gets a clear view without cluttering your yard or pool deck.",
        concessionsText:
            "Popcorn and cotton candy are summer staples in Queen Creek. Add candy, bottled drinks, pre-show music, sponsors on screen, and a compact mic for quick announcements—simple touches that make a big difference for family events.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Queen Creek, AZ",
        foodTruckText:
            "Sweet treats and iced espresso drinks fit QC’s family events. We offer dairy-free and gluten-free options so everyone gets a dessert during warm-weather pool movies and backyard premieres.",
    },

    "san-tan-valley": {
        formattedCity: "San Tan Valley, AZ",
        cityShort: "San Tan Valley",
        regionLabel: "San Tan Valley, AZ and nearby communities",
        visibleH1: "Neighborhood Movie Night Rental in San Tan Valley, AZ",
        introCopy:
            "We serve San Tan Valley, AZ and nearby communities. Greenbelts, clubhouses, and cul-de-sacs make great viewing areas—our crew keeps cables neat and audio comfortable.",
        readyToSchedule: "Ready to schedule your event in San Tan Valley?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Neighborhood movie night rental in San Tan Valley, AZ",
        title: "Neighborhood Movie Night Rental in San Tan Valley, AZ",
        description:
            "Neighborhood movie night rentals in San Tan Valley, AZ. Turnkey packages for HOA and community events with inflatable screens, HD projector, pro sound, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Neighborhood Movie Night Rental in San Tan Valley, AZ",
        ogDescription:
            "Neighborhood movie night rental in San Tan Valley, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for family evenings and outdoor cinema.",
        movieSectionAlt: "Outdoor movie screen setup in San Tan Valley, AZ",
        movieSectionText:
            "We match screen size to your viewing area and plan projector throw for sharp images. Ideal for Johnson Ranch, Ironwood Crossing, Skyline Ranch, and community spaces off Hunt Highway. Our tech manages timing, pre-show content, and volume so neighbors can relax and enjoy the film.",
        concessionsText:
            "Popcorn, cotton candy, candy packs, and bottled drinks keep lines moving. We can include sponsor slides and a quick mic welcome for HOA boards and youth-group leaders—simple, effective, and budget-friendly.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in San Tan Valley, AZ",
        foodTruckText:
            "Fast service for family crowds—sundaes, iced coffee, and dairy-free options. Perfect for clubhouse greens and community park nights in San Tan Valley.",
    },

    tolleson: {
        formattedCity: "Tolleson, AZ",
        cityShort: "Tolleson",
        regionLabel: "Tolleson, AZ and nearby communities",
        visibleH1: "Community Movie Night Rental in Tolleson, AZ",
        introCopy:
            "We serve Tolleson, AZ and nearby communities. School fields and neighborhood parks make set-up straightforward—our tech handles timing, sound checks, and show flow.",
        readyToSchedule: "Ready to schedule your event in Tolleson?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Community movie night rental in Tolleson, AZ",
        title: "Community Movie Night Rental in Tolleson, AZ",
        description:
            "Community movie night rentals in Tolleson, AZ. Simple, reliable packages for school and community events with inflatable screens, HD projector, pro audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Community Movie Night Rental in Tolleson, AZ",
        ogDescription:
            "Community movie night rental in Tolleson, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for family nights and park screenings.",
        movieSectionAlt: "Outdoor movie screen setup in Tolleson, AZ",
        movieSectionText:
            "We plan seating areas and viewing angles (bring blankets!) so families settle in comfortably. Great fit for neighborhood lawns, school fields, and small park gatherings near Tolleson High and Veterans Park. Our crew keeps cues tight so raffles and shout-outs don’t delay the show.",
        concessionsText:
            "Popcorn and simple packaged snacks plus bottled drinks make lines quick. Add pre-show music, sponsor slides, and a compact mic kit for community announcements between trailers.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Tolleson, AZ",
        foodTruckText:
            "Quick sundaes, cones, and iced coffee keep guests happy without delaying the feature. Dairy-free choices are available for family-friendly nights in Tolleson.",
    },

    buckeye: {
        formattedCity: "Buckeye, AZ",
        cityShort: "Buckeye",
        regionLabel: "Buckeye, AZ and nearby communities",
        visibleH1: "Rural Outdoor Movie Rental in Buckeye, AZ",
        introCopy:
            "We serve Buckeye, AZ and nearby communities. Larger rural lots and community parks give you room for big screens—our crew sizes gear to your space.",
        readyToSchedule: "Ready to schedule your event in Buckeye?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Rural outdoor movie rental in Buckeye, AZ",
        title: "Rural Outdoor Movie Rental in Buckeye, AZ",
        description:
            "Rural outdoor movie rentals in Buckeye, AZ. Packages for frontier-style movie nights and community events with large inflatable screens, HD projector, pro audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Rural Outdoor Movie Rental in Buckeye, AZ",
        ogDescription:
            "Rural outdoor movie rental in Buckeye, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for open-sky gatherings and dive-ins.",
        movieSectionAlt: "Outdoor movie screen setup in Buckeye, AZ",
        movieSectionText:
            "We plan for longer throw distances and wind considerations common to open areas. Perfect for homesteads, HOA greens around Verrado and Sundance, and school fields near downtown Buckeye. Our power plans and cable routes keep things tidy even for larger crowd layouts.",
        concessionsText:
            "Portable concession setups work well: popcorn, candy, bottled drinks, pre-show music, sponsor slides, and a compact mic kit. Generators are available for remote lots where outlets are limited.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Buckeye, AZ",
        foodTruckText:
            "Guests love classic sundaes and iced coffee under open skies. We bring dairy-free choices and quick service so the show starts right on time in Buckeye.",
    },

    goodyear: {
        formattedCity: "Goodyear, AZ",
        cityShort: "Goodyear",
        regionLabel: "Goodyear, AZ and nearby communities",
        visibleH1: "Outdoor Movie Event Rental in Goodyear, AZ",
        introCopy:
            "We serve Goodyear, AZ and nearby communities. Neighborhood festivals and park series benefit from simple logistics—clear power plans, clean cable runs, and reliable audio.",
        readyToSchedule: "Ready to schedule your event in Goodyear?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Outdoor movie event rental in Goodyear, AZ",
        title: "Outdoor Movie Event Rental in Goodyear, AZ",
        description:
            "Outdoor movie event rentals in Goodyear, AZ. Packages for community festivals and park screenings with large inflatable screens, HD projector, pro audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Outdoor Movie Event Rental in Goodyear, AZ",
        ogDescription:
            "Outdoor movie event rental in Goodyear, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for parks and pool events.",
        movieSectionAlt: "Outdoor movie screen setup in Goodyear, AZ",
        movieSectionText:
            "We support events across Estrella and Palm Valley with screens sized for lawns and amphitheater-style slopes. Goodyear Community Park and local HOA greens are great for family nights—our tech keeps timing tight so sponsor reels and pre-show content play smoothly.",
        concessionsText:
            "Choose popcorn, cotton candy, and drinks, plus generator planning, sponsor slides, and a mic kit for quick announcements. We keep lines efficient so families are back at their blankets before lights-down.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Goodyear, AZ",
        foodTruckText:
            "Our truck handles crowds efficiently—ice cream sundaes to die for, and coffee drinks that fit family festivals and park gatherings across Goodyear.",
    },

    anthem: {
        formattedCity: "Anthem, AZ",
        cityShort: "Anthem",
        regionLabel: "Anthem, AZ and nearby communities",
        visibleH1: "Outdoor Movie Night Rental in Anthem, AZ",
        introCopy:
            "We serve Anthem, AZ and nearby communities. Community parks, club lawns, and cul-de-sacs make easy venues—our team plans layout, power, and projector throw so every seat has a view.",
        readyToSchedule: "Ready to schedule your event in Anthem?",
        phoneText: "(602) 638-6510",
        srOnlyH1: "Outdoor movie night rental in Anthem, AZ",
        title: "Outdoor Movie Night Rental in Anthem, AZ",
        description:
            "Outdoor movie night rentals in Anthem, AZ. Packages for neighborhood lawns and park events with inflatable screens, HD projector, pro audio, delivery, setup, on-site tech, and teardown.",
        ogTitle: "Outdoor Movie Night Rental in Anthem, AZ",
        ogDescription:
            "Outdoor movie night rental in Anthem, AZ—HD projector, pro sound, delivery, setup, on-site tech, and teardown for family nights and HOA events.",
        movieSectionAlt: "Outdoor movie screen setup in Anthem, AZ",
        movieSectionText:
            "We set clear sightlines for greenbelts and plan cable paths around walkways. Great for Anthem Community Park and HOA greens throughout the area. Dive-in movies are popular—our projector placement and audio balance make it easy for families to watch from blankets or poolside without hotspots or echoes.",
        concessionsText:
            "Popcorn and bottled drinks keep lines moving. Add sponsor slides, pre-show music, and a quick mic welcome—simple, polished touches that help HOA organizers run a smooth evening.",
        foodTruckAlt: "Ice cream & coffee food truck serving events in Anthem, AZ",
        foodTruckText:
            "Sundaes, both hot and iced coffee, and dairy-free options—fast service so the feature starts on time. A favorite add-on for Anthem HOA nights and family events.",
    },
};

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

    const pathSegment = location.pathname.split("/")[1] || "locations";
    // Fallback to general page to avoid mismatched titles if an unknown slug appears.
    const data = cityData[pathSegment] || cityData.locations;
    const isGeneralAreaPage = pathSegment === "locations";
    const pathForSeo = isGeneralAreaPage ? "/locations" : `/${pathSegment}`;

    const introCopy = (
        <>
            {data.introCopy}
            <br />
            <br />
            {data.readyToSchedule}{' '}
            <a href="tel:+16026386510" className={`${classes.phoneLink}`}>
                {data.phoneText}
            </a>
        </>
    );

    const movieBullets = [
        "Inflatable screen sizes for small yards to large crowds",
        "HD projector with simple laptop/streaming hookup",
        "Pro PA speakers, mixer & pre-show music",
        "Delivery, setup, on-site tech & teardown included",
    ];

    // Seating/tables removed here (and anywhere in copy above)
    const concessionsBullets = [
        "Fresh popcorn machine & supplies",
        "Candy, cotton candy & cold drinks",
        "Generators & safe cable management",
        "Mic, pre-show music & sponsor slides",
    ];

    const foodTruckBullets = [
        "Premium ice cream, sundaes & novelties",
        "Espresso drinks",
        "Fast, friendly, uniformed staff",
        "Great for schools, HOAs & corporate",
    ];

    return (
        <section className={classes.root}>
            <Helmet>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={`https://outdoormoviepros.com${pathForSeo}`} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Outdoor Movie Pros" />
                <meta property="og:url" content={`https://outdoormoviepros.com${pathForSeo}`} />
                <meta property="og:title" content={data.ogTitle} />
                <meta property="og:description" content={data.ogDescription} />
                <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
                <meta property="og:image:alt" content="Outdoor Movie Pros logo" />
                {/* === DYNAMIC JSON-LD (Breadcrumb + FAQ) === */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outdoormoviepros.com" },
                                    { "@type": "ListItem", "position": 2, "name": data.cityShort || "Phoenix Metro", "item": `https://outdoormoviepros.com${pathForSeo}` }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": `How much is an outdoor movie night in ${data.cityShort || "the Phoenix metro"}?`,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Starts at $349. Includes inflatable screen, HD projector, pro sound, delivery, setup, on-site tech, and teardown."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": `Do you serve ${data.cityShort || "all Phoenix metro cities"}?`,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": `Yes! We cover ${data.cityShort ? data.cityShort + " and all nearby communities" : "the entire Phoenix metro area"}.`
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <h1 className="sr-only">{data.srOnlyH1}</h1>

            <header className={classes.header}>
                <Box className={classes.titleBox}>
                    <Typography variant="h1" className={classes.title}>
                        {data.visibleH1}
                    </Typography>
                    <Typography className={classes.subText}>{introCopy}</Typography>
                </Box>
            </header>

            <Grid container spacing={4} className={classes.sectionContainer}>
                {/* Section 1: Outdoor Movie Nights */}
                <Grid item xs={12} id="sampling-section" className={classes.serviceSection}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box className={classes.imageButtonWrapper}>
                                <img src={GiantScreenImage} alt={data.movieSectionAlt} className={classes.sectionImage} />
                                <Box className={classes.buttonContainerDesktop}>
                                    <Button size="medium" className={classes.contactButton} component={Link} to="/movie-nights-options">
                                        View Options
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} className={classes.sectionContent}>
                            <Typography variant="h4" className={classes.sectionTitle}>Outdoor Movie Nights</Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.sectionText}>
                                {data.movieSectionText}
                            </Typography>
                            <List className={classes.bulletList}>
                                {movieBullets.map((item, i) => (
                                    <ListItem key={i} className={classes.listItem}>
                                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
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

                {/* Section 2: Concessions & Add-Ons */}
                <Grid item xs={12} id="productivity-section" className={classes.serviceSection}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box className={classes.imageButtonWrapper}>
                                <img
                                    src={ConcessionsImage}
                                    alt="Concessions and add-ons for outdoor movie nights"
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
                            <Typography variant="h4" className={classes.sectionTitle}>Concessions & Add-Ons</Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.sectionText}>
                                {data.concessionsText}
                            </Typography>
                            <List className={classes.bulletList}>
                                {concessionsBullets.map((item, i) => (
                                    <ListItem key={i} className={classes.listItem}>
                                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
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

                {/* Section 3: Ice Cream & Coffee Food Truck */}
                <Grid item xs={12} id="system-inspection-section" className={classes.serviceSection} style={{ marginBottom: -15 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box className={classes.imageButtonWrapper}>
                                <img src={FoodTruckImage} alt={data.foodTruckAlt} className={classes.sectionImage} loading="lazy" />
                                <Box className={classes.buttonContainerDesktop}>
                                    <Button size="medium" className={classes.contactButton} component={Link} to="/ice-cream-food-truck">
                                        Learn More
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7} className={classes.sectionContent}>
                            <Typography variant="h4" className={classes.sectionTitle}>Ice Cream & Coffee Food Truck</Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.sectionText}>
                                {data.foodTruckText}
                            </Typography>
                            <List className={classes.bulletList}>
                                {foodTruckBullets.map((item, i) => (
                                    <ListItem key={i} className={classes.listItem}>
                                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
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

            <CallToAction />
        </section>
    );
}

export default Locations;
