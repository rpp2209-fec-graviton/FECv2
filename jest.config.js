/** @type {import('jest').Config} */
const config = {
  "moduleNameMapper": {
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/testSetupFile.js']

};
module.exports = config;