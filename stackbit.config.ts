// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  // The Visual Editor will open your running dev server during editing.
  // Nuxt runs on http://localhost:3000 by default.
  ssgName: 'custom',
  devCommand: 'npm run dev',
  devPort: 3000,

  contentSources: [
    new GitContentSource({
      // Root of repo
      rootPath: __dirname,

      // Tell the editor where your content files live.
      // You can expand this later to include Markdown/JSON files.
      contentDirs: ['data'],

      // Minimal “Page” model so you can extend later.
      // If you later move content into JSON/MD files, define them here.
      models: [
        {
          name: 'Page',
          type: 'page',
          // The URL path pattern for pages generated from files
          urlPath: '/{slug}',
          // Example JSON location (adjust to your actual file naming)
          filePath: 'data/pages/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'body', type: 'string', required: false }
          ]
        }
      ],

      // Where images are stored/served
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',   // Nuxt serves static files from /public
        uploadDir: 'uploads',  // Editor will save uploads to /public/uploads
        publicPath: '/'        // Public URL base
      }
    })
  ]
});
