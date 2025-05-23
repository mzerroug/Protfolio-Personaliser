// components/CookiesSettings.jsx

import React, { useState } from 'react';

const CookiesSettings = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type) => {
    if (type !== "necessary") {
      setPreferences((prev) => ({
        ...prev,
        [type]: !prev[type],
      }));
    }
  };

  return (
    <section id="Cookies_Settings" className="py-12 px-4 md:px-8 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Cookies Settings</h2>
        <p className="mb-6 text-sm">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
          You can manage your cookie preferences below.
        </p>

        <div className="space-y-4">
          {[
            { label: "Necessary Cookies", key: "necessary", description: "Required for the website to function properly. These cannot be disabled." },
            { label: "Analytics Cookies", key: "analytics", description: "Used to understand how visitors interact with the website." },
            { label: "Marketing Cookies", key: "marketing", description: "Used to deliver personalized ads and track engagement." },
          ].map(({ label, key, description }) => (
            <div key={key} className="flex justify-between items-start border p-4 rounded-md bg-gray-50">
              <div>
                <h4 className="font-medium">{label}</h4>
                <p className="text-xs text-gray-600">{description}</p>
              </div>
              <input
                type="checkbox"
                checked={preferences[key]}
                disabled={key === "necessary"}
                onChange={() => handleToggle(key)}
                className="mt-2"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => alert("Your cookie preferences have been saved.")}
          className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
        >
          Save Preferences
        </button>
      </div>
    </section>
  );
};

export default CookiesSettings;
