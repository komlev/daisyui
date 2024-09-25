export default {
  ".btn": {
    "@apply text-base-content outline-base-content inline-flex shrink-0 cursor-pointer flex-wrap items-center justify-center gap-2 rounded-[var(--radius-btn)] text-center text-sm/none font-semibold no-underline outline-offset-2 duration-200 ease-out select-none align-middle h-10 px-4": {},
    "transitionProperty": "color, background-color, border-color, opacity, box-shadow, transform",
    "backgroundColor": "var(--btn-bg, var(--color-base-200))",
    "borderWidth": "var(--spacing-button-border)",
    "borderColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 2%)",
    "borderBottomColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 4%)",
    "boxShadow": "0 1px 0 0 color-mix(in oklch, white 3%, transparent) inset,\n    0 1px 1px 0 oklch(0% 0 0/0.07)",
    "&:hover": {
      "borderColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 5%)",
      "borderBottomColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 7%)",
      "backgroundColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 5%)"
    },
    "&.btn-active": {
      "borderColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 5%)",
      "borderBottomColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 7%)",
      "backgroundColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 5%)"
    },
    "&:focus-visible": {
      "@apply outline outline-2": {}
    },
    "&:active": {
      "&:focus": {
        "transform": "scale(var(--btn-focus-scale, 0.98))",
        "@apply animate-[button-pop_0s_ease-out]": {},
        "borderColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 5%)",
        "borderBottomColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)), black 7%)",
        "boxShadow": "0 1px 0 0 oklch(0% 0 0/0.07) inset,\n        0 0 0 0 oklch(0% 0 0/0.1)"
      },
      "&:hover": {
        "transform": "scale(var(--btn-focus-scale, 0.97))",
        "@apply animate-[button-pop_0s_ease-out]": {}
      }
    },
    "&:is(:disabled, [disabled], .btn-disabled)": {
      "@apply bg-neutral/20 text-base-content/20 pointer-events-none border-transparent": {},
      "&:hover": {
        "@apply bg-neutral/20 text-base-content/20 pointer-events-none border-transparent": {}
      }
    },
    "&:is(input[type=checkbox]),\n  &:is(input[type=radio])": {
      "@apply w-auto appearance-none": {},
      "&::after": {
        "@apply content-[attr(aria-label)]": {}
      },
      "&:checked": {
        "@apply border-primary bg-primary text-primary-content": {},
        "&:focus-visible": {
          "@apply outline-primary": {}
        },
        "&:hover": {
          "backgroundColor": "color-mix(in oklab, var(--color-primary) 90%, black)",
          "borderColor": "color-mix(in oklab, var(--color-primary) 90%, black)"
        }
      }
    }
  },
  ".btn-primary": {
    "--btn-bg": "var(--color-primary)",
    "@apply text-primary-content outline-primary": {}
  },
  ".btn-secondary": {
    "--btn-bg": "var(--color-secondary)",
    "@apply text-secondary-content outline-secondary": {}
  },
  ".btn-accent": {
    "--btn-bg": "var(--color-accent)",
    "@apply text-accent-content outline-accent": {}
  },
  ".btn-neutral": {
    "--btn-bg": "var(--color-neutral)",
    "@apply text-neutral-content outline-neutral": {}
  },
  ".btn-info": {
    "--btn-bg": "var(--color-info)",
    "@apply text-info-content outline-info": {}
  },
  ".btn-success": {
    "--btn-bg": "var(--color-success)",
    "@apply text-success-content outline-success": {}
  },
  ".btn-warning": {
    "--btn-bg": "var(--color-warning)",
    "@apply text-warning-content outline-warning": {}
  },
  ".btn-error": {
    "--btn-bg": "var(--color-error)",
    "@apply text-error-content outline-error": {}
  },
  ".btn.glass": {
    "@apply shadow-none outline-current hover:[--glass-border-opacity:15%] hover:[--glass-opacity:25%]": {},
    "&.btn-active": {
      "--glass-border-opacity": "15%",
      "--glass-opacity": "25%"
    }
  },
  ".btn-ghost": {
    "@apply hover:bg-base-content/20 border border-transparent bg-transparent text-current shadow-none outline-current hover:border-transparent": {},
    "&.btn-active": {
      "@apply bg-base-content/20 border-transparent": {}
    }
  },
  ".btn-link": {
    "@apply text-primary border-transparent bg-transparent underline shadow-none outline-current hover:border-transparent hover:bg-transparent hover:underline": {},
    "&.btn-active": {
      "@apply border-transparent bg-transparent underline": {}
    }
  },
  ".btn-outline": {
    "&:not(.btn-active):not(:hover)": {
      "@apply bg-transparent text-[var(--btn-bg)] shadow-none": {}
    },
    "&.btn-active": {
      "borderColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)) 90%, black)",
      "backgroundColor": "color-mix(in oklab, var(--btn-bg, var(--color-base-200)) 90%, black)"
    }
  },
  ".btn-xs": {
    "@apply h-6 px-2": {},
    "fontSize": "var(--font-size-xs)"
  },
  ".btn-sm": {
    "@apply h-8 px-3": {},
    "fontSize": "var(--font-size-sm)"
  },
  ".btn-md": {
    "@apply h-10 px-4": {},
    "fontSize": "var(--font-size-sm)"
  },
  ".btn-lg": {
    "@apply h-14 px-6": {},
    "fontSize": "var(--font-size-lg)"
  },
  ".btn-square": {
    "@apply px-0 size-12": {},
    "&.btn-xs": {
      "@apply size-6": {}
    },
    "&.btn-sm": {
      "@apply size-8": {}
    },
    "&.btn-md": {
      "@apply size-12": {}
    },
    "&.btn-lg": {
      "@apply size-16": {}
    }
  },
  ".btn-circle": {
    "@apply aspect-square rounded-full px-0": {}
  },
  ".btn-wide": {
    "@apply w-64": {}
  },
  ".btn-block": {
    "@apply w-full": {}
  },
  "@keyframes button-pop": {
    "0%": {
      "transform": "scale(var(--btn-focus-scale, 0.98))"
    },
    "40%": {
      "transform": "scale(1.02)"
    },
    "100%": {
      "transform": "scale(1)"
    }
  }
};