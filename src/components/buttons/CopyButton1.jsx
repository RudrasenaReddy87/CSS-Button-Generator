import { useState } from "react";


export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeToCopy = `
      <button class="custom-flag-button">
        <span class="button-content flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
            <path fill="none" d="M0 0H24V24H0z" />
            <path fill="currentColor" d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 
              2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 
              2.265-2.264 5.888-2.34 8.244-.228z" />
          </svg>
          India
        </span>
      </button>
    `;

    try {
      await navigator.clipboard.writeText(codeToCopy.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
};
