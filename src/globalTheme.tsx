import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    semanticTokens: {
      color: {
        error: 'red.500',
        text: {
          default: 'red.900',
          _dark: 'gray.50',
        }
      }
    }
  })