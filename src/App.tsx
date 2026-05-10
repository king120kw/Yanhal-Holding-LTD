/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Estimator from "./components/Estimator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark">
      <Navbar />
      {/* ... existing content ... */}
      <Hero />
      <About />
      <Leadership />
      <Services />
      
      <FeatureSection 
        title="Industrial & Commercial Engineering"
        subtitle="Structural Performance"
        description="We deliver high-performance structural solutions for industrial and commercial facilities, ensuring durability and operational efficiency."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuD81-4lALGQwufXU647htptVo5VBqEZ9_8CU1SZfsYB8EvbuKIUNAF6GmRdFY4XHnzkPeRcPTE17NV4ioer5zYdqdlEQUioMu0-Kh8gg8WRIBjg99WghG-WHIN3GCV6xKaCH-6KepCQYzAOPzlpytUze9Q9sGoyARU47VQLjrbmYgU6EcinP-u_-fRnA1yoaTflP8LZ-SoPEOWNmLE7S9uumUU8djTL4Rruh3QcLWAr4BGZMXpmW2eT5V1UCZLxMZxbreaOWpKs-Lw"
        features={[
          { icon: "precision_manufacturing", title: "Technical Precision", desc: "Rigorous engineering standards for every structural component." },
          { icon: "speed", title: "Efficient Delivery", desc: "Optimized project management to meet strict commercial timelines." },
          { icon: "security", title: "Safety Compliance", desc: "Full adherence to local building codes and safety regulations." }
        ]}
        dark
        siteProgressGallery
      />

      <Process />
      
      <FeatureSection 
        title="Interior Finishing & Optimization"
        subtitle="Functional Design"
        description="Our interior solutions focus on space optimization and high-quality material finishing for professional environments."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuC5hNxK_S0BQ30SDJFQBI6K_gXJU7o41wTPIH6apCbFJmECGuEHz0iD3moIczlWTT91EKExZ90Bze4TM-TarKWnFDKyKLJbjjFS7h-LbIOu5bO_vsAjcA1RRWysoN0JNUkusFZB_i6wb2tEYMuo4bGvDaOXORL8jGAZi0I7yYsOzWWoqIvGHsYDmPH2mMLfW9cI0jZAfFIqsgCxTd_J8lH1rjBZpACEM1LHJKqieWsJkrJLJ0yvj2mdS7MkQYSEJ5jMMo84_Ekten0"
        features={[
          { icon: "space_dashboard", title: "Space Planning", desc: "Maximizing utility and flow in commercial and residential layouts." },
          { icon: "texture", title: "Premium Materials", desc: "Sourcing durable, high-grade materials for a professional finish." },
          { icon: "light_mode", title: "Integrated Systems", desc: "Seamless integration of lighting, MEP, and smart systems." }
        ]}
        reverse
        animatedGallery
      />
      
      <Portfolio />
      <Testimonials />
      <Estimator />
      <Contact />
      <Footer />
    </div>
  );
}

