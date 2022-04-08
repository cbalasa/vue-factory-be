var fs = require("fs"),
	path = require("path");
const { execSync } = require("child_process");

//get current folder
let currentFolder = path.join(__dirname);
//get one up folder path
let folderOutsideScriptsToRun = path.join(
	currentFolder
		.split("\\")
		.slice(0, currentFolder.split("\\").length - 1)
		.join("\\")
);

//get json file project.json
let rawdata = fs.readFileSync(folderOutsideScriptsToRun + "/project.json");
let fileParsed = JSON.parse(rawdata);

//get path to app folder
let pathToAppFolder = path.join(
	folderOutsideScriptsToRun,
	"vue-apps-created",
	fileParsed.projectInformation.appName
);

// execSync(" start  http://localhost:8080/about", { stdio: "inherit" });

// execSync(
// 	"cd vue-apps-created && cd " +
// 		fileParsed.projectInformation.appName +
// 		"  && npm run serve ",
// 	{ stdio: "inherit" }
// );
execSync(
	"cd vue-apps-created && cd " +
		fileParsed.projectInformation.appName +
		"  && code .",
	{ stdio: "inherit" }
);
