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

export default function DefaultVideoDetail({ params }: VideoDetailProps) {
  const { slug } = params;
  const video = getVideoById(slug);

  if (!video) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold">Video Not Found</h1>
            <p className="mb-8 text-muted-foreground">
              The video you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/videos"
              className="hover:bg-primary/90 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors"
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/videos"
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Videos
          </Link>

          <div className="mb-8 overflow-hidden rounded-lg bg-card shadow-md">
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
            <h1 className="mb-4 text-4xl font-bold">{video.title}</h1>
            <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{video.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{video.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} />
                <span>{video.category}</span>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between border-y border-border py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                  <ThumbsUp size={18} />
                  <span>Like</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                  <MessageSquare size={18} />
                  <span>Comment</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                <Share2 size={18} />
                <span>Share</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="mb-4 text-2xl font-semibold">Description</h2>
              <p className="text-muted-foreground">{video.description}</p>
              <p className="mt-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu
                aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies
                lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
              </p>
              <p className="mt-4 text-muted-foreground">
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies
                lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6">
            <h2 className="mb-4 text-2xl font-semibold">Comments</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-md bg-card p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="bg-primary/20 h-10 w-10 rounded-full"></div>
                    <div>
                      <h4 className="font-medium">User {i}</h4>
                      <p className="text-xs text-muted-foreground">
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Great video! I really enjoyed the content and learned a lot
                    from it.
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
