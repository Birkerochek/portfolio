type MediaLike = { url?: string } | string | undefined | null;

export function getImageUrl(src: MediaLike): string | undefined {
  if (!src) return undefined;

  const raw = typeof src === "string" ? src : src.url || "";
  if (!raw) return undefined;

  if (raw.startsWith("http")) {
    return raw;
  }

  const path = raw.startsWith("/") ? raw : `/${raw}`;
  const base = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");
  if (!base) return undefined;

  return `${base}${path}`;
}
