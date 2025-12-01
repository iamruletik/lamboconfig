import { defineConfig } from 'vite'
import restart from 'vite-plugin-restart'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({

    server:
            {
                open: false
            },

    build:
            {
                outDir: 'build/',
                emptyOutDir: true,
                sourcemap: true,
            },

    plugins:
            [
                restart({ restart: [ '../**', ] }), // Restart server on static file change
                wasm(),
                topLevelAwait()
            ],

    assetsInclude: ['**/*.hdr'],
})