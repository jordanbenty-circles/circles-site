// Example of how to use MapSection in your landing page
// Replace the current map SVG in your hero section with this component

import MapSection from './MapSection';

// In your Hero component or wherever you have the map-aesthetic section:
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Find your crew.<br><span>See what's happening.</span></h1>
        <p className="hero-subtitle">A social app designed to be closed and help you find your people.</p>
        <a href="#signup" className="hero-cta">Get Early Access</a>

        {/* Replace the old .map-aesthetic SVG with: */}
        <MapSection />
      </div>
    </section>
  );
};

export default Hero;

// If you're not using React yet and want to add it to your existing index.html,
// you'll need to:
// 1. Set up a React build process (Vite, Create React App, or Next.js)
// 2. Convert your index.html to React components
// 3. Import and use MapSection as shown above

// For a quick test without a full React setup, you could also:
// - Use a CDN version of React
// - Use a tool like Parcel or Vite for quick bundling
