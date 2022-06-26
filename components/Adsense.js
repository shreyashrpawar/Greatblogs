import React, { useEffect } from "react";

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
<ins className="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9684334826790570"
     data-ad-slot="2122721910"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
}
