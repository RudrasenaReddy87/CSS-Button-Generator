import { useState, useRef, useEffect } from 'react';
import './Button13style.css';

export default function Button13() {
  const [showCollection, setShowCollection] = useState(false);
  const [copied, setCopied] = useState(false);
  const magneticRefs = useRef([]);
  const collectionRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (collectionRef.current && !collectionRef.current.contains(event.target)) {
        // Check if the click wasn't on the main button
        const mainButton = document.querySelector('.button13-main');
        if (mainButton && !mainButton.contains(event.target)) {
          setShowCollection(false);
        }
      }
    };

    if (showCollection) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCollection]);

  const handleClick = () => {
    setShowCollection(!showCollection);
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    const template = `
// src/components/buttons/Button13.jsx
import './Button13style.css';

export default function Button13() {
  return (
    <div className="button13-bottom-container">
      <div className="button13-container">
        <button className="button13-main">
          <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Explore More Buttons
          <span className="button13-inner">
            <span className="button13-blobs">
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
            </span>
          </span>
        </button>
        <svg className="button13-svg">
          <defs>
            <filter id="button13-filter">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
`.trim();

    navigator.clipboard.writeText(template).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Magnetic button effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      magneticRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          ref.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ripple effect handler
  const createRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="button13-bottom-container">
      <div className="button13-container">
        <button 
          className="button13-main" 
          onClick={handleClick} 
          onContextMenu={handleCopy}
          aria-label="Toggle button collection"
          aria-expanded={showCollection}
          aria-haspopup="dialog"
        >
          <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          {showCollection ? 'Hide Collection' : 'Click Here To Explore More Buttons'}
          <span className="button13-inner">
            <span className="button13-blobs">
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
            </span>
          </span>
        </button>
        <svg className="button13-svg">
          <defs>
            <filter id="button13-filter">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      
      {showCollection && (
        <div className="popup-overlay">
          <div className="popup-center" ref={collectionRef}>
            <div className="collection-categories">
              <button className="category-tab active">Few More Buttons</button>
         
            </div>
            
            <div className="collection-buttons">
              {/* Existing Buttons */}
              <button className="btn-depth">Depth Press</button>
              <button className="btn-lift">Soft Lift</button>
              <button className="btn-3d-cube">
                <span className="btn-3d-cube-shadow"></span>
                <span className="btn-3d-cube-sides">
                  <span className="btn-3d-cube-top"></span>
                  <span className="btn-3d-cube-right"></span>
                </span>
                <span className="btn-3d-c-front">Shadow Button</span>
              </button>
              <button className="btn-flip">Color Flip</button>
              <button className="btn-pixel">Pixel Press</button>
              <button className="btn-gradient">Gradient</button>
              <button className="btn-handdrawn">Hand Drawn</button>
              <button className="btn-border-morph">Border Morph</button>
              <button className="btn-neon">Neon Glow</button>
              <button className="btn-liquid">Liquid Fill</button>

              {/* New Buttons */}
              <button 
                className="btn-magnetic"
                ref={el => magneticRefs.current[0] = el}
              >
                Magnetic Button
              </button>
              
              <button 
                className="btn-ripple"
                onClick={createRipple}
              >
                Ripple Effect
              </button>
              
              <button className="btn-glow-pulse">
                Glow Pulse
              </button>
              
              <button className="btn-border-draw">
                <span>Border Draw</span>
                <svg className="border-draw-svg" viewBox="0 0 200 50">
                  <path className="border-draw-path" d="M5,5 L195,5 L195,45 L5,45 Z" />
                </svg>
              </button>

              <button className="btn-spring">Spring</button>
              <button className="btn-pulse">Pulse</button>
              
              <button className="btn-flip">
                <div className="btn-flip-inner">
                  <div className="btn-flip-front">Flip</div>
                  <div className="btn-flip-back">Back</div>
                </div>
              </button>
              
              <button className="btn-jelly">Jelly</button>
              <button className="btn-neon-flicker">Neon Flicker</button>
            </div>
          </div>
        </div>
      )}
      
      
    </div>
  );
}