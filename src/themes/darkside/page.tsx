import React from "react";
import { Header } from "./components/site/header";
import { Footer } from "./components/site/footer";
import Image from "next/image";
import { Zap, Shield, Eye } from "lucide-react";

export default function DarksideTheme() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] text-white dark:bg-[#0a0a0a] dark:text-gray-100">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white dark:text-gray-100">
                Dark Side Theme
              </h1>
              <p className="mb-12 max-w-2xl text-xl text-gray-400 dark:text-gray-500">
                A powerful dark theme with vibrant accents and strong contrast.
                Perfect for night mode enthusiasts and immersive experiences.
              </p>
              <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg border border-[#333333] dark:border-[#1a1a1a]">
                <Image
                  src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=1200&auto=format&fit=crop&q=80"
                  alt="Dark Theme Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] py-16 dark:bg-[#050505]">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#bb86fc] dark:text-[#a370f7]">
              Dark Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Power",
                  icon: <Zap className="mb-4 h-10 w-10 text-[#cf6679] dark:text-[#e57a8a]" />,
                },
                {
                  title: "Protection",
                  icon: <Shield className="mb-4 h-10 w-10 text-[#03dac6] dark:text-[#1ee8d4]" />,
                },
                {
                  title: "Vision",
                  icon: <Eye className="mb-4 h-10 w-10 text-[#bb86fc] dark:text-[#a370f7]" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#333333] bg-[#252525] p-8 text-center dark:border-[#1a1a1a] dark:bg-[#0f0f0f]"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="mb-4 text-xl font-semibold text-white dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500">
                    This is a description of the {item.title.toLowerCase()}{" "}
                    feature that makes the dark side theme special and unique.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
