/* eslint-env node */
const { configure } = require('quasar/wrappers')

module.exports = configure(function (/* ctx */) {
  return {
    boot: ['axios', 'icons'],
    css: ['app.scss'],
    extras: ['roboto-font', 'material-icons'],
    build: {
      env: require('dotenv').config().parsed,
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },
      vueRouterMode: 'history',
      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: {
              tsconfigPath: 'tsconfig.vue-tsc.json',
            },
            eslint: {
              lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"',
            },
          },
          { server: false },
        ],
      ],
    },
    devServer: {
      open: true,
    },
    framework: {
      config: {},
      plugins: ['Notify'],
      autoImportComponentCase: 'pascal',
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render'],
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true,
    },
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},

      builder: {
        appId: 'quasar-project',
      },
    },
    bex: {
      contentScripts: ['my-content-script'],
    },
  }
})
