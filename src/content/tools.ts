// Tools and personal projects, shown in the "Tools" section on the home page.
// Live details (latest release, stars, downloads) are fetched from GitHub; the
// text here is what GitHub doesn't know.

export type Tool = {
  repo: string; // "owner/name" on GitHub
  name: string;
  tagline: string;
  platform: string;
  // Shown as "+ added" lines, like a diff.
  features: string[];
};

export const githubUser = "MurbX";

export const tools: Tool[] = [
  {
    repo: "MurbX/screenrecorder",
    name: "ScreenRec",
    tagline: "A fast, lightweight screen recorder and screenshot tool for Windows.",
    platform: "Windows 10 & 11",
    features: [
      "GPU-accelerated recording, 4K down to 1080p at 60 FPS",
      "Webcam overlay, cursor highlight and live drawing",
      "Screenshot editor with blur, callouts and numbered steps",
      "Native C++, about 1 MB, free and open source",
    ],
  },
];

// The "in progress" card next to the released tools.
export const nextUp = {
  title: "More tools on the way",
  body: "I build small, focused tools in my own time and release them for free. Follow along on GitHub, or star a repo to support the work.",
};
