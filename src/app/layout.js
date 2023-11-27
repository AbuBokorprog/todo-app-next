import "../../styles/app.scss";

export const metadata = {
  title: "Todo App",
  description: "This is todo app project for better understand NEXT.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
