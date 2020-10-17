import { FC, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

export const Layout: FC<LayoutProps> = ({
    children,
    title = '',
    description = '',
  }) => (
      <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <Header />
            <main>{children}</main>
        <Footer />
      </>
  )

export default Layout