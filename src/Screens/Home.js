import React, { useRef, useEffect } from 'react';

import '../Styles.css';

import Title from './Title';
import AppList from '../Components/AppList';
import Header from '../Components/Header';
import HeaderLogo from '../Components/HeaderLogo';
import Footer from '../Components/Footer';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const scopes = Array.from(
      root.querySelectorAll('.title-scope, .sub-scope')
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const visible = entry.intersectionRatio >= 0.55; // same as Title
          if (visible) {
            el.classList.add('is-visible');
            el.classList.remove('is-leaving');
          } else {
            el.classList.remove('is-visible');
            el.classList.add('is-leaving');
            clearTimeout(el._leaveTimer);
            el._leaveTimer = setTimeout(() => el.classList.remove('is-leaving'), 180);
          }
        });
      },
      { root, threshold: [0, 0.55, 1] }
    );

    scopes.forEach((el) => io.observe(el));

    // initial state on first paint
    requestAnimationFrame(() => {
      scopes.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cr = root.getBoundingClientRect();
        const visiblePx = Math.max(0, Math.min(r.bottom, cr.bottom) - Math.max(r.top, cr.top));
        const ratio = visiblePx / r.height;
        if (ratio >= 0.55) el.classList.add('is-visible');
      });
    });

    return () => {
      io.disconnect();
      scopes.forEach((el) => clearTimeout(el._leaveTimer));
    };
  }, []);

  return (
    <>
      <HeaderLogo />
      <Header />
      <div ref={containerRef} className="snap-container">
        {/* Title section keeps its own scope class */}
        <section className="snap-section title-scope">
          <Title />
        </section>

        {/* SubSection sections come from AppList with class 'sub-scope' */}
        <AppList />

        <div style={{ scrollSnapAlign: 'end', scrollSnapStop: 'always' }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
