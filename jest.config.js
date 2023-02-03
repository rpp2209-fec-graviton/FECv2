/** @type {import('jest').Config} */
const config = {
	"moduleNameMapper": {
		"\\.(scss|sass|css)$": "identity-obj-proxy"
	},
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
	setupFiles: [
		"<rootDir>/setupTests.js"
	],
};
module.exports = config;