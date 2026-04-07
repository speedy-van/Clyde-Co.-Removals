"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { system } from "@/lib/theme";

export interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  );
}
