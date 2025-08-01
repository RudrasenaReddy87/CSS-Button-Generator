// buttons/Button7.jsx
import { useState } from "react";
import "./Button7style.css";

export default function Button7() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Button7 - Glowing Centered Icon</title>
  <style>
   /* Button7 style*/
.button7-glow-btn {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: rgb(0 107 179);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  gap: 10px;
  font-weight: bold;
  border: 0px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  cursor: pointer;
  width: 50px;
  height: 50px;
}

.button7-icon {
  width: 35px;
  height: 35px;
  transition: all 0.3s ease-in-out;
}

.button7-glow-btn:hover {
  transform: scale(10.3s);
  border-color: #fff9;
}



.button7-glow-btn:hover::before {
  animation: button7-shine 1.2s ease-out infinite;
}

.button7-glow-btn::before {
  content: "";
  position:absolute;
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

@keyframes button7-shine {
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
<body>

  <!-- Centered Glowing Icon Button -->
  <button class="button7-glow-btn">
    <svg fill="currentColor" viewBox="0 0 24 24" class="button7-icon">
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      />
    </svg>
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
      <div className="absolute bottom-[100px] left-[400px] z-40">
        <button className="button7-glow-btn">
          <svg fill="currentColor" viewBox="0 0 24 24" className="button7-icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Code Copy Button */}
      <div className="absolute bottom-[20px] left-[330px] z-40">
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
