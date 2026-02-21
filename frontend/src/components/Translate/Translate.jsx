import { useEffect } from "react";
import "./translate.css";

export default function Translate() {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };
  }, []);

  const handleLanguageChange = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="translate-wrapper">
      {/* Hidden Google Element */}
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
