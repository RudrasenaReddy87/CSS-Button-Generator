// buttons/Button6.jsx
import { useState } from "react";
import "./Button6style.css";

export default function Button6() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Glowing LinkedIn Button</title>
  <style>
    /* Button6 - Glowing LinkedIn Style */
    .glow-btn {
      position: relative;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      padding: 0.5rem 1.25rem;
      background-color: rgb(0, 107, 179);
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #ffffff;
      gap: 10px;
      font-weight: bold;
      border: 3px solid #ffffff4d;
      outline: none;
      overflow: hidden;
      font-size: 15px;
    }

    .glow-btn svg {
      width: 24px;
      height: 24px;
      transition: all 0.3s ease-in-out;
    }

    .glow-btn:hover {
      transform: scale(1.05);
      border-color: #fff9;
    }

    .glow-btn:hover svg {
      transform: translate(4px);
    }

    .glow-btn:hover::before {
      animation: shine 1.5s ease-out infinite;
    }

    .glow-btn::before {
      content: "";
      position: absolute;
      width: 100px;
      height: 100%;
      background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 30%,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0) 70%
      );
      top: 0;
      left: -100px;
      opacity: 0.6;
    }

    @keyframes shine {
      0% {
        left: -100px;
      }
      60% {
        left: 100%;
      }
      100% {
        left: 100%;
      }
    }
  </style>
</head>
<body style="background: #f8f9fa; display: flex; justify-content: center; align-items: center; height: 100vh;">

  <button class="glow-btn">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 12l1.41 1.41L11 7.83v12.34h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
    </svg>
    LinkedIn
  </button>

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
      {/* Button Preview */}
      <div className="absolute bottom-[100px] left-[100px] z-40">
        <button className="button6-glow-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M4 12l1.41 1.41L11 7.83v12.34h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
          </svg>
          Linkedin
        </button>
      </div>

      {/* Code Copy Button */}
      <div className="absolute bottom-[20px] left-[90px] z-40">
        <button
          className="ui-btn small-btn rounded-xl hover:glow-effect"
          onClick={handleCopy}
        >
          <span>{copied ? "Copied!" : "Click to Copy"}</span>
        </button>
      </div>
    </>
  );
}
