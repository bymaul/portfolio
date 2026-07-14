import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
    ;
}