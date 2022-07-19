import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

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
      type: 'dist-custom-elements',
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
      componentCorePackage: '@insabelter/component-library-stencil/dist/components',
      directivesProxyFile: '../website-prototype-stencil-angular/projects/component-library/src/lib/stencil-generated/proxies.ts',
      directivesArrayFile: '../website-prototype-stencil-angular/projects/component-library/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    })
  ],
};
