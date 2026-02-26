import { useEffect, useRef } from 'react';
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

export default function Home() {
  const heroRef = useRef(null);
  const bioRef = useStaggerReveal();
  const bannerRef = useScrollReveal();

  // JS parallax on hero background
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      hero.style.setProperty('--parallax-y', `${window.scrollY * 0.35}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero" ref={heroRef}>
        <div className="home__hero-bg" />
        <div className="home__hero-overlay" />
        <div className="home__scroll-indicator" />
      </section>

      {/* Bio */}
      <section className="bio section" ref={bioRef}>
        <div className="bio__grid">
          <div className="bio__text-col">
            <h2 className="bio__heading reveal" style={{ '--delay': '0.1s' }}>
              Nice to meet you.
            </h2>
            <p className="bio__body reveal" style={{ '--delay': '0.2s' }}>
              Aaskuwut eesh yóo xát duwasáakw. Yéil áyá xát. K&apos;ineix Kwáan naax xát sitee. Tsisk&apos;w hítdáx áyá xát.
            </p>
            <p className="bio__body reveal" style={{ '--delay': '0.28s' }}>
              My name is Roan Howard, and my Tlingit name is Aaskuwut eesh. I am Alaskan Native, Raven moiety, of the People of the Copper River Clan from the Owl House. I spent my childhood in a tree-lined suburb of Kirkland, Washington, and now reside in California, where I study and create.
            </p>
            <p className="bio__body reveal" style={{ '--delay': '0.36s' }}>
              I&apos;m a 21-year-old junior at Stanford University, majoring in Computer Science with a concentration in Artificial Intelligence and minoring in Art Practice. I thrive in the spaces where culture and technology intersect.
            </p>
            <p className="bio__body reveal" style={{ '--delay': '0.44s' }}>
              This site is where I share both my work and my story. There&apos;s more than I can write here feel free to reach out.
            </p>
            <div className="bio__cta reveal" style={{ '--delay': '0.52s' }}>
              <a href="mailto:roanahoward@gmail.com" className="btn-primary">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Alaska banner */}
      <div className="home__banner reveal-clip" ref={bannerRef}>
        <img
          src="/Images/Roan_alaska.JPG"
          alt="Alaska"
          loading="lazy"
          className="home__banner-img"
        />
      </div>
    </div>
  );
}
