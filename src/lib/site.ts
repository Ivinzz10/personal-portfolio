const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function getProductionSiteUrl(value: string | undefined): URL | undefined {
  if (!value) return undefined;

  try {
    const parsed = new URL(value);
    const host = parsed.hostname.toLowerCase();

    if (
      parsed.protocol !== "https:" ||
      parsed.username ||
      parsed.password ||
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "example.com" ||
      host.endsWith(".example.com") ||
      host === "example.org" ||
      host.endsWith(".example.org") ||
      host === "example.net" ||
      host.endsWith(".example.net") ||
      host === "::1" ||
      host.endsWith(".localhost") ||
      host.endsWith(".example") ||
      host.endsWith(".invalid") ||
      host.endsWith(".test")
    ) {
      return undefined;
    }

    return new URL(parsed.origin);
  } catch {
    return undefined;
  }
}

/** Set NEXT_PUBLIC_SITE_URL to the final HTTPS origin before deployment. */
export const siteUrl = getProductionSiteUrl(rawSiteUrl);
