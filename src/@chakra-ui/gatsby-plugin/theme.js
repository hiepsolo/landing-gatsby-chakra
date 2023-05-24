import { extendTheme } from '@chakra-ui/react';

const theme = {
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium'
      },
      variants: {
        'deep-blue': {
          bg: '#133963',
          _hover: {
            bg: "#0F2D4F",
          }
        },
        'light-blue': {
          bg: '#1990FF',
          color: '#fff',
          _hover: {
            bg: "#1473CC",
          }
        },
        'light-secondary': {
          bg: '#fff',
          color: '#1990FF',
          border: '2px solid #1990FF',
          _hover: {
            bg: "#e8f3ff",
          }
        }
      }
    },
    Drawer: {
      variants: {
        menu: {
          dialog: {
            pointerEvents: 'auto',
            width: '350px'
          },
          dialogContainer: {
            pointerEvents: 'none',
            width: '350px'
          },
        },
      }
    }
  },
  fonts: {
    body: 'Inter, sans-serif'
  },
  colors: {
    'my-custom' : {
      light: '#28ABE2',
      deep: '#133963',
      'text-85': 'rgba(42, 44, 43, 0.85)',
      'text-60': 'rgba(42, 44, 43, 0.6)'
    }
  },
  sizes: {
    'icon-12': {
      width: '12px',
      height: '12px'
    },
    'icon-16': {
      width: '16px',
      height: '16px'
    },
    'icon-26': {
      width: '26px',
      height: '26px'
    }
  },
  textStyles: {
    '10-medium': {
      fontSize: '10px',
      fontWeight: '500',
      lineHeight: '16px'
    },
    '10-regular': {
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '15px'
    },
    '14-medium': {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '22px'
    },
    '14-regular': {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '22px'
    },
    '16-light': {
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '24px'
    },
    '16-regular': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px'
    },
    '16-bold': {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px'
    },
    '18-light': {
      fontSize: '18px',
      fontWeight: '300',
      lineHeight: '30px'
    },
    '18-regular': {
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '30px'
    },
    '18-semi': {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '26px'
    },
    '20-medium': {
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '28px'
    },
    '20-semi': {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '28px'
    },
    '24-semi': {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '32px'
    },
    '24-bold': {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '32px'
    },
    '36-semi': {
      fontSize: '36px',
      fontWeight: '600',
      lineHeight: '40px'
    },
    '40-semi': {
      fontSize: '40px',
      fontWeight: '600',
      lineHeight: '45px'
    },
    '52-semi': {
      fontSize: '52px',
      fontWeight: '600',
      lineHeight: '60px'
    },
    '56-semi': {
      fontSize: '56px',
      fontWeight: '600',
      lineHeight: '64px'
    },
    '72-semi': {
      fontSize: '72px',
      fontWeight: '600',
      lineHeight: '84px'
    }
  }
};

export default extendTheme(theme);
