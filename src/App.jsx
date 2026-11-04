import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

const loadExperience = () => import("./components/Experience");
const loadTech = () => import("./components/Tech");
const loadWorks = () => import("./components/Works");
const loadContact = () => import("./components/Contact");
const loadStars = () => import("./components/canvas/Stars");

const Experience = lazy(loadExperience);
const Tech = lazy(loadTech);
const Works = lazy(loadWorks);
const Contact = lazy(loadContact);
const StarsCanvas = lazy(loadStars);

const BELOW_THE_FOLD_LOADERS = [
  loadExperience,
  loadTech,
  loadWorks,
  loadContact,
  loadStars,
];

// Fetch the below-the-fold chunks once the browser is idle, so navbar links
// work even for sections the user has not scrolled to yet.
const preloadBelowTheFold = () => {
  const run = () => BELOW_THE_FOLD_LOADERS.forEach((load) => load());
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(run, { timeout: 4000 });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(run, 2000);
  return () => window.clearTimeout(id);
};

const App = () => {
  useEffect(preloadBelowTheFold, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Suspense fallback={<div className="min-h-[300vh]" />}>
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0 ">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
