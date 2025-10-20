import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer';
import Home from "./Views/Home/Home";
import Locations from "./Views/Locations/Locations";
import Gallery from "./Views/Gallery/Gallery";
import Contact from "./Views/Contact/Contact";
import MovieNightsOptions from "./Views/Products/MovieNightsOptions/MovieNightsOptions";
import ConcessionsOptions from "./Views/Products/ConcessionsOptions/ConcessionsOptions";
import IceCreamFoodTruck from "./Views/Products/IceCreamFoodTruck/IceCreamFoodTruck";
import Error from './Components/Error/Error';
import { Helmet } from "react-helmet";
import ScrollToTop from "./Components/ScrollToTop";
import FAQs from "./Views/FAQs/FAQs";
import Loader from "./Components/Loader";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate minimal load delay or use actual asset check
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300); // or check for images/fonts

        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="root" style={{ flex: 1 }}>
                <Helmet
                    defaultTitle="Inflatable Outdoor Movie Screen Rentals in Phoenix"
                    titleTemplate="%s | Outdoor Movie Pros Phoenix"
                >
                    {/* Canonical (each page should override with its own path where applicable) */}
                    <link rel="canonical" href="https://outdoormoviepros.com" />

                    {/* Global description (route components can override) */}
                    <meta
                        name="description"
                        content="Inflatable outdoor movie screen rentals in Phoenix and nearby cities. Full-service backyard and park movie nights with HD projector, pro sound, setup and teardown."
                    />

                    {/* Indexing policy */}
                    <meta name="robots" content="index,follow,max-image-preview:large" />

                    {/* Open Graph defaults */}
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Outdoor Movie Pros" />
                    <meta property="og:url" content="https://outdoormoviepros.com" />
                    <meta property="og:title" content="Inflatable Outdoor Movie Screen Rentals in Phoenix" />
                    <meta
                        property="og:description"
                        content="Full-service outdoor movie night rentals—inflatable screens, projector, and pro audio for backyards, parks, schools, and HOAs."
                    />
                    <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
                    <meta property="og:locale" content="en_US" />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Inflatable Outdoor Movie Screen Rentals in Phoenix" />
                    <meta
                        name="twitter:description"
                        content="Backyard & park movie night packages with inflatable screens, projector, and pro sound. We deliver, set up, and run the show."
                    />
                    <meta name="twitter:image" content="https://outdoormoviepros.com/company-logo.webp" />

                    {/* Author */}
                    <meta name="author" content="Outdoor Movie Pros" />

                    {/* WebSite schema (LocalBusiness already lives in index.html) */}
                    <script type="application/ld+json">{`
                    {
                        "@context":"https://schema.org",
                        "@type":"WebSite",
                        "@id":"https://outdoormoviepros.com/#website",
                        "url":"https://outdoormoviepros.com",
                        "name":"Outdoor Movie Pros",
                        "inLanguage":"en-US"
                    }`}</script>
                </Helmet>
                
                <NavBar />
                <ScrollToTop />
                <Routes>
                    {/* Location-specific Pages */}
                    <Route path="/phoenix" element={<Locations />} />
                    <Route path="/mesa" element={<Locations />} />
                    <Route path="/scottsdale" element={<Locations />} />
                    <Route path="/gilbert" element={<Locations />} />
                    <Route path="/chandler" element={<Locations />} />
                    <Route path="/tempe" element={<Locations />} />
                    <Route path="/paradise-valley" element={<Locations />} />
                    <Route path="/glendale" element={<Locations />} />
                    <Route path="/peoria" element={<Locations />} />
                    <Route path="/queen-creek" element={<Locations />} />
                    <Route path="/san-tan-valley" element={<Locations />} />
                    <Route path="/tolleson" element={<Locations />} />
                    <Route path="/buckeye" element={<Locations />} />
                    <Route path="/goodyear" element={<Locations />} />
                    <Route path="/anthem" element={<Locations />} />

                    {/* Hooking up for drawer links */}
                    <Route path="/locations" element={<Locations />} />

                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ice-cream-food-truck" element={<IceCreamFoodTruck />} />
                    <Route path="/concessions-options" element={<ConcessionsOptions />} />
                    <Route path="/movie-nights-options" element={<MovieNightsOptions />} />
                    <Route path="/" element={<Home />} />

                    {/* ✅ Catch-all route for bad paths */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </main>
    );
}

export default App;
