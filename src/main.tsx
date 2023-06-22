import ReactDOM from "react-dom/client";
import { CSSReset, ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/roots.tsx";
import theme from "./theme/theme.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <RouterProvider router={router} />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
