import '@/mock/index';
import { ModalProvider } from '@/providers/ModalProvider';
import ReactQueryProvider from '@/service/ReactQueryProvider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Slide, ToastContainer } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import './globals.css';

const ProximaNova = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Test',
  description: 'Aplicação simples de Produtos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={twMerge('h-full w-full', ProximaNova.className)}>
        <ReactQueryProvider>
          <ModalProvider>{children}</ModalProvider>
        </ReactQueryProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
          transition={Slide}
        />
      </body>
    </html>
  );
}
