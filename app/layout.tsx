import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import './motion.css';

export const metadata: Metadata = {
  title: 'Golden Kick SC — Accra, Ghana',
  description: 'The official club hub for Golden Kick Sporting Club in Mamprobi, Accra. Club news, fixtures, first team and pathways.',
  metadataBase: new URL('https://www.goldenkicksc.com'),
  openGraph: { title: 'Golden Kick SC', description: 'Football, development and opportunity in Accra.', url: 'https://www.goldenkicksc.com', siteName: 'Golden Kick SC', type: 'website' },
};

const themeBootstrap = `(() => {
  try {
    const saved = localStorage.getItem('golden-kick-theme');
    document.documentElement.dataset.theme = saved === 'light' ? 'light' : 'dark';
  } catch {
    document.documentElement.dataset.theme = 'dark';
  }
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
