'use client';

import { useEffect, useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export default function Template({ children }: Props) {
    const [transitionStage, setTransitionStage] = useState(false);

    useEffect(() => {
        setTransitionStage(true);
    }, [setTransitionStage]);

    return (
        <div
            className={`transition duration-300 ${
                transitionStage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            {children}
        </div>
    );
}
