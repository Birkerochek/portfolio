'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@shared/lib/useThemeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);
  const initFromSystem = useThemeStore((state) => state.initFromSystem);

  useEffect(() => {
    initFromSystem();
  }, [initFromSystem]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  }, [theme]);

  return <>{children}</>;
}
