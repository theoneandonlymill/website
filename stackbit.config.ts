// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',

  // Visual Editor needs to know how to run your local dev server
  ssgName: 'custom',
  devCommand: 'npm run dev',
  devPort: 3000,

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,

      // Expose your existing content folder(s)
      contentDirs: ['data'],

      // Map the homepage JSON so you can edit it visually right away
      models: [
        {
          name: 'HomePage',
          type: 'page',
          urlPath: '/',
          filePath: 'data/home.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'body', type: 'string' }
          ]
        }
      ],

      // Configure where images are stored & how they’re referenced
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',   // Nuxt serves static files from /public
        uploadDir: 'uploads',  // Editor will save uploads to /public/uploads
        publicPath: '/'        // Public URL base
      }
    })
  ]
});
