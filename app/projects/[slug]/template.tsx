import Content from '@/components/content';
import { PropsWithChildren } from 'react';

export default function Template({ children }: PropsWithChildren) {
    return <Content>{children}</Content>;
}
