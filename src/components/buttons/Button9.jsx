
import { useState } from "react";
import "./Button9style.css";

export default function Button9() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Button9 - Glowing Stars</title>
  <style>
   /* Button9 - Floating Glowing Stars (No Rotation) */

.button9-btn {
  position: relative;
  padding: 16px 42px;
  background: #111;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  border: 2px solid #014ccf;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 10px #00ffe155, 0 0 20px #00ffe122;
}

.button9-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, #00f0ff, #ff00c8);
  z-index: -1;
  opacity: 0.25;
  filter: blur(20px);
  transition: 0.4s ease-in-out;
}

/* Stars hidden initially */
.button9-star-1,
.button9-star-2,
.button9-star-3,
.button9-star-4,
.button9-star-5,
.button9-star-6 {
  position: absolute;
  width: 12px;
  height: 12px;
  opacity: 0;
  z-index: 2;
  fill: #0ff;
  stroke: #00eaff;
  stroke-width: 2;
  pointer-events: none;
  transform: scale(0.3);
  transition: all 0.4s ease;
}

/* Base positions */
.button9-star-1 { top: 30%; left: 30%; }
.button9-star-2 { top: 50%; left: 50%; }
.button9-star-3 { top: 20%; left: 80%; }
.button9-star-4 { top: 60%; left: 20%; }
.button9-star-5 { top: 70%; left: 55%; }
.button9-star-6 { top: 10%; left: 70%; }

/* On hover */
.button9-btn:hover {
  background: #000000;
  color: #00ffe1;
  box-shadow: 0 0 20px #12dfc7aa, 0 0 40px #b3078de2;
  border-color: #053853;
}

.button9-btn:hover::before {
  opacity: 0.5;
}

/* Stars glow and float out slightly */
.button9-btn:hover .button9-star-1 {
  opacity: 2;
  transform: translate(-50px, -90px) scale(5);
  animation: star-float 0s ease-in-out infinite;
}

.button9-btn:hover .button9-star-2 {
  opacity: 1;
  transform: translate(20px, -16px) scale(1.1);
  animation: star-float 2.2s ease-in-out infinite;
}

.button9-btn:hover .button9-star-3 {
  opacity: 1;
  transform: translate(-1px, 2px) scale(1);
  animation: star-float 2.4s ease-in-out infinite;
}

.button9-btn:hover .button9-star-4 {
  opacity: 1;
  transform: translate(10px, 25px) scale(1.1);
  animation: star-float 1s ease-in-out infinite;
}

.button9-btn:hover .button9-star-5 {
  opacity: 1;
  transform: translate(-25px, 10px) scale(1.1);
  animation: star-float 2.8s ease-in-out infinite;
}

.button9-btn:hover .button9-star-6 {
  opacity: 1;
  transform: translate(30px, -20px) scale(1.1);
  animation: star-float 3s ease-in-out infinite;
}

/* Floating star animation */
@keyframes star-float {
  0% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

  </style>
</head>
<body>

  <button class="button9-btn">
    Button
    <div class="button9-star-1">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-2">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-3">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-4">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-5">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-6">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
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
      <div className="absolute bottom-[100px] left-[840px] z-40">
        <button className="button9-btn">
          Button
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`button9-star-${i}`}>
              <svg viewBox="0 0 784.11 815.53" fill="currentColor">
                <path className="button9-star" d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </svg>
            </div>
          ))}
        </button>
      </div>

      {/* Code Copy Button */}
      <div className="absolute bottom-[20px] left-[830px] z-40">
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
