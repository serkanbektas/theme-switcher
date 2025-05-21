import { Suspense } from "react";
import ThemeLoader from "@/components/theme-loader";
import { getDefaultTheme } from "@/lib/utils";

interface ThemePageWrapperProps {
  page: string;
  slug?: string;
  props?: any;
  data?: any;
}

export default function ThemePageWrapper({
  page,
  slug,
  data,
  props,
}: ThemePageWrapperProps) {
  const theme = getDefaultTheme();

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading theme...
        </div>
      }
    >
      <ThemeLoader
        page={page}
        data={data}
        theme={theme}
        slug={slug}
        {...props}
      />
    </Suspense>
  );
}
