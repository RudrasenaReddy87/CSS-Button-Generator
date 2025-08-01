// src/components/Button1.jsx
import { useState } from 'react';
import './Button1style.css';

export default function Button1() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>India Button Template</title>
  <style>
    /* Wrapper for positioning */
    .india-button-wrapper {
      position: absolute;
      bottom: 300px;
      left: 110px;
      z-index: 40;
    }

    /* 🇮🇳 India Button */
    .custom-flag-button {
      font-size: 17px;
      font-family: inherit;
      font-weight: 700;
      padding: 4px;
      border-radius: 20px;
      cursor: pointer;
      border: none;
      color: orange;
      background: linear-gradient(
        to bottom,
        #f8aa01 0%,
        #ffffff 50%,
        #18b40a 100%
      );
      box-shadow:
        rgba(108, 12, 12, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
      transition: all 0.1s ease-in-out;
      animation: pulse 2.5s infinite ease-in-out;
    }

    .custom-flag-button:active {
      transform: translateY(3px);
      box-shadow:
        rgba(148, 5, 5, 0.1) 0px 14px 25px -5px,
        rgba(2, 151, 121, 0.04) 0px 10px 10px -5px;
    }

    .custom-flag-button .button-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgb(251, 251, 253);
      padding: 0.7em 1.5em;
      padding-left: 1.2em;
      border-radius: 16px;
    }

    .custom-flag-button svg {
      width: 20px;
      height: 20px;
      margin-right: 6px;
      color: #ff8103;
      transition: transform 0.3s;
    }

    .custom-flag-button:hover svg {
      transform: scale(1.2);
    }

    .custom-flag-button .button-content span {
      transition: transform 0.2s ease;
    }

    .custom-flag-button:hover .button-content span {
      transform: translateX(4px);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  </style>
</head>
<body>

  <!-- 🇮🇳 India Button -->
  <div class="india-button-wrapper">
    <button class="custom-flag-button">
      <span class="button-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            fill="currentColor"
            d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 
            2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 
            2.265-2.264 5.888-2.34 8.244-.228z"
          />
        </svg>
        <span>India</span>
      </span>
    </button>
  </div>

</body>
</html>

    `.trim();

    navigator.clipboard.writeText(template).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    });
  };

  return (
    <>
      {/* India Button */}
      <div className="absolute bottom-[300px] left-[110px] z-40">
        <button className="custom-flag-button">
          <span className="button-content flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                fill="currentColor"
                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 
                2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 
                2.265-2.264 5.888-2.34 8.244-.228z"
              />
            </svg>
            India
          </span>
        </button>
      </div>

      {/* Click to Copy Button */}
      <div className="absolute bottom-[220px] left-[90px] z-40">
        <button className="ui-btn small-btn rounded-xl hover:glow-effect" onClick={handleCopy}>
          <span>{copied ? 'Copied!' : 'Click to Copy'}</span>
        </button>
      </div>
    </>
  );
}