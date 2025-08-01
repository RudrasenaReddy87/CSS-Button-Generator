// Button13link.jsx
import { useState } from 'react';
import './Button13linkstyle.css';

export default function Button13link({ text = "Hover me", href = "#" }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="button13link-container">
      <a href={href} className="button13link-main">
        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
        </svg>
        {text}
        <span className="button13link-inner">
          <span className="button13link-blobs">
            <span className="button13link-blob"></span>
            <span className="button13link-blob"></span>
            <span className="button13link-blob"></span>
            <span className="button13link-blob"></span>
          </span>
        </span>
      </a>
      <svg className="button13link-svg">
        <defs>
          <filter id="button13link-filter">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}