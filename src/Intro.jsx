import { useEffect, useState } from 'react';

export default function Intro({ start }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHide(true), 8000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen bg-black text-white transition-opacity duration-1000 ${
        hide ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1
        className={`text-4xl md:text-6xl font-bold transition-all duration-[4000ms] ease-in-out transform ${
          start ? 'scale-[28] opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        Button Styles, Users will Love to Click...
      </h1>
    </div>
  );
}
