import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
};

const colors = {
  gray: {
    900: '#252525',
    800: '#3a3a3a',
    700: '#505050',
    600: '#666666',
    500: '#7c7c7c',
    400: '#929292',
    300: '#a7a7a7',
    200: '#dbdbdb',
    100: '#d3d3d3',
  },
  textColor: {
    light: '#d5d5d5',
    medium: '#929292',
    dark: '#252525',
  },
};

const styles = {
  global: {
    body: {
      bg: 'gray.900',
      color: 'textColor.light',
      height: '100%',
      overflow: 'hidden',
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      _hover: {
        bgColor: 'gray.800',
      },
      _focus: {
        bgColor: 'gray.800',
      },
    },
    variants: {
      base: {
        field: {
          bgColor: 'transparent',
          color: 'textColor.light',
          borderRadius: 'sm',
        },
      },
    },
    defaultProps: {
      size: 'xs',
      variant: 'base',
    },
  },
  Input: {
    variants: {
      outline: {
        field: {
          borderColor: 'gray.700',
          borderRadius: 'md',
          _focus: {
            borderColor: 'gray.300',
          },
          _hover: {
            borderColor: 'gray.300',
          },
        },
      },
    },
    defaultProps: {
      size: 'xs',
      variant: 'outline',
    },
  },
  Select: {
    variants: {
      outline: {
        field: {
          borderColor: 'gray.700',
          borderRadius: 'md',
          _focus: {
            borderColor: 'gray.300',
          },
          _hover: {
            borderColor: 'gray.300',
          },
        },
        icon: {
          fontSize: 'xs',
        },
      },
    },
    defaultProps: {
      size: 'xs',
      variant: 'outline',
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
});

export default theme;
