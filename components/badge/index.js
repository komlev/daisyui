export default {
  ".badge": {
    "@apply inline-flex items-center justify-center transition duration-200 ease-out h-5 text-sm leading-5 rounded-badge border text-base-content": {},
    "width": "fit-content",
    "paddingLeft": "0.563rem",
    "paddingRight": "0.563rem",
    "background": "var(--badge-color, var(--color-base-100))",
    "borderColor": "var(--badge-color, var(--color-base-200))",
    "&.badge-outline": {
      "@apply border-current/50 bg-transparent": {},
      "color": "var(--badge-color, var(--color-base-content))"
    }
  },
  ".badge-faded": {
    "color": "color-mix(in xyz, var(--badge-color) 80%, var(--color-base-content))",
    "background": "color-mix(in xyz, var(--badge-color) 10%, var(--color-base-100))",
    "borderColor": "color-mix(in xyz, var(--badge-color) 7%, transparent)"
  },
  ".badge-primary": {
    "--badge-color": "var(--color-primary)",
    "@apply text-primary-content": {}
  },
  ".badge-secondary": {
    "--badge-color": "var(--color-secondary)",
    "@apply text-secondary-content": {}
  },
  ".badge-accent": {
    "--badge-color": "var(--color-accent)",
    "@apply text-accent-content": {}
  },
  ".badge-neutral": {
    "--badge-color": "var(--color-neutral)",
    "@apply text-neutral-content": {}
  },
  ".badge-info": {
    "--badge-color": "var(--color-info)",
    "@apply text-info-content": {}
  },
  ".badge-success": {
    "--badge-color": "var(--color-success)",
    "@apply text-success-content": {}
  },
  ".badge-warning": {
    "--badge-color": "var(--color-warning)",
    "@apply text-warning-content": {}
  },
  ".badge-error": {
    "--badge-color": "var(--color-error)",
    "@apply text-error-content": {}
  },
  ".badge-ghost": {
    "@apply border-base-200 bg-base-200 text-base-content": {}
  },
  ".badge-xs": {
    "@apply h-3 text-xs leading-3": {},
    "paddingLeft": "0.313rem",
    "paddingRight": "0.313rem"
  },
  ".badge-sm": {
    "@apply h-4 text-xs leading-4": {},
    "paddingLeft": "0.438rem",
    "paddingRight": "0.438rem"
  },
  ".badge-md": {
    "@apply h-5 text-sm leading-5": {},
    "paddingLeft": "0.563rem",
    "paddingRight": "0.563rem"
  },
  ".badge-lg": {
    "@apply h-6 text-base leading-6": {},
    "paddingLeft": "0.688rem",
    "paddingRight": "0.688rem"
  }
};