const path = require("path");
const fs = require("fs");

let currentFolder = path.join(__dirname);

//get to Components
let componentsFolder = path.join(
	currentFolder
		.split("\\")
		.slice(0, currentFolder.split("\\").length - 1)
		.join("\\"),
	"components"
);

let components = [];

const recursiveModules = (folder) => {
	fs.readdirSync(folder, function (err, files) {
		if (err) {
			console.log(err);
			return;
		}

		files.forEach(function (file, index) {
			fs.stat(path.join(folder, file), function (err, stat) {
				if (err) {
					console.log(err);
					return;
				}

				if (stat.isFile()) {
					components.push(file);
				} else {
					recursiveModules(path.join(folder, file));
				}
			});
		});
	});
};

recursiveModules(componentsFolder);

console.log(components);
