import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/site/header";
import { Footer } from "../components/site/footer";
import { videoData } from "@/data/videos";
import { Clock, Eye, Calendar } from "lucide-react";

export default function DefaultVideosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-4xl font-bold">Videos - Default Theme</h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoData.map((video) => (
              <Link
                href={`/videos/${video.id}`}
                key={video.id}
                className="overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`${video.thumbnail}?w=800&auto=format&fit=crop&q=80`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-sm text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">{video.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{video.date}</span>
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
