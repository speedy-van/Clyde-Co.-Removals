import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        clydeNavy: { value: "#0B2A4A" },
        heatherGold: { value: "#E8A33D" },
        neutralLight: { value: "#F7F5F0" },
        neutralDark: { value: "#1A1A1A" },
        muted: { value: "#6B7280" },
        success: { value: "#2F855A" },
      },
      fonts: {
        heading: { value: "var(--font-playfair), serif" },
        body: { value: "var(--font-inter), sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.clydeNavy}" },
        accent: { value: "{colors.heatherGold}" },
        bg: {
          DEFAULT: { value: "{colors.neutralLight}" },
          subtle: { value: "#FFFFFF" },
        },
        fg: {
          DEFAULT: { value: "{colors.neutralDark}" },
          muted: { value: "{colors.muted}" },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      backgroundColor: "neutralLight",
      color: "neutralDark",
      fontFamily: "body",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
    },
    "a:focus-visible, button:focus-visible": {
      outline: "2px solid",
      outlineColor: "heatherGold",
      outlineOffset: "2px",
    },
  },
});

export const system = createSystem(defaultConfig, config);
