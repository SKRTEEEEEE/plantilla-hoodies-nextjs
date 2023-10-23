import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Plantilla-hoodies-nextjs',
  description: 'Plantilla para ecommerc',
  creator: 'Sektersyto',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gray-800 text-white p-3">
            <Navbar />
          </header>
          <main className="flex-1 p-1 h-[calc(100vh-4rem)] overflow-y-auto flex items-center justify-center">
            {children}
          </main>
          <footer className="bg-gray-800 text-white p-1">
            Esto es el Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
