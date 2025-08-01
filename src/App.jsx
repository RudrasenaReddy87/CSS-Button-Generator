import { useEffect, useState } from 'react';
import Intro from './Intro';
import Gallery from './Gallery';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setStartAnim(true), 4000);
    const hide = setTimeout(() => setShowIntro(false), 8000);

    // Lock scroll during intro
    document.body.classList.add('overflow-hidden');

    return () => {
      clearTimeout(start);
      clearTimeout(hide);
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    if (!showIntro) {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showIntro]);

  return showIntro ? <Intro start={startAnim} /> : <Gallery />;
  
}
