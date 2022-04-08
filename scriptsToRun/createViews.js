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

//****************************************************
//  				EXECUTE COMMANDS
//****************************************************

//iterez peste fiecare obiect din array-ul Pages si creez paginile necesare
let pagesKeys = Object.keys(fileParsed.pages);
pagesKeys.forEach((key) => {
	//trebuie sa creez de la zero pagina de vueJs in baza a ceea ce gasesc in json
	let writeTemplate =
		'<template><Combinations  :components="$projectJSON.pages[$options.name.toLowerCase()].content[0].components"/></template>';

	let writeScript =
		"<script>export default{name:'" +
		fileParsed.pages[key].title +
		"'}</script>";

	let writeToPage = writeTemplate.concat(writeScript);
	if (!fs.existsSync(path.join(pathToAppFolder, "src", "views"))) {
		fs.mkdirSync(path.join(pathToAppFolder, "src", "views"));
	}
	fs.writeFileSync(
		path.join(pathToAppFolder, "src", "views") +
			"\\" +
			fileParsed.pages[key].title +
			".vue",
		writeToPage
	);
});
