import "./globals.css";
import "./font.css";

export const metadata = {
  title: "Atmosphere",
  description: "weather app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
