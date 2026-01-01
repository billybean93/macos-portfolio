import React from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title : {min: 400, max: 900, default: 400},
}

const renderText = (text, className, baseWeight = 400) => {
  return [... text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u000A" : char}

    </span>
  ))
}

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {duration, ease:'power2.out',
      fontVariationSettings: `'wght' ${weight}`,
    });
  }

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => 
    letters.forEach((letter) => animateLetter(letter, base, 0.3));

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseMove);

  return () => {
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseMove);

  }

};

const Welcome = () => {

  useGSAP(() => {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subTitleRef.current, "subtitle");
  })
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  return (
    <section id='welcome'>
      <p ref={subTitleRef}>
        {renderText("Hey, Welcome to Billy's", 'text-3xl font-georama', 100)}
      </p>
      <h1 ref={titleRef} className='mt-7'>
        {renderText("portfolio" ,
          'text-9xl italic font-georama'
        )}
      </h1>
    </section>
  )
}

export default Welcome;