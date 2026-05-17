import { Helmet } from "react-helmet";

export default function SEO({ title, description, canonical}) {
  const cleanCanonical = canonical?.replace(/\/+$/, "");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {cleanCanonical && <link rel="canonical" href={cleanCanonical} />}

      {/* {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )} */}
    </Helmet>
  );
}