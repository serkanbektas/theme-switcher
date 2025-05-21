import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/site/header";
import { Footer } from "../components/site/footer";
import { videoData } from "@/data/videos";
import { Clock, Eye, Calendar, Tag } from "lucide-react";

export default function DarksideVideosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] text-white">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-4xl font-bold text-[#bb86fc]">
            Videos - Dark Side Theme
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoData.map((video) => (
              <Link
                href={`/videos/${video.id}`}
                key={video.id}
                className="overflow-hidden rounded-lg border border-[#333333] bg-[#1a1a1a] shadow-md transition-colors hover:border-[#bb86fc]"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`${video.thumbnail}?w=800&auto=format&fit=crop&q=80`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 right-3 rounded bg-[#bb86fc]/80 px-2 py-1 text-sm text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {video.title}
                  </h3>
                  <p className="mb-4 text-gray-400">{video.description}</p>
                  <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye size={14} className="text-[#bb86fc]" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#bb86fc]" />
                      <span>{video.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={14} className="text-[#bb86fc]" />
                      <span>{video.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
