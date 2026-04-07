import { SITE } from "./config";

/**
 * Creates a tel: href for phone links
 */
export function telHref(phone?: string): string {
  const number = phone ?? SITE.phone;
  return `tel:${number}`;
}

/**
 * Creates a WhatsApp link with pre-filled message
 */
export function whatsappHref(
  phone?: string,
  message?: string
): string {
  const number = phone ?? SITE.whatsapp;
  const text = message ?? SITE.whatsappMessage;
  const cleanNumber = number.replace(/\+/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates an email mailto link
 */
export function emailHref(email?: string, subject?: string): string {
  const address = email ?? SITE.email;
  if (subject) {
    return `mailto:${address}?subject=${encodeURIComponent(subject)}`;
  }
  return `mailto:${address}`;
}

/**
 * Converts area name to URL slug
 */
export function areaToSlug(area: string): string {
  return area.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Converts URL slug back to area name
 */
export function slugToArea(slug: string): string | undefined {
  return SITE.areas.find(
    (area) => areaToSlug(area) === slug
  );
}
