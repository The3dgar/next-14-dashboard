import '@/app/ui/global.css';
import { Metadata } from 'next';
import { inter } from './ui/fonts';

 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:title' content='Cotizador de Seguros' />
        <meta property='og:description' content='Panel dinamico para administrar y cotizar seguros automotriz' />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
