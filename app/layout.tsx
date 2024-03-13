import Nav from 'comp/Nav';
import AuthProvider from 'context/AuthProvider';
import { Pacifico, Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Analytics from 'util/Analytics';
import TopWrapper from 'util/TopWrapper';
import './globals.css';
import { Metadata } from 'next';

type Props = {
  children?: ReactNode;
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const pacifico = Pacifico({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

// const roboto = Roboto({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto',
// });

export const metadata: Metadata = {
  title: 'Save Food',
  description: 'Get the app to explore restaurants in your local area',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-pry scrollbar-track-slate-200"
    >
      <Analytics />
      <body
        className={`font-sans ${roboto.variable} ${pacifico.variable} antialiased print:bg-secondary`}
      >
        <AuthProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Nav />

          <TopWrapper>
            {children}
            <div id="mainModalContainer" />
          </TopWrapper>

          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
