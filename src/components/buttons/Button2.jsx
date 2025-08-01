// src/components/buttons/Button2.jsx
import { useState } from 'react';
import './Button2style.css';

export default function Button2() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!-- Paste this into your HTML file where you want the button -->
<button class="bubble-button">Click Me</button>

<!-- Paste this inside a <style> tag in your <head> or anywhere inside HTML -->
<style>
/* Bubble Effect Button */

/* Author : Rudrasena Reddy */
/* Please Check Remaining Projects on Github */

.bubble-button {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #f9a703;
  transition: all 0.9s ease;
}

.bubble-button:active {
  transform: scale(1);
}

.bubble-button:before,
.bubble-button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.bubble-button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #ff9500 20%, transparent 30%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #ff9500 15%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.8s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.bubble-button:hover::after {
  bottom: -120%;
  background-image: radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #fa9005 15%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%; 
  animation: greenbottomBubbles 0.9s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>


    `.trim();

    navigator.clipboard.writeText(template).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {/* Button2 Visual */}
      <div className="absolute bottom-[305px] left-[370px] z-40">
        <button className="button px-4 py-2 text-white font-bold text-base rounded-md bg-green-600 hover:bg-green-700 transition">
          Button
        </button>
      </div>

      {/* Copy Button */}
      <div className="absolute bottom-[220px] left-[330px] z-40">
        <button className="ui-btn small-btn rounded-xl hover:glow-effect" onClick={handleCopy}>
          <span>{copied ? 'Copied!' : 'Click to Copy'}</span>
        </button>
      </div>
    </>
  );
}
