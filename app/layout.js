import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KH2VS9G3'); // Replace with your GTM ID
              `,
            }}
          />
          {/* End Google Tag Manager */}
        </head>
      )}
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KH2VS9G3" // Replace with your GTM ID
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* ClientLayout contains all the client wrappers */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
