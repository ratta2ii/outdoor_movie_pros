import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Image imports (kept for build optimization)
import GalleryImage1 from './../../Assets/Images/GalleryImages/gallery1.webp';
import GalleryImage2 from './../../Assets/Images/GalleryImages/gallery2.webp';
import GalleryImage3 from './../../Assets/Images/GalleryImages/gallery3.webp';
import GalleryImage4 from './../../Assets/Images/GalleryImages/gallery4.webp';
import GalleryImage5 from './../../Assets/Images/GalleryImages/gallery5.webp';
import GalleryImage6 from './../../Assets/Images/GalleryImages/gallery6.webp';
import GalleryImage7 from './../../Assets/Images/GalleryImages/gallery7.webp';
import GalleryImage8 from './../../Assets/Images/GalleryImages/gallery8.webp';
import GalleryImage9 from './../../Assets/Images/GalleryImages/gallery9.webp';
import GalleryImage10 from './../../Assets/Images/GalleryImages/gallery10.webp';
import GalleryImage11 from './../../Assets/Images/GalleryImages/gallery11.webp';
import GalleryImage12 from './../../Assets/Images/GalleryImages/gallery12.webp';
import GalleryImage13 from './../../Assets/Images/GalleryImages/gallery13.webp';
import GalleryImage14 from './../../Assets/Images/GalleryImages/gallery14.webp';

const IMAGES = [
    { src: GalleryImage1, alt: 'Outdoor movie night setup in Phoenix' },
    { src: GalleryImage2, alt: 'Inflatable outdoor movie screen at a community event' },
    { src: GalleryImage3, alt: 'Backyard outdoor movie night with projector and screen' },
    { src: GalleryImage4, alt: 'Large inflatable screen for park movie night' },
    { src: GalleryImage5, alt: 'Outdoor cinema audience enjoying a movie in Phoenix' },
    { src: GalleryImage6, alt: 'Outdoor movie screen and audio setup at sunset' },
    { src: GalleryImage7, alt: 'Neighborhood outdoor movie night with inflatable screen' },
    { src: GalleryImage8, alt: 'Outdoor projector and screen rental in use' },
    { src: GalleryImage9, alt: 'Inflatable movie screen at a school field' },
    { src: GalleryImage10, alt: 'Outdoor movie night with professional audio' },
    { src: GalleryImage11, alt: 'Backyard inflatable movie screen during evening' },
    { src: GalleryImage12, alt: 'Community outdoor movie with large screen' },
    { src: GalleryImage13, alt: 'Outdoor cinema setup with HD projector' },
    { src: GalleryImage14, alt: 'Park movie night using inflatable screen' },
];

// Styled components (unchanged — perfect)
const GalleryContainer = styled(Box)`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 220px;
  margin-bottom: 100px;
  @media (max-width: 850px) {
    margin-top: 150px;  
    margin-bottom: 75px;
  }
  @media (max-width: 600px) {
    margin-top: 100px;  
    margin-bottom: 25px;
  }
`;

const GalleryGrid = styled(Box)`
  display: grid;
  width: 100%;
  gap: 1.5rem;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryItem = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    aspect-ratio: 1 / 1;
  }
`;

const Gallery = () => {
    const canonicalUrl = "https://outdoormoviepros.com/gallery";

    return (
        <GalleryContainer>
            <Helmet>
                {/* Core SEO */}
                <title>Outdoor Movie Night Photos | Phoenix Inflatable Movie Screens</title>
                <meta
                    name="description"
                    content="See photos of outdoor movie nights across Phoenix—inflatable movie screens, HD projection, professional audio, and full-service setups."
                />
                <meta name="keywords" content="outdoor movie gallery phoenix, inflatable screen photos, backyard movie night images, phoenix event photos" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Voice Search */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Open Graph — MINIMAL OVERRIDE */}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Outdoor Movie Night Photos | Phoenix Inflatable Screens" />
                <meta
                    property="og:description"
                    content="Browse real outdoor movie night photos from Phoenix events: inflatable screens, HD projectors, and pro audio setups."
                />

                {/* Twitter — MINIMAL OVERRIDE */}
                <meta name="twitter:title" content="Outdoor Movie Night Photos | Phoenix Inflatable Screens" />
                <meta
                    name="twitter:description"
                    content="Gallery of outdoor movie nights in Phoenix — inflatable screens, HD projection, and full setups."
                />

                {/* JSON-LD: WebPage — SLASH BEFORE # */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "@id": `${canonicalUrl}/#webpage`,
                                "url": canonicalUrl,
                                "name": "Outdoor Movie Night Photos | Phoenix Inflatable Movie Screens",
                                "description": "See photos of outdoor movie nights across Phoenix—inflatable movie screens, HD projection, professional audio, and full-service setups.",
                                "isPartOf": { "@id": "https://outdoormoviepros.com/#website" },
                                "about": { "@id": "https://outdoormoviepros.com/#business" },
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outdoormoviepros.com" },
                                        { "@type": "ListItem", "position": 2, "name": "Gallery", "item": canonicalUrl }
                                    ]
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* sr-only heading for SEO/a11y */}
            <h1 className="sr-only">
                Outdoor movie night photo gallery for Phoenix and nearby cities
            </h1>

            <GalleryGrid>
                {IMAGES.map((image, index) => (
                    <GalleryItem key={`gallery-item-${index}`}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                        />
                    </GalleryItem>
                ))}
            </GalleryGrid>
        </GalleryContainer>
    );
};

export default Gallery;
