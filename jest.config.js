// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   '/node_modules/',
  // ],

  // The test environment that will be used for testing
  // testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   '**/__tests__/**/*.js?(x)',
  //   '**/?(*.)+(spec|test).js?(x)',
  // ],

  // An array of regexp pattern strings that are matched against all test paths,
  // matched tests are skipped
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/__tests__/setup/',
  ],

  // An array of regexp pattern strings that are matched against all source file paths,
  // matched files will skip transformation
  // transformIgnorePatterns: [
  //   '/node_modules/',
  // ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // unmockedModulePathPatterns: [
  //   'node_modules/react/',
  //   'node_modules/enzyme/',
  // ],

  // set up enzyme setup
  setupTestFrameworkScriptFile: '<rootDir>/__tests__/setup/setupTests.js',
};
