import { FC, ReactNode } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

// TBD Add more items to head like og tags
export const Layout: FC<LayoutProps> = ({
  children,
  title = "",
  description = "",
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main className="relative">{children}</main>
    <Footer />
  </>
);

export default Layout;
