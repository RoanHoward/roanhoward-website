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
              &apos;I am a junior at Stanford University majoring in Computer Science with a focus in Artificial Intelligence and a minor in Art Practice. I am interested in AI and am actively pushing deeper into areas such as algorithm design, linear algebra, language models, and agentic infrastructure. I feel like I have only scratched the surface of my feild and I am in a rush to learn more. 
            </p>
            <p className="bio__body reveal" style={{ '--delay': '0.44s' }}>
              This site is where I share both my work and my story. There&apos;s more than I can write here feel free to reach out.
            </p>
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
