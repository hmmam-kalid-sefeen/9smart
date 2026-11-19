import "./globals.css";

export const metadata = {
  title: "9smart | Curated Product Links & Tech Reviews",
  description: "Curated product links and smart tech reviews from 9smart — no captchas, no annoying ads.",
  metadataBase: new URL("https://9smart.buzz"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
