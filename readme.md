# Prototype of a Stencil component library

This project is part of my bachelor thesis with the topic of defining the best suited web technology for implementing a company intern component library as part of a design system. In order to do so, three component library prototypes are implemented along with test websites to use the implemented components. 

Here is an overview of the software parts of this bachelor thesis:
![Prototypes_English](https://user-images.githubusercontent.com/54104208/185070168-6168f409-8279-4287-a2ad-0d13eb6c5dc5.png)

This project represents the **Stencil component library prototype**.

The links to all the parts of the bachelor thesis are listed below.

## Serve test website

This project includes a test webseite to test the components of the library locally.
Run `npm start` to start a dev server which serves this website locally, then navigate to `http://localhost:3333/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the component library. The build artifacts will be stored in the `dist` directory. 

## Import with npm

The directory `dist` is also the root of the npm package which is built from this project in order to publish the component library to another appilcation. The package is public and can be imported by running `npm install @insabelter/component-library-stencil`

## Links to other repositories
### Prototypes:
- Angular: https://github.com/insabelter/component-bib-prototype-angular
- *Stencil: https://github.com/insabelter/component-bib-prototype-stencil*
- Vue.js: https://github.com/insabelter/component-bib-prototype-vue
### Test Websites:
- Based on Angular prototype: https://github.com/insabelter/website-prototype-angular
- Based on Stencil prototype in "Vanilla TS" (using webpack): https://github.com/insabelter/website-prototype-stencil-vanilla
- Based on Stencil prototype in Angular: https://github.com/insabelter/website-prototype-stencil-angular
- Based on Vue.js prototype: https://github.com/insabelter/website-prototype-vue
