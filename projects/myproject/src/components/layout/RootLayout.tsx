import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface RootLayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
}

const RootLayout = ({ children, hideFooter = false }: RootLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default RootLayout;