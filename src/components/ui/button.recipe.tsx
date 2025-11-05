import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      contactPrimary: {
        bg: "rgba(255, 255, 255, .15)",
        fontSize: "xl"
      },
      contactSecondary: {
        bg: "brand.primary",
        fontSize: "xl",
        p: "4"
      },
      project: {
        bg: "transparent",
        fontSize: "md",
        py: 2,
        px: 6,
        boxShadow:
          "rgba(0, 134, 255, 0.2) 0px 0px 15px, rgba(0, 134, 255, 0.15) 0px 0px 3px 1px",
        border: "1px solid rgba(0, 134, 255, 0.4)"
      },
      filterButton: {
        bg: "brand.content",
        fontSize: "2xl",
        py: 4,
        px: 6,
        boxShadow:
          "rgba(0, 134, 255, 0.2) 0px 0px 15px, rgba(0, 134, 255, 0.15) 0px 0px 3px 1px",
        border: "1px solid rgba(0, 134, 255, 0.4)"
      },
      credits: {
        bg: "brand.main",
        fontSize: "lg",
        p: 3,
        color: "whiteAlpha"
      },
      collapse: {
        bg: "transparent",
        fontSize: "md",
        p: 2,
        h: 8,
        color: "brand.hover",
        textDecoration: "underline"
      },
      mobileNav: {
        fontSize: "md",
        px: "2",
        boxShadow:
          "rgba(0, 134, 255, 0.30) 0px 0px 15px, rgba(0, 134, 255, 0.15) 0px 0px 3px 1px",
        _hover: {
          bg: "brand.hover",
          boxShadow:
            "rgba(0, 134, 255, 0.5) 0px 0px 15px, rgba(0, 134, 255, 0.3) 0px 0px 3px 1px"
        },
        _expanded: {
          bg: "brand.primary",
          boxShadow:
            "rgba(0, 134, 255, 0.5) 0px 0px 15px, rgba(0, 134, 255, 0.3) 0px 0px 3px 1px",
          border: "1px solid #0068ff"
        }
      },
      nav: {
        bg: "transparent",
        fontSize: "lg",
        fontWeight: "semibold",
        px: "2"
      }
    }
  }
});
