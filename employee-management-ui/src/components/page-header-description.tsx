import React from "react";

export function PageHeaderDescription({ text }: { text: string }) {
    return (
        <p className="mt-2 text-sm text-muted-foreground">
            {text}
        </p>
    );
}
