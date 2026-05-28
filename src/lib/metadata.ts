import type { Metadata } from "next";
import { SITE } from "@/constants/site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = SITE.description,
  path = "",
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  const url = `${SITE.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: path || "/" },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: pageTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
