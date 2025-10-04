import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/themes/spring/components/site/header";
import { Footer } from "@/themes/spring/components/site/footer";
import { videoData } from "@/data/videos";
import { Clock, Eye, Calendar, Tag } from "lucide-react";

export default function SpringVideosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] dark:bg-[#0f1a0f]">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-4xl font-bold text-[#3c8618] dark:text-[#a8e890]">
            Videos - Spring Theme
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoData.map((video) => (
              <Link
                href={`/videos/${video.id}`}
                key={video.id}
                className="overflow-hidden rounded-lg border border-[#e1f3d8] bg-white shadow-sm transition-shadow hover:shadow-md dark:border-[#2d4a2d] dark:bg-[#1a2e1a] dark:hover:shadow-lg"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`${video.thumbnail}?w=800&auto=format&fit=crop&q=80`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 rounded-full bg-[#67c23a]/80 px-2 py-1 text-sm text-white dark:bg-[#85d65a]/80">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-[#3c8618] dark:text-[#a8e890]">
                    {video.title}
                  </h3>
                  <p className="mb-4 text-[#606266] dark:text-[#b3c4b3]">{video.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#909399] dark:text-[#8a9a8a]">
                    <div className="flex items-center gap-1">
                      <Eye size={14} className="text-[#67c23a] dark:text-[#85d65a]" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#67c23a] dark:text-[#85d65a]" />
                      <span>{video.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={14} className="text-[#67c23a] dark:text-[#85d65a]" />
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
