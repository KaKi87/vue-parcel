const
	path = require('path'),
	Parcel = require('parcel-bundler'),
	port = 5492;

new Parcel(path.join(__dirname, './index.html')).serve(port);