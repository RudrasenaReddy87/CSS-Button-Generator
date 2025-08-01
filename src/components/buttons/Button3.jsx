import { useState } from 'react';
import './Button3style.css'; 


export default function Button3() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tooltip Hover Button</title>
  <style>
    /* Button Tooltip Hover */
    /* Author : Rudrasena Reddy */
    /* Please Check Remaining Projects on Github */
    body {
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: sans-serif;
    }

    .tooltip-container {
      --background: #333333;
      --color: #e8e8e8;
      position: relative;
      cursor: pointer;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      font-size: 16px;
      font-weight: 600;
      color: var(--color);
      padding: 0.6em 1.8em;
      border-radius: 8px;
      text-transform: uppercase;
      height: 50px;
      width: 150px;
      display: grid;
      place-items: center;
      border: 2px solid var(--color);
    }

    .text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      transform-origin: -100%;
      transform: scale(1);
      transition: all 0.6s cubic-bezier(0.24, 1, 0.32, 1);
    }

    .tooltip-container span:last-child {
      position: absolute;
      top: 0%;
      left: 100%;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      opacity: 1;
      background-color: var(--background);
      z-index: -1;
      border: 2px solid var(--background);
      transform: scale(0);
      transform-origin: 0;
      transition: all 0.6s cubic-bezier(0.24, 1, 0.32, 1);
      display: grid;
      place-items: center;
    }

    .tooltip {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.3em 0.6em;
      opacity: 0;
      pointer-events: none;
      transition: all 0.7s cubic-bezier(0.28, 1, 0.30, 1);
      background: var(--background);
      z-index: -1;
      border-radius: 10px;
      scale: 2;
      transform-origin: 9 2;
      text-transform: capitalize;
      font-weight: 400;
      font-size: 16px;
      box-shadow: rgba(3, 3, 186, 0.25) 0 8px 15px;
    }

    .tooltip::before {
      position: absolute;
      content: "";
      height: 0.8em;
      width: 0.8em;
      bottom: -0.4em;
      left: 50%;
      transform: translate(-50%) rotate(46deg);
      background: var(--background);
    }

    .tooltip-container:hover .tooltip {
      top: -60%;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      scale: 1;
      animation: shake 0.6s ease-in-out both;
    }

    .tooltip-container:hover {
      box-shadow: rgba(1, 34, 249, 0.25) 0 8px 20px;
      color: white;
      border-color: transparent;
    }

    .tooltip-container:hover span:last-child {
      transform: scale(1);
      left: 0;
    }

    .tooltip-container:hover .text {
      opacity: 0;
      top: 0%;
      left: 100%;
      transform: scale(00.9s);
    }

    @keyframes shake {
      0% { rotate: 0; }
      25% { rotate: 20deg; }
      50% { rotate: -18deg; }
      75% { rotate: 20deg; }
      100% { rotate: 0; }
    }
  </style>
</head>
<body>

  <!-- Here HTML Button form-->
  <div class="tooltip-container">
    <span class="tooltip">By Rudra</span>
    <span class="text">Hover here👆</span>
    <span>Hi, Thanks ;)</span>
  </div>

</body>
</html>
    `.trim();

    navigator.clipboard.writeText(template).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {/* Button3 Visual */}
      <div className="absolute bottom-[305px] left-[570px] z-40">
        <div className="tooltip-container">
          <span className="tooltip">By Rudra</span>
          <span className="text">Hover here👆</span>
          <span>Hi, Thanks ;)</span>
        </div>
      </div>

      {/* Copy Button */}
      <div className="absolute bottom-[220px] left-[590px] z-40">
        <button className="ui-btn small-btn rounded-xl hover:glow-effect" onClick={handleCopy}>
          <span>{copied ? 'Copied!' : 'Click to Copy'}</span>
        </button>
      </div>
    </>
  );
}
