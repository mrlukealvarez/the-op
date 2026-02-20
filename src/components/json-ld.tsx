export function OrganizationJsonLd({
  name,
  url,
  description,
  logo,
  parentOrg,
}: {
  name: string;
  url: string;
  description: string;
  logo?: string;
  parentOrg?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
    ...(logo && { logo }),
    ...(parentOrg && {
      parentOrganization: {
        "@type": "Organization",
        name: "Black Hills Consortium",
        url: "https://bhc-website-v2.vercel.app",
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd({ name, url }: { name: string; url: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
