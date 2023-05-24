const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.path.json');

module.exports = {
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),

    }
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};
