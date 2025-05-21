import React from "react";
import { Header } from "@/themes/spring/components/site/header";
import { Footer } from "@/themes/spring/components/site/footer";
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
  Leaf,
} from "lucide-react";

interface VideoDetailProps {
  params: { slug: string };
}

export default function SpringVideoDetail({ params }: VideoDetailProps) {
  const { slug } = params;
  const video = getVideoById(slug);

  if (!video) {
    return (
      <div className="flex min-h-screen flex-col bg-[#fafafa]">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#3c8618]">
              Video Not Found
            </h1>
            <p className="mb-8 text-[#606266]">
              The video you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 rounded-md bg-[#67c23a] px-4 py-2 text-white transition-colors hover:bg-[#5daf34]"
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
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/videos"
            className="mb-6 inline-flex items-center gap-2 text-[#606266] hover:text-[#67c23a]"
          >
            <ArrowLeft size={16} />
            Back to Videos
          </Link>

          <div className="mb-8 overflow-hidden rounded-lg border border-[#e1f3d8] bg-white shadow-md">
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
            <h1 className="mb-4 text-4xl font-bold text-[#3c8618]">
              {video.title}
            </h1>
            <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-[#909399]">
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-[#67c23a]" />
                <span>{video.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-[#67c23a]" />
                <span>{video.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} className="text-[#67c23a]" />
                <span>{video.category}</span>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between border-y border-[#e1f3d8] py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-[#f0f9eb] px-4 py-2 text-[#67c23a]">
                  <ThumbsUp size={18} />
                  <span>Like</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#f0f9eb] px-4 py-2 text-[#67c23a]">
                  <MessageSquare size={18} />
                  <span>Comment</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#f0f9eb] px-4 py-2 text-[#67c23a]">
                <Share2 size={18} />
                <span>Share</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="mb-4 text-2xl font-semibold text-[#3c8618]">
                Description
              </h2>
              <p className="text-[#606266]">{video.description}</p>
              <p className="mt-4 text-[#606266]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu
                aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies
                lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
              </p>
              <p className="mt-4 text-[#606266]">
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies
                lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[#f0f9eb] p-6">
            <h2 className="mb-4 text-2xl font-semibold text-[#3c8618]">
              Comments
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-md border border-[#e1f3d8] bg-white p-4"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#67c23a]/20">
                      <Leaf size={16} className="text-[#67c23a]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#3c8618]">
                        Nature Lover {i}
                      </h4>
                      <p className="text-xs text-[#909399]">2 days ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#606266]">
                    This video is so refreshing! I love how it captures the
                    essence of nature.
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
