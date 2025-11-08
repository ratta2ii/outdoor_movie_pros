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
                <NavBar />
                <ScrollToTop />
                <Routes>
                    {/* Location-specific Pages */}
                    <Route path="/anthem" element={<Locations />} />
                    <Route path="/buckeye" element={<Locations />} />
                    <Route path="/chandler" element={<Locations />} />
                    <Route path="/gilbert" element={<Locations />} />
                    <Route path="/glendale" element={<Locations />} />
                    <Route path="/goodyear" element={<Locations />} />
                    <Route path="/mesa" element={<Locations />} />
                    <Route path="/paradise-valley" element={<Locations />} />
                    <Route path="/peoria" element={<Locations />} />
                    <Route path="/phoenix" element={<Locations />} />
                    <Route path="/queen-creek" element={<Locations />} />
                    <Route path="/san-tan-valley" element={<Locations />} />
                    <Route path="/scottsdale" element={<Locations />} />
                    <Route path="/tempe" element={<Locations />} />
                    <Route path="/tolleson" element={<Locations />} />

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
