import ContentTemplate from '@/components/content-template';
import { PropsWithChildren } from 'react';

export default function Template({ children }: PropsWithChildren) {
    return <ContentTemplate>{children}</ContentTemplate>;
}
