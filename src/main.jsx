import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from './integrations/supabase/index.js';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  accent: {
    500: "#38B2AC",
    600: "#319795",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseProvider>
        <App />
      </SupabaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);