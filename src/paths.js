const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function getAppPath() {
  if (typeof window === "undefined") {
    return "/";
  }

  const pathname = window.location.pathname;
  if (base && pathname.startsWith(base)) {
    const path = pathname.slice(base.length);
    return path || "/";
  }

  return pathname;
}

export function toUrl(appPath) {
  if (appPath === "/") {
    return base ? `${base}/` : "/";
  }

  return `${base}${appPath}`;
}
