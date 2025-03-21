/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.webp' {
    const value: string;
    export default value;
}

declare module 'astro:assets' {
    interface ImageMetadata {
        src: string;
        width: number;
        height: number;
        format: string;
    }

    interface LocalImageProps {
        src: string | ImageMetadata;
        alt: string;
        width?: number;
        height?: number;
        loading?: 'lazy' | 'eager';
        decoding?: 'async' | 'sync' | 'auto';
    }

    export function Image(props: LocalImageProps): any;
}
