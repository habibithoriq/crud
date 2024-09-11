import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],

{
  "resources/js/app.js":{
  "file": "assets/app.d225c007.js",
  "src": "rsources/js/app.js",
  "isEntry": true
  },

  "resources/css\app.css":{
  "file": "assets/app.ac31adfe.css",
  "src":"resources/css\app.css"
 }
}
 


            refresh: true,
        }),
    ],
});
