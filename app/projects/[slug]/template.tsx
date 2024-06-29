import Content from '@/components/template/content';
import { PropsWithChildren } from 'react';

export default function Template({ children }: PropsWithChildren) {
    return <Content>{children}</Content>;
}
