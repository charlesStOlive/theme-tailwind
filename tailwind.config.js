module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        mydark: 'var(--color-mydark)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',

        // ...
      },
      height: {
        midscreen: '50vh',
        thirdscreen: '75vh',
      }
    },
    fill: theme => ({
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'mydark': 'var(--color-mydark)',
      'success': 'var(--color-success)',
      'warning': 'var(--color-warning)',
      'error': 'var(--color-error)',
      'info': 'var(--color-info)',
    }),
    stroke: theme => ({
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'mydark': 'var(--color-mydark)',
      'success': 'var(--color-success)',
      'warning': 'var(--color-warning)',
      'error': 'var(--color-error)',
      'info': 'var(--color-info)',
    }),
    textIndent: { // defaults to {}
      '1': '0.25rem',
      '2': '0.5rem',
    },
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(229,244,177, 0.5)',
      'lg': '0 2px 10px rgba(255, 255, 255, 0.5)',
    },
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'default': ['background-color', 'border-color', 'color', 'fill', 'stroke', 'opacity', 'box-shadow', 'transform'],
      'colors': ['background-color', 'border-color', 'color', 'fill', 'stroke'],
      'bg': 'background-color',
      'border': 'border-color',
      'color': 'color',
      'opacity': 'opacity',
      'shadow': 'box-shadow',
      'transform': 'transform',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '50': '50ms',
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '250': '250ms',
      '300': '300ms',
      '400': '400ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
    },
  },
  variants: { // all the following default to ['responsive']
    textIndent: ['responsive'],
    textShadow: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    textUnset: ['responsive'],
    caps: ['responsive'],
    nums: ['responsive'],
    ligatures: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
  },
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: true,          // whether to generate hyphenation utilities
      textUnset: true,        // whether to generate utilities to unset text properties
      caps: true,             // whether to generate utilities to use alternate glyphs for capital letters
      nums: true,             // whether to generate utilities to use alternate glyphs for numbers, fractions, and ordinal markers
      ligatures: true,        // whether to generate ligature utilities
      componentPrefix: 'c-',  // the prefix to use for text style classes
    }),
    require('tailwindcss-animatecss')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive'],
    }),
    require('tailwindcss-transitions')(),
  ],
}