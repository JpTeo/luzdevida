"use client";

import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title = "Instituto Luz de Vida |Residencia Geriátrica en Buenos Aires",
  description = "Instituto Luz de Vida: residencia geriátrica premium en Buenos Aires con 20+ años de experiencia. Atención médica 24/7, rehabilitación y contención emocional para adultos mayores.",
  keywords = "geriátrico Buenos Aires, residencia adultos mayores, hogar ancianos CABA, centro geriátrico Argentina, cuidado tercera edad",
  canonical = "https://www.institutoluzdevida.com.ar/",
  ogImage = "https://www.institutoluzdevida.com.ar/og-image.jpg",
  noindex = false,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean
    ) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update canonical link
    let canonical_link = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical_link) {
      canonical_link = document.createElement("link");
      canonical_link.rel = "canonical";
      document.head.appendChild(canonical_link);
    }
    canonical_link.href = canonical;

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", canonical, true);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    }
  }, [title, description, keywords, canonical, ogImage, noindex]);

  return null;
};

export default SEOHead;
