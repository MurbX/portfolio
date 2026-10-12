"use client";

import { useSyncExternalStore } from "react";

// Current time in a given time zone, refreshed every 30 seconds. Renders nothing
// on the server (the build time would be stale), then the live time in the browser.
const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
};
const getMinute = () => Math.floor(Date.now() / 60_000);

export function LocalTime({ timeZone, className }: { timeZone: string; className?: string }) {
  const minute = useSyncExternalStore(subscribe, getMinute, () => null);
  if (minute === null) return null;
  const time = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit" }).format(
    minute * 60_000,
  );
  return (
    <time className={className} suppressHydrationWarning>
      {time}
    </time>
  );
}
