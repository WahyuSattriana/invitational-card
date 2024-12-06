import "./globals.css";

export const metadata = {
  title: "Invitational Card",
  description: "Invitational Card template by Wahyu Sattriana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
