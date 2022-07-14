import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-bib-prototype-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    }
  ],
};
