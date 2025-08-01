// buttons/Button10.jsx
import { useState } from "react";
import "./Button10style.css";

export default function Button10() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Button10</title>
  <style>
   body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
 
    }
 /* Button10 style */
.button10-main {
  position: relative;
  padding: 12px 35px;
  background: #4c83fa;
  font-size: 17px;
  font-weight: 1000;
  color: #ffffff;
  border: 3px solid #4c83fa;
  border-radius: 8px;
  box-shadow: 0 0 0 #ffffff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.button10-star-1,
.button10-star-2,
.button10-star-3,
.button10-star-4,
.button10-star-5,
.button10-star-6 {
  position: absolute;
  filter: drop-shadow(0 0 0 #4c83fa);
  z-index: -5;
}

.button10-star-1 {
  top: 20%;
  left: 20%;
  width: 25px;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.button10-star-2 {
  top: 45%;
  left: 45%;
  width: 15px;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-3 {
  top: 40%;
  left: 40%;
  width: 5px;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-4 {
  top: 20%;
  left: 40%;
  width: 8px;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-5 {
  top: 25%;
  left: 45%;
  width: 15px;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-6 {
  top: 5%;
  left: 50%;
  width: 5px;
  transition: all 0.8s ease;
}

.button10-main:hover {
  background: transparent;
  color: #4c83fa;
  box-shadow: 0 0 0px #4c83fa;
}

.button10-main:hover .button10-star-1 {
  top: -80%;
  left: -30%;
  z-index: 2;
}

.button10-main:hover .button10-star-2 {
  top: 0%;
  left: 10%;
  z-index: 2;
}

.button10-main:hover .button10-star-3 {
  top: 55%;
  left: 25%;
  z-index: 2;
}

.button10-main:hover .button10-star-4 {
  top: 30%;
  left: 80%;
  z-index: 2;
}

.button10-main:hover .button10-star-5 {
  top: 25%;
  left: 115%;
  z-index: 2;
}

.button10-main:hover .button10-star-6 {
  top: 5%;
  left: 60%;
  z-index: 2;
}

.button10-fill {
  fill: #4c83fa;
}

  </style>
</head>
<body>

  <button class="button10-main">
    Hover Me
    <div class="button10-star-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
        <path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
        207.96,29.37 371.12,197.68 392.05,407.74 
        20.93,-210.06 184.09,-378.37 392.05,-407.74 
        -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/>
      </svg>
    </div>
    <div class="button10-star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
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
      <div className="absolute bottom-[-90px] left-[90px] z-40">
        <button className="button10-main">
          Hover Me
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`button10-star-${i}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path
                  className="button10-fill"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
                  207.96,29.37 371.12,197.68 392.05,407.74 
                  20.93,-210.06 184.09,-378.37 392.05,-407.74 
                  -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </svg>
            </div>
          ))}
        </button>
      </div>

      {/* Code Copy Button */}
      <div className="absolute bottom-[-170px] left-[90px] z-40">
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
