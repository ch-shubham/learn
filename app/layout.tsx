import type { Metadata } from "next";
import type { PageMapItem } from "nextra";
import { Banner, Head } from "nextra/components";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "./globals.css";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  title: {
    default: "Learn",
    template: "%s | Learn",
  },
  description: "Personal Knowledge Base",
  openGraph: {
    description: "Personal Knowledge Base",
  },
};

const banner = (
  <Banner dismissible={false}>This is under development. Stay tuned! 🚀</Banner>
);

const navbar = (
  <Navbar
    logo={
      <>
        <span>📚</span>
        <b style={{ marginLeft: "0.4em" }}>Learn</b>
      </>
    }
    projectLink="https://github.com/ch-shubham/learn"
  />
);

const footer = (
  <Footer>© {new Date().getFullYear()} Learn — Personal Knowledge Base</Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let pageMap: PageMapItem[] = [];

  try {
    pageMap = await getPageMap();
  } catch (err) {
    console.error("getPageMap failed:", err);
    pageMap = [];
  }

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        backgroundColor={{
          light: "#eff1f5", // Latte Base
          dark: "#1e1e2e", // Mocha Base
        }}
        color={{
          hue: { light: 266, dark: 267 },
          saturation: { light: 85, dark: 84 },
          lightness: { light: 58, dark: 81 },
        }}
      />
      <body>
        <Layout
          pageMap={pageMap}
          banner={banner}
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/ch-shubham/learn"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink={null}
          feedback={{ content: null }}
        >
          {children ?? null}
        </Layout>
      </body>
    </html>
  );
}
