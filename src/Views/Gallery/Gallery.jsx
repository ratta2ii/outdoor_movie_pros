import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Image imports
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

// Styled components for the gallery
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

  /* xs: 1 column (<600px) */
  grid-template-columns: repeat(1, 1fr);

  /* sm: 2 columns (>=600px) */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* md: 3 columns (>=900px) */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* xl: 3 columns (>=1536px) — unchanged */
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
  return (
    <GalleryContainer>
      <Helmet>
        {/* Title uses App.js titleTemplate to append brand automatically */}
        <title>Outdoor Movie Night Photos | Phoenix Inflatable Movie Screens</title>

        <meta
          name="description"
          content="See photos of outdoor movie nights across Phoenix—inflatable movie screens, HD projection, professional audio, and full-service setups."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://outdoormoviepros.com/gallery" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outdoor Movie Pros" />
        <meta property="og:url" content="https://outdoormoviepros.com/gallery" />
        <meta property="og:title" content="Outdoor Movie Night Photos | Phoenix Inflatable Screens" />
        <meta
          property="og:description"
          content="Browse outdoor movie night images from Phoenix events: inflatable screens, HD projectors, and pro audio setups."
        />
        <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
        <meta property="og:image:alt" content="Outdoor Movie Pros logo" />
      </Helmet>

      {/* sr-only heading focused strictly on outdoor movie nights */}
      <h1 className="sr-only">
        Outdoor movie night photo gallery for Phoenix and nearby cities
      </h1>

      <GalleryGrid>
        {IMAGES.map((image, index) => (
          <GalleryItem key={`gallery-item-${index}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;
