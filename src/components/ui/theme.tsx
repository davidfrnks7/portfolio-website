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
      animations: {
        gradient: { value: "gradient 20s linear infinite alternate" }
      }
    },
    semanticTokens: {
      colors: {
        brand: {
          main: { value: "#3138dc" },
          primary: { value: "#0068ff" },
          secondary: { value: "#0086ff" },
          hover: { value: "#00aec1" },
          warning: { value: "#ffbd48" },
          danger: { value: "#FC8181" },
          valid: { value: "#00c17c" },
          footer: { value: "#0097a7" },
          footerText: { value: "#000000" },
          content: { value: "#09090b80" },
          mobileNav: { value: "#09090b" },
          mobileMenuHover: { value: "#005299" }
        }
      }
    },
    recipes: {
      button: buttonRecipe
    }
  }
});

export const system = createSystem(defaultConfig, config);
