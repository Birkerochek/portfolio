import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Theme = 'dark' | 'light';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initFromSystem: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      initFromSystem: () => {
        if (typeof window === 'undefined') return;
        const stored = localStorage.getItem('theme');
        if (stored) return;
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        set({ theme: prefersDark ? 'dark' : 'light' });
      },
    }),
    {
      name: 'theme',
      version: 1,
      storage:
        typeof window !== 'undefined'
          ? createJSONStorage(() => localStorage)
          : undefined,
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
