
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tatagoldwires.com"),
  title: "Tata Gold PVC Wires & Cables | 100% Pure Copper Electrical Wires",
  description:
    "Official Tata Gold PVC Wires & Cables. Premium Flame Retardant (FR/FRLS) 99.99% Electrolytic Pure Copper electrical wires for residential & industrial safety. ISI Certified.",
  keywords: [
    "Tata Gold PVC Wires",
    "Tata Gold Wires and Cables",
    "PVC Insulated Wires",
    "Pure Copper Electrical Wire",
    "FRLS Low Smoke Wires",
    "ISI Mark Electrical Wire",
    "House Wiring Cable",
    "Submersible Flat Cable",
    "Flame Retardant Wires India",
  ],
  authors: [{ name: "Tata Gold Wires & Cables" }],
  creator: "Tata Gold PVC Wires & Cables",
  openGraph: {
    title: "Tata Gold PVC Wires & Cables | Making Difference in Electric",
    description:
      "100% Pure Electrolytic Copper PVC Insulated Wires & Cables for maximum electrical safety and energy savings.",
    url: "https://tatagoldwires.com",
    siteName: "Tata Gold PVC Wires & Cables",
    images: [
      {
        url: "/images/tata_gold_box_mockup.png",
        width: 1200,
        height: 630,
        alt: "Tata Gold PVC Wires & Cables Product Box",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tata Gold PVC Wires & Cables",
    description:
      "ISI Certified Flame Retardant 99.99% Pure Copper Electrical Wires.",
    images: ["/images/tata_gold_box_mockup.png"],
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tatagoldwires.com",
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tata Gold PVC Wires & Cables",
    image: "https://tatagoldwires.com/images/tata_gold_box_mockup.png",
    "@id": "https://tatagoldwires.com",
    url: "https://tatagoldwires.com",
    telephone: "+919876543210",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industrial Development Zone",
      addressLocality: "Delhi NCR",
      addressRegion: "DL",
      postalCode: "110001",
      addressCountry: "IN",
    },
    description:
      "Manufacturer of ISI Certified 100% Electrolytic Pure Copper PVC Insulated Flame Retardant Wires and Cables.",
    knowsAbout: [
      "PVC Wires",
      "Electrical Insulation",
      "Copper Wires",
      "FRLS Cables",
      "Building Wires",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
