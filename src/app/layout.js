import './components/app/globals.css';
export const metadata = {
  title: 'Emmanuel Ndubuisi Sunday Portfolio',
  description: 'Creative Graphic Designer & Visual Storyteller',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
