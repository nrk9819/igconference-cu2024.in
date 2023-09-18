import ThemeConfig from "../theme-config.json";

export const SITE_NAME = ThemeConfig.site.name;
export const SITE_DESCRIPTION = ThemeConfig.site.description;
export const TOPBAR_LEFT = ThemeConfig.header.topbar.left;
export const TOPBAR_RIGHT = ThemeConfig.header.topbar.right;
export const NAV_MENU_ITEMS = ThemeConfig.header.nav.menuItems;

// landing page
export const LANDING_HERO_TITLE =
  ThemeConfig.pages.landing["hero-section"].title;
export const LANDING_HERO_SUBTITLE =
  ThemeConfig.pages.landing["hero-section"].subtitle;
export const LANDING_THEME_TITLE =
  ThemeConfig.pages.landing["themes-section"].title;
