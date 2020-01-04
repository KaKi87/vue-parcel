const
	path = require('path'),
	Parcel = require('@parcel/core').default,
	port = 5492;

new Parcel({
	entries: path.join(__dirname, './index.html'),
	defaultConfig: {
		filePath: require.resolve('@parcel/config-default'),
		extends: '@parcel/config-default'
	},
	serve: {
		host: 'localhost',
		port,
		https: false
	}
}).run();

/*
Server running at http://localhost:5492
√ Built in 7.01s.
× console: (node:7944) UnhandledPromiseRejectionWarning: AssertionError [ERRASSERTION]: The expression evaluated to a falsy value:

  (0, assert.default)(server != null)

    at Object.report (D:\Documents\GitHub\vue-parcel\nodemodules\@parcel\reporter-dev-server\lib\ServerReporter.js:70:29)
    at ReporterRunner.report (D:\Documents\GitHub\vue-parcel\nodemodules\@parcel\core\lib\ReporterRunner.js:69:31)
    at process.tickCallback (internal/process/nexttick.js:68:7)
× console: (node:7944) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
× console: (node:7944) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
*/