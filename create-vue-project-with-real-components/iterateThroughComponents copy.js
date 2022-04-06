var fs = require("fs"),
	path = require("path");
//****************************************************
//  				GET JSON FILE
//****************************************************

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
	fileParsed.projectInformation.appName
);
