import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/reservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// console.log(josefin);

export const metadata = {
  // title :"The Wild Oasis"
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome The Wild Oasis",
  },
  themeColor: "#cff222",
  description:
    "luxurious cabin hotel, located in the heart of the Italian Dolomites surrounded be beautiful mountains and dark forest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
