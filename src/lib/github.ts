// Public GitHub data for the Tools section. Fetched on the server and cached for an
// hour, so a new release shows up on the site without a redeploy. Any failure
// (rate limit, network) returns null and the card falls back to its static text.

const REVALIDATE_SECONDS = 3600;

export type RepoInfo = {
  url: string;
  stars: number;
  language: string | null;
  license: string | null;
  release: {
    tag: string;
    url: string;
    publishedAt: string;
    downloads: number;
    assets: { name: string; url: string }[];
  } | null;
};

async function gh<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

type RepoResponse = {
  html_url: string;
  stargazers_count: number;
  language: string | null;
  license: { spdx_id: string } | null;
};

type ReleaseResponse = {
  tag_name: string;
  html_url: string;
  published_at: string;
  assets: { name: string; browser_download_url: string; download_count: number }[];
};

export async function getRepo(repo: string): Promise<RepoInfo | null> {
  const [info, release] = await Promise.all([
    gh<RepoResponse>(`/repos/${repo}`),
    gh<ReleaseResponse>(`/repos/${repo}/releases/latest`),
  ]);
  if (!info) return null;
  return {
    url: info.html_url,
    stars: info.stargazers_count,
    language: info.language,
    license: info.license?.spdx_id ?? null,
    release: release && {
      tag: release.tag_name,
      url: release.html_url,
      publishedAt: release.published_at,
      downloads: release.assets.reduce((sum, a) => sum + a.download_count, 0),
      assets: release.assets.map((a) => ({ name: a.name, url: a.browser_download_url })),
    },
  };
}
