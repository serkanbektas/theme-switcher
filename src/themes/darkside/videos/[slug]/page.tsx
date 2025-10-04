import React from "react";
import { Header } from "../../components/site/header";
import { Footer } from "../../components/site/footer";
import { getVideoById } from "@/data/videos";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Share2,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

interface VideoDetailProps {
  params: { slug: string };
}

export default function DarksideVideoDetail({ params }: VideoDetailProps) {
  const { slug } = params;
  const video = getVideoById(slug);

  if (!video) {
    return (
      <div className="flex min-h-screen flex-col bg-[#121212] text-white dark:bg-[#0a0a0a] dark:text-gray-100">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#bb86fc] dark:text-[#a370f7]">
              Video Not Found
            </h1>
            <p className="mb-8 text-gray-400 dark:text-gray-500">
              The video you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 rounded-md bg-[#bb86fc] px-4 py-2 text-white transition-colors hover:bg-[#a679e9] dark:bg-[#a370f7] dark:hover:bg-[#9260e5]"
            >
              <ArrowLeft size={16} />
              Back to Videos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#121212] text-white dark:bg-[#0a0a0a] dark:text-gray-100">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/videos"
            className="mb-6 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-[#bb86fc] dark:text-gray-500 dark:hover:text-[#a370f7]"
          >
            <ArrowLeft size={16} />
            Back to Videos
          </Link>

          <div className="mb-8 overflow-hidden rounded-lg border border-[#333333] bg-[#1a1a1a] shadow-md dark:border-[#1a1a1a] dark:bg-[#0f0f0f]">
            <div className="relative aspect-video">
              <video
                src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
                className="h-full w-full object-cover"
                poster={`${video.thumbnail}?w=1200&auto=format&fit=crop&q=80`}
                controls
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-white dark:text-gray-100">
              {video.title}
            </h1>
            <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-gray-400 dark:text-gray-500">
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-[#bb86fc] dark:text-[#a370f7]" />
                <span>{video.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-[#bb86fc] dark:text-[#a370f7]" />
                <span>{video.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} className="text-[#bb86fc] dark:text-[#a370f7]" />
                <span>{video.category}</span>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between border-y border-[#333333] py-4 dark:border-[#1a1a1a]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-[#252525] px-4 py-2 text-[#bb86fc] transition-colors hover:bg-[#2f2f2f] dark:bg-[#1a1a1a] dark:text-[#a370f7] dark:hover:bg-[#252525]">
                  <ThumbsUp size={18} />
                  <span>Like</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#252525] px-4 py-2 text-[#bb86fc] transition-colors hover:bg-[#2f2f2f] dark:bg-[#1a1a1a] dark:text-[#a370f7] dark:hover:bg-[#252525]">
                  <MessageSquare size={18} />
                  <span>Comment</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#252525] px-4 py-2 text-[#bb86fc] transition-colors hover:bg-[#2f2f2f] dark:bg-[#1a1a1a] dark:text-[#a370f7] dark:hover:bg-[#252525]">
                <Share2 size={18} />
                <span>Share</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="mb-4 text-2xl font-semibold text-[#bb86fc] dark:text-[#a370f7]">
                Description
              </h2>
              <p className="text-gray-300 dark:text-gray-400">{video.description}</p>
              <p className="mt-4 text-gray-300 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu
                aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies
                lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
              </p>
              <p className="mt-4 text-gray-300 dark:text-gray-400">
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies
                lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[#333333] bg-[#1a1a1a] p-6 dark:border-[#1a1a1a] dark:bg-[#0f0f0f]">
            <h2 className="mb-4 text-2xl font-semibold text-[#bb86fc] dark:text-[#a370f7]">
              Comments
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-md border border-[#333333] bg-[#252525] p-4 dark:border-[#1a1a1a] dark:bg-[#141414]"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#bb86fc]/20 dark:bg-[#a370f7]/20">
                      <span className="font-bold text-[#bb86fc] dark:text-[#a370f7]">U{i}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white dark:text-gray-100">Dark User {i}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-600">2 days ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    Amazing content! The dark aesthetic really enhances the
                    viewing experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
