import ThemePageWrapper from "@/components/theme-page-wrapper";

export default async function VideoDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return <ThemePageWrapper page="video-detail" slug={slug} />;
}
