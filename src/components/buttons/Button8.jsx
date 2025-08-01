// buttons/Button8.jsx
import { useState } from "react";
import "./Button8style.css";

export default function Button8() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Centered Button8 - Add to Card</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .btn8-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 40;
    }

    .btn8-button {
      border: none;
      outline: none;
      background-color: #3a3a3a;
      width: 180px;
      height: 60px;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      transition: all 0.3s;
    }

    .btn8-button::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      width: 106%;
      height: 120%;
      z-index: -1;
      border-radius: inherit;
      transition: all 0.3s;
    }

    .btn8-gradient-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 106%;
      height: 115%;
      overflow: hidden;
      border-radius: inherit;
      z-index: -2;
      filter: blur(10px);
      transition: all 0.3s;
    }

    .btn8-gradient {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 110%;
      aspect-ratio: 1;
      border-radius: 100%;
      transition: all 0.3s;
      background-image: linear-gradient(
        90deg,
        hsl(41, 100%, 50%),
        hsl(0, 0%, 100%),
        hsl(129, 100%, 50%),
        hsl(329, 100%, 51%),
        hsl(206, 97%, 40%),
        hsl(176, 100%, 50%),
        hsl(242, 100%, 50%),
        hsl(303, 100%, 51%)
      );
      animation: btn8-rotate 2s linear infinite;
      filter: blur(5px);
    }

    .btn8-label {
      width: 156px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      border-radius: 22px;
      background-color: rgba(43, 43, 43, 1);
      background-image: linear-gradient(
        180deg,
        rgb(43, 43, 43) 0%,
        rgb(68, 68, 68) 100%
      );
    }

    .btn8-button:hover .btn8-gradient-container {
      transform: translate(-50%, -50%) scale(0.98);
      filter: blur(2px);
    }

    .btn8-button:hover .btn8-gradient {
      filter: blur(4px);
    }

    @keyframes btn8-rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  </style>
</head>
<body>

  <div class="btn8-wrapper">
    <button class="btn8-button">
      <span class="btn8-label">+ Add to card</span>
      <span class="btn8-gradient-container">
        <span class="btn8-gradient"></span>
      </span>
    </button>
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
      {/* Button Preview */}
      <div className="absolute bottom-[100px] left-[580px] z-40">
        <button className="btn8-button">
          <span className="btn8-label">+ Add to card</span>
          <span className="btn8-gradient-container">
            <span className="btn8-gradient"></span>
          </span>
        </button>
      </div>

      {/* Copy Button */}
      <div className="absolute bottom-[20px] left-[590px] z-40">
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
