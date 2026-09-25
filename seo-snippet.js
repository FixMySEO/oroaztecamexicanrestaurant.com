// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.oroaztecamexicanrestaurant.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.oroaztecamexicanrestaurant.com/","title_tag":"Authentic Mexican Cuisine | Oro Azteca Mexican","meta_description":"Enjoy authentic Mexican cuisine at a top Norfolk Mexican restaurant. Savor tacos, fajitas, enchiladas, and more for dine-in, takeout, and online orders."},{"page_url":"https://www.oroaztecamexicanrestaurant.com/menu","title_tag":"Tacos al Pastor & Fajitas Norfolk | Oro Azteca","meta_description":"Explore our Mexican menu in Norfolk: Tacos al Pastor, Shrimp Ceviche, Carne Asada Fries, Guacamole Dip, Lunch Specials, Enchiladas Supreme, fajitas, and more."},{"page_url":"https://www.oroaztecamexicanrestaurant.com/online-ordering","title_tag":"Online Orders Norfolk Mexican Food | Oro Azteca","meta_description":"Order online from our Norfolk Mexican restaurant. Enjoy authentic Mexican cuisine, Tacos al Pastor, Shrimp Ceviche, Carne Asada Fries, fajitas, and more for pickup."},{"page_url":"https://www.oroaztecamexicanrestaurant.com/my-addresses","title_tag":"Online Orders Norfolk Account | Oro Azteca","meta_description":"Manage your saved addresses for online orders in Norfolk at Oro Azteca Mexican Restaurant and enjoy faster checkout for your favorite Mexican dishes."},{"page_url":"https://www.oroaztecamexicanrestaurant.com/blank","title_tag":"Privacy Policy | Oro Azteca Mexican Restaurant","meta_description":"Read the Privacy Policy for Oro Azteca Mexican Restaurant in Norfolk, VA, explaining how we collect, use, and protect visitor and customer information."},{"page_url":"https://www.oroaztecamexicanrestaurant.com/blank-1","title_tag":"Accessibility Statement | Oro Azteca Mexican","meta_description":"View the Accessibility Statement for Oro Azteca Mexican Restaurant in Norfolk, outlining our commitment to accessible web content for all visitors."},{"page_url":"https://www.oroaztecamexicanrestaurant.com/blank-2","title_tag":"Terms & Conditions | Oro Azteca Mexican","meta_description":"Review the Terms & Conditions for using the Oro Azteca Mexican Restaurant website, including visitor responsibilities and legal information."},{"page_url":"https://www.oroaztecamexicanrestaurant.com/blank-3","title_tag":"Refund Policy | Oro Azteca Mexican Restaurant","meta_description":"Read the Refund Policy for Oro Azteca Mexican Restaurant in Norfolk, VA, detailing our guidelines for returns, refunds, and customer requests."}],"keywords":["authentic mexican cuisine","norfolk mexican restaurant","tacos al pastor","shrimp ceviche","carne asada fries","fajitas norfolk","online orders norfolk","guacamole dip","lunch specials","enchiladas supreme"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.oroaztecamexicanrestaurant.com/#restaurant",
  "url": "https://www.oroaztecamexicanrestaurant.com/",
  "name": "Oro Azteca Mexican Restaurant",
  "description": "Oro Azteca Mexican Restaurant in Norfolk, VA offers authentic Mexican cuisine including tacos, fajitas, burritos, enchiladas, seafood and vegetarian dishes. Dine-in and online ordering available.",
  "servesCuisine": [
    "Mexican",
    "Latin American"
  ],
  "image": [
    "https://static.wixstatic.com/media/fb1013_fdc7e6101b1c40109191113095500af5~mv2.jpg/v1/fill/w_118,h_151,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fb1013_fdc7e6101b1c40109191113095500af5~mv2.jpg",
    "https://static.wixstatic.com/media/11062b_56bec3abb0f646c39fc862474c511320~mv2.jpg/v1/fill/w_123,h_72,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_56bec3abb0f646c39fc862474c511320~mv2.jpg",
    "https://static.wixstatic.com/media/fb1013_3a5eb9010d91400ea4d98337d3a00762~mv2.png/v1/fill/w_123,h_126,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fb1013_3a5eb9010d91400ea4d98337d3a00762~mv2.png",
    "https://static.wixstatic.com/media/fb1013_1e218e6b8a8040b688e656b26758a1db~mv2.png/v1/fill/w_123,h_158,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fb1013_1e218e6b8a8040b688e656b26758a1db~mv2.png",
    "https://static.wixstatic.com/media/fb1013_a4cb2cac5a44450eb8bdde2cc50133bd~mv2.jpg/v1/fill/w_123,h_146,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fb1013_a4cb2cac5a44450eb8bdde2cc50133bd~mv2.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8001 Hampton Blvd",
    "addressLocality": "Norfolk",
    "addressRegion": "VA",
    "postalCode": "23505",
    "addressCountry": "US"
  },
  "telephone": "+1-757-423-0324",
  "email": "mailto:oroaztecanorfolk@hotmail.com",
  "acceptsReservations": "True",
  "priceRange": "$$",
  "hasMenu": [
    {
      "@type": "Menu",
      "name": "Restaurant Menu",
      "url": "https://www.oroaztecamexicanrestaurant.com/menu"
    },
    {
      "@type": "Menu",
      "name": "Online Ordering Menu",
      "url": "https://www.oroaztecamexicanrestaurant.com/online-ordering"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/",
    "https://www.facebook.com/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-757-423-0324",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": [
      "en",
      "es"
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
