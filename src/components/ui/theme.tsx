import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./button.recipe";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "75em",
  xl: "85em",
  "2xl": "100em"
};

const config = defineConfig({
  theme: {
    breakpoints: breakpoints,
    keyframes: {
      gradient: {
        "0%": {
          backgroundPosition: "0%"
        },
        "100%": {
          backgroundPosition: "100%"
        }
      }
    },
    tokens: {
      colors: {
        brand: {
          50: { value: "#3138dc" },
          60: { value: "#0068ff" },
          70: { value: "#0086ff" },
          80: { value: "#00aec1" },
          90: { value: "#ffbd48" },
          100: { value: "#FC8181" },
          110: { value: "#00c17c" },
          120: { value: "#0097a7" },
          130: { value: "#000000" },
          140: { value: "#2d3748" }
        }
      },
      animations: {
        gradient: { value: "gradient 20s linear infinite alternate" }
      }
    },
    semanticTokens: {
      colors: {
        brand: {
          main: { value: "{colors.brand.50}" },
          primary: { value: "{colors.brand.60}" },
          secondary: { value: "{colors.brand.70}" },
          hover: { value: "{colors.brand.80}" },
          warning: { value: "{colors.brand.90}" },
          danger: { value: "{colors.brand.100}" },
          valid: { value: "{colors.brand.110}" },
          footer: { value: "{colors.brand.120}" },
          footerText: { value: "{colors.brand.130}" },
          content: { value: "#09090b80" }
        }
      }
    },
    recipes: {
      button: buttonRecipe
    }
  }
});

export const system = createSystem(defaultConfig, config);
