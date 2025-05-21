"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Обёртка для ThemeProvider из next-themes.
 * Позволяет управлять темой приложения: light / dark / system.
 *
 * Использование:
 * <ThemeProvider
 *   attribute="class"
 *   defaultTheme="system"
 *   enableSystem
 *   disableTransitionOnChange
 * >
 *   {children}
 * </ThemeProvider>
 */
export function ThemeProvider({
  children,
  ...rest
}: ThemeProviderProps) {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
}
