import React from "react";
import { Header } from "@/themes/spring/components/site/header";
import { Footer } from "@/themes/spring/components/site/footer";
import Image from "next/image";
import { Leaf, Sun, CloudRain } from "lucide-react";

export default function SpringTheme() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] dark:bg-[#0f1a0f]">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#3c8618] dark:text-[#a8e890]">
                Spring Theme
              </h1>
              <p className="mb-12 max-w-2xl text-xl text-[#606266] dark:text-[#b3c4b3]">
                A refreshing design inspired by nature, with light colors and
                organic shapes. Perfect for nature-focused and wellness
                websites.
              </p>
              <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-xl shadow-lg dark:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&auto=format&fit=crop&q=80"
                  alt="Spring Theme Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f9eb] py-16 dark:bg-[#1a2e1a]">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#3c8618] dark:text-[#a8e890]">
              Nature Elements
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Flora",
                  icon: <Leaf className="mb-4 h-10 w-10 text-[#67c23a] dark:text-[#85d65a]" />,
                },
                {
                  title: "Sunshine",
                  icon: <Sun className="mb-4 h-10 w-10 text-[#e6a23c] dark:text-[#f5b95f]" />,
                },
                {
                  title: "Rain",
                  icon: <CloudRain className="mb-4 h-10 w-10 text-[#409eff] dark:text-[#66b3ff]" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-white p-8 text-center shadow-sm dark:bg-[#243a24] dark:shadow-none"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="mb-4 text-xl font-semibold text-[#3c8618] dark:text-[#a8e890]">
                    {item.title}
                  </h3>
                  <p className="text-[#606266] dark:text-[#b3c4b3]">
                    This is a sample description of how{" "}
                    {item.title.toLowerCase()} elements are incorporated into
                    the spring theme.
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
