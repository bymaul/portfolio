import Content from '@/components/content';

export default function Template({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <Content>{children}</Content>;
}
