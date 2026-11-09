/**
 * Navigation Items
 *
 * Centralized section links reused by the navbar
 * and footer to keep in-page navigation consistent.
 */

// Single source of truth for section anchors.
export const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Destinations",
    href: "#destinations",
  },
  {
    label: "Why Alvion",
    href: "#why-choose-us",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;