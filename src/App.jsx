import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceShowcase from "./components/ServiceShowcase";
import ShowcaseSection from "./components/ShowcaseSection";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import InteriorShowcase from "./components/InteriorShowcase";
import Timeline from "./components/Timeline";
import ProjectEstimator from "./components/ProjectEstimator";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HousePlan from "./components/HousePlan";

function App() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen selection:bg-[#C5A059] selection:text-neutral-900">
      <Navbar />
      <Hero />
      <ServiceShowcase />

      {/* 1. Construction Excellence */}
      <ShowcaseSection
        id="construction"
        subtitle="The Core Foundation"
        title="Construction Excellence"
        desc="High-end residential builds focusing on precision engineering and premium materials for a lasting legacy. We ensure structural integrity meets architectural vision."
        image="/15_residential.webp"
        features={["Custom Architectural Design", "Premium Material Sourcing", "Sustainable Building Practices", "Post-Handover Maintenance"]}
      />

      {/* 2. Urban Development */}
      <ShowcaseSection
        id="urban"
        subtitle="Cityscapes Redefined"
        title="Urban Development"
        desc="Bespoke residential complexes that redefine urban luxury through thoughtful space and form. Integrating high-density living with private exclusivity."
        image="/11_commercial.webp"
        features={["Master Planning", "Mixed-Use Zoning", "Community Integration", "Smart City Infrastructure"]}
        reversed
      />

      {/* 3. Aqua & Landscape */}
      <ShowcaseSection
        id="aqua"
        subtitle="Natural Integration"
        title="Aqua & Landscape"
        desc="Sculpting natural elements into refined outdoor experiences including infinity pools and curated botanical gardens."
        image="/4_pool.webp"
        features={["Infinity Edge Engineering", "Botanical Curation", "Integrated Home Controls", "Climate-Resilient Landscaping"]}
      />

      {/* 4. Corporate Structures */}
      <ShowcaseSection
        id="corporate"
        subtitle="Commercial Innovation"
        title="Corporate Structures"
        desc="Strategic commercial landmarks that unify brand identity with architectural permanence. Environments designed for operational flow."
        image="/13_workplace.webp"
        features={["Dynamic Floor Plans", "Energy-Efficient Envelopes", "Acoustic Dampening", "Executive Boardrooms"]}
        reversed
      />

      {/* 5. Modern Restoration */}
      <ShowcaseSection
        id="restoration"
        subtitle="Historical Preservation"
        title="Modern Restoration"
        desc="Infusing legacy structures with contemporary technology and aesthetic sophistication while preserving historical narratives."
        image="/8_renovation.webp"
        features={["Structural Reinforcement", "Heritage Conservation", "Modern Tech Integration", "Material Matching"]}
      />

      {/* 6. Interior Curation (Details before the dedicated showcase) */}
      <ShowcaseSection
        id="interior-details"
        subtitle="Spatial Harmony"
        title="Interior Curation"
        desc="Harmonizing texture, light, and materiality to create interiors of unparalleled elegance. Every surface is considered."
        image="/12_luxury_home.webp"
        features={["Bespoke Millwork", "Custom Lighting Plans", "Art Advisory", "Textile Sourcing"]}
        reversed
      />

      <Portfolio />
      <About />
      <InteriorShowcase />
      <Timeline />
      <ProjectEstimator />
      <Testimonials />
      <Footer />
      <HousePlan />
    </main>
  );
}

export default App;
