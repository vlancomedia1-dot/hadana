import FloatingWhatsApp from '@/components/ui/FloatingWhatsapp';
import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'خطوات طفلي | حضانة وتعليم مبكر',
    template: '%s | خطوات طفلي',
  },
  description:
    'خطوات طفلي حضانة متكاملة تهتم بتعليم الأطفال وتنمية مهاراتهم من خلال اللعب، الأنشطة، والتجارب التعليمية الممتعة.',

  keywords: [
    'حضانة',
    'تعليم أطفال',
    'حضانة أطفال',
    'تعليم مبكر',
    'رياض أطفال',
    'خطوات طفلي',
  ],

  authors: [{ name: 'خطوات طفلي' }],
  creator: 'خطوات طفلي',

  openGraph: {
    title: 'خطوات طفلي | حضانة وتعليم مبكر',
    description:
      'بيئة آمنة وممتعة تساعد طفلك على التعلم والنمو بثقة وسعادة.',
    url: 'https://joud-kindergarten.vercel.app',
    siteName: 'خطوات طفلي',
    images: [
      {
        url: 'https://joud-kindergarten.vercel.app/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'خطوات طفلي - حضانة وتعليم مبكر',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* dir="rtl" is crucial for Arabic Layout */
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <FloatingWhatsApp />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Preschool",
              name: "خطوات طفلي",
              description:
                "حضانة وتعليم مبكر تهتم بتنمية مهارات الأطفال في بيئة آمنة وممتعة.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
              },
              telephone: "+966 55 1234567",
              url: "https://your-domain.com",
            }),
          }}
        />

      </body>
    </html>
  );
}