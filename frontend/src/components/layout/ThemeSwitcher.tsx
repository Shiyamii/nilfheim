// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <Button
        onClick={() =>
          theme == 'light' ? setTheme('dark') : setTheme('light')
        }>
        {theme == 'light' ? 'Light mode' : 'Dark mode'}
      </Button>
    </div>
  );
}
