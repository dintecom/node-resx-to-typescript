import { build } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';
import { copy } from 'esbuild-plugin-copy';

build({
    entryPoints: ['./src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    sourcemap: false,
    platform: 'node',
    target: 'node22',
    plugins: [
        clean({
            patterns: ['./dist/*'],
        }),
        copy({
            assets: {
                from: ['./README.md'],
                to: ['./README.md'],
            },
        }),
        copy({
            assets: {
                from: ['./LICENSE'],
                to: ['.'],
            },
        }),
        copy({
            assets: {
                from: ['./assets/package.json'],
                to: ['.'],
            },
        }),
    ],
});
