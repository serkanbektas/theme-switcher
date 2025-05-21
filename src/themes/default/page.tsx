import React from "react";
import { Header } from "@/themes/default/components/site/header";
import { Footer } from "@/themes/default/components/site/footer";
import Image from "next/image";

export default function DefaultTheme() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight">
                Default Theme
              </h1>
              <p className="mb-12 max-w-2xl text-xl text-muted-foreground">
                A clean and minimal theme design with a focus on readability and
                usability. Perfect for content-focused websites and
                applications.
              </p>
              <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80"
                  alt="Default Theme Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Feature Highlights
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg bg-card p-8 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Feature {i}</h3>
                  <p className="text-muted-foreground">
                    This is a sample feature description that highlights the
                    capabilities of the default theme.
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
