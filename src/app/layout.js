import "../styles/app.scss";
import Header from "./header";
import Footer from "./footer";
import "../app/globals.css";
import Provider from "../component/provider.jsx";
export const metadata = {
  title: "Todo App",
  description: "This is a Todo app project for better understand NEXT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="container mx-auto lg:px-20">
        <Provider>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </Provider>
      </body>
    </html>
  );
}
