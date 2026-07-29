import { useEffect, useState } from "react";
import "./Translate.css";

export default function Translate() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Prevent multiple loads
    if (window.google && window.google.translate) {
      setIsReady(true);
      return;
    }

    if (document.getElementById("google-translate-script")) return;

    // Google init function
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr",
            autoDisplay: false,
          },
          "google_translate_element",
        );

        setIsReady(true);

        // Fix body shift issue
        setTimeout(() => {
          document.body.style.top = "0px";
        }, 500);
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleLanguageChange = (lang) => {
    if (!isReady) return;

    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div className="translate-wrapper">
      {/* Hidden Google container */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Custom Dropdown */}
      <select
        className="custom-language-dropdown"
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">🇬🇧 English</option>
        <option value="hi">🇮🇳 हिंदी (Hindi)</option>
        <option value="mr">🇮🇳 मराठी (Marathi)</option>
      </select>
    </div>
  );
}
