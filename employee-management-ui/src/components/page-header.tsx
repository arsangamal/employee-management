import React from 'react';
export function PageHeader({ text }: { text: string }) {
    return (
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight text-balance">
            {text}
        </h1>
    )
}