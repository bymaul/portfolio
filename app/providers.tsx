import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
