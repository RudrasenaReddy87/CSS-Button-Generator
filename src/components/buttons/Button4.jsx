import { useState } from "react";
import "./Button4style.css";

export default function Button4() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Copy Link Button</title>
  <style>
    /* Center container */
    .button4-centralize {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #ffffff;
    }

    /* Button base */
    .button4-btn {
      background-color: #f2f7fa;
      width: 100px;
      height: 30px;
      border: 0;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      overflow: hidden;
      transition-duration: 700ms;
      position: relative;
      outline: none;
    }

    /* Initial span (Copy link + icon) */
    .button4-btn span:first-child {
      color: #546678;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      transition: all 0.5s ease;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    /* Copied message (hidden initially) */
    .button4-btn span:last-child {
      position: absolute;
      color: #ffffff;
      opacity: 0;
      transform: translateY(100%) translateX(-50%);
      left: 50%;
      top: 50%;
      height: 14px;
      line-height: 13px;
      transition: all 0.5s ease;
    }

    /* Focus state triggers animation */
    .button4-btn:focus {
      background-color: #0370ff;
      width: 120px;
      height: 40px;
      transition-delay: 100ms;
      transition-duration: 500ms;
    }

    .button4-btn:focus span:first-child {
      color: #d0e0fd;
      transform: translateX(-50%) translateY(-150%);
      opacity: 0;
    }

    .button4-btn:focus span:last-child {
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
      transition-delay: 300ms;
    }
  </style>
</head>
<body>

  <!-- Button UI -->
  <div class="button4-centralize">
    <button class="button4-btn" onclick="copyToClipboard(this)">
      <span>
        <svg
          width="12"
          height="12"
          fill="#0E418F"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 467 512.22"
        >
          <path
            d="M131.07 372.11c.37 1 .57 2.08.57 3.2..."
          />
        </svg>
        Click Me
      </span>
      <span>Hello</span>
    </button>
  </div>

  <!-- Clipboard copy logic -->
  <script>
    function copyToClipboard(button) {
      const dummyLink = 'https://example.com';
      navigator.clipboard.writeText(dummyLink).then(() => {
        button.focus(); // trigger :focus animation
        setTimeout(() => button.blur(), 2000); // remove focus after animation
      });
    }
  </script>

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
      {/* Button Visual */}
      <div className="absolute bottom-[320px] left-[850px] z-40">
        <div className="button4-centralize">
          <button className="button4-btn">
            <span>
              <svg
                width="12"
                height="12"
                fill="#0E418F"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 467 512.22"
              >
                <path
                  fillRule="nonzero"
                  d="M131.07 372.11c.37 1 .57 2.08.57 3.2..."
                />
              </svg>
              Click Me
            </span>
            <span>Hello</span>
          </button>
        </div>
      </div>

      {/* Copy Button */}
      <div className="absolute bottom-[220px] left-[830px] z-40">
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
