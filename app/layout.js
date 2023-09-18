import { meta } from "../components/meta";
import "./globals.css";

export const metadata = {
  title: "Diecézko",
  ...meta,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body id="body" className={`bg-black`}>
        {children}
      </body>
    </html>
  );
}
