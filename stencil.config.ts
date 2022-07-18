import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'component-bib-prototype-stencil',
  globalStyle: 'src/global/styles.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy:[
        {
          src: '../node_modules/@fontsource/raleway/files/*-wghtOnly-normal.woff2',
          dest: 'files',
          warn: true,
        }
      ]
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy:[
        {
          src: '../node_modules/@fontsource/raleway/files/*-wghtOnly-normal.woff2',
          dest: 'build/files',
          warn: true,
        }
      ]
    },
    angularOutputTarget({
      componentCorePackage: 'component-bib-prototype-stencil',
      directivesProxyFile: 'dist/angular-wrappers/components.ts',
      directivesArrayFile: 'dist/angular-wrappers/index.ts',
    })
  ],
};
