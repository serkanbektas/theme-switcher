import {
  DefaultHome,
  DefaultVideos,
  DefaultVideoDetail,
} from "@/themes/default";
import { SpringHome, SpringVideos, SpringVideoDetail } from "@/themes/spring";
import {
  DarksideHome,
  DarksideVideos,
  DarksideVideoDetail,
} from "@/themes/darkside";

interface ThemeLoaderProps {
  page: "home" | "videos" | "video-detail";
  theme: string;
  slug?: string;
}

export default function ThemeLoader({ page, theme, slug }: ThemeLoaderProps) {
  // Render the appropriate component based on theme and page
  if (page === "home") {
    if (theme === "spring") return <SpringHome />;
    if (theme === "darkside") return <DarksideHome />;
    return <DefaultHome />; // Default fallback
  } else if (page === "videos") {
    if (theme === "spring") return <SpringVideos />;
    if (theme === "darkside") return <DarksideVideos />;
    return <DefaultVideos />; // Default fallback
  } else if (page === "video-detail" && slug) {
    if (theme === "spring") return <SpringVideoDetail params={{ slug }} />;
    if (theme === "darkside") return <DarksideVideoDetail params={{ slug }} />;
    return <DefaultVideoDetail params={{ slug }} />; // Default fallback
  }

  // Unexpected page type fallback
  return <div>Invalid page type</div>;
}
