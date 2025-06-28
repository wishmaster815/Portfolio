import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Scan This Sticker - Jayesh Shrivastava",
  description:
    "Scan this sticker using Google Lens to visit Jayesh Shrivastava's portfolio homepage.",
  openGraph: {
    title: "Jayesh's Portfolio Sticker",
    description: "Scan this to see magic",
    url: "https://wishmaster815.vercel.app/sticker",
    images: [
      {
        url: "https://wishmaster815.vercel.app/sticker.png",
        width: 800,
        height: 600,
        alt: "Jayesh Portfolio Sticker",
      },
    ],
  },
};

export default function StickerPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Scan This Sticker to Visit My Portfolio
      </h1>
      <Image
        src="/sticker.png"
        alt="Jayesh Portfolio Sticker"
        width={400}
        height={400}
        priority
        className="rounded-xl shadow-lg"
      />
      <p className="mt-4 text-lg">
        This sticker links to:{" "}
        <a
          href="https://wishmaster815.vercel.app/"
          className="text-blue-600 underline"
          target="_blank"
        >
          jayeshshrivastava.me
        </a>
      </p>
    </main>
  );
}
