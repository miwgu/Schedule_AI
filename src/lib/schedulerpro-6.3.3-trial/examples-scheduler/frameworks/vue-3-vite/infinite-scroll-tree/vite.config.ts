import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins      : [vue()],
    optimizeDeps : {
        include : ['@bryntum/schedulerpro', '@bryntum/schedulerpro-vue-3']
    },
    base  : '',
    build : {
    // Suppress warning for chunk size
        chunkSizeWarningLimit : 10000,

        // Turn warnings into errors
        // https://rollupjs.org/configuration-options/#onlog
        rollupOptions : {
            onLog(level, log, handler) {
                if (level === 'warn') {
                    handler('error', log);
                }
                else {
                    handler(level, log);
                }
            }
        }
    },
    css : {
        preprocessorOptions : {
            scss : {
                silenceDeprecations : [
                    'import',
                    'global-builtin',
                    'color-functions',
                    'legacy-js-api'
                ]
            }
        }
    }

});
