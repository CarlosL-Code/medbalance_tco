import { Lato, Merriweather } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata = {
  title: 'MedBalance — Centro Médico Integral | Temuco',
  description: 'Centro Médico MedBalance en Temuco. Especialistas en Psicología, Kinesiología, Fonoaudiología, Nutrición y Terapia Ocupacional.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lato.variable} ${merriweather.variable}`}>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
