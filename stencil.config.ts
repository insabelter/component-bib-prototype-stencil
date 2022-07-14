import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';

export const config: Config = {
  namespace: 'component-bib-prototype-stencil',
  globalStyle: 'src/global/styles.css',
  plugins: [
    //  postcss({
    //    plugins: [
    //      require('postcss-import'),
    //      require('postcss-url')([{
    //          url: 'rebase',
    //          assetsPath: '.'
    //      },
    //      {
    //        url: 'copy',
    //        basePath:'',
    //        assetsPath: '../../../dist/component-bib-prototype-stencil/',
    //        useHash: false
    //      }])
    //    ]
    //  })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy:[
        {
          src: '**/*.woff2',
          dest: 'files',
          warn: true,
        }
      ]
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
