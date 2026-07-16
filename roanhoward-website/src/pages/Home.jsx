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
            <h1 className="bio__heading reveal" style={{ '--delay': '0.1s' }}>
              Nice to meet you.
            </h1>
            <p className="bio__body reveal" style={{ '--delay': '0.2s' }}>
              Hello! My name is Roan Howard. I am currently 21 years old and a senior at Stanford University. I am completing a major in Computer Science with a focus in artificial intelligence, as well as a minor in Art Practice.
            </p>
            <p className="bio__body reveal" style={{ '--delay': '0.28s' }}>
              I grew up in Kirkland, Washington, I&apos;m Tlingit, and I currently live in California for school. I love learning and try to learn as much as possible as fast as I can. A few things I&apos;m interested in right now include film, plants, birds, fitness, machine learning, sculpture, and the German language.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Alaska banner */}
      <div className="home__banner reveal-clip" ref={bannerRef}>
        <img
          src="/Images/roan-alaska.webp"
          srcSet="/Images/roan-alaska-960.webp 960w, /Images/roan-alaska.webp 1920w"
          sizes="100vw"
          alt="Alaska"
          loading="lazy"
          className="home__banner-img"
        />
      </div>
    </div>
  );
}
