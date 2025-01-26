import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '𝗩𝗦𝗞 Films', 
  description: 'Made with Love',
  icons: {
    icon: '/WHITE.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
