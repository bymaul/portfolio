import React from 'react';
import { BiSolidXCircle } from 'react-icons/bi';

export default function NotFound() {
    return (
        <main className='max-w-screen-md mx-auto px-4 py-28'>
            <section className='text-4xl font-semibold flex flex-col items-center gap-4 justify-center'>
                <BiSolidXCircle />
                <h1>Error, No Found</h1>
            </section>
        </main>
    );
}
