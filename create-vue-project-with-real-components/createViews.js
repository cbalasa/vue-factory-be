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
	"vue-apps-created",
	fileParsed.projectInformation.appName
);

//****************************************************
//  				EXECUTE COMMANDS
//****************************************************

//iterez peste fiecare obiect din array-ul Pages si creez paginile necesare
let pagesKeys = Object.keys(fileParsed.pages);
pagesKeys.forEach((key) => {
	//trebuie sa creez de la zero pagina de vueJs in baza a ceea ce gasesc in json
	// let writeTemplate =
	// 	'<template><Combinations  :components="$projectJSON.pages[$options.name.toLowerCase()].content[0].components"/></template>';

	// let writeScript =
	// 	"<script>export default{name:'" +
	// 	fileParsed.pages[key].title +
	// 	"'}</script>";

	// let writeToPage = writeTemplate.concat(writeScript);

	let slot = [];

	const writeAllComponentsToTemplate = (components) => {
		components.forEach((component, index) => {
			if (
				component.hasOwnProperty("type") &&
				component.type !== "Combinations"
			) {
				slot.push("<" + component.type);
			}
			if (component.hasOwnProperty("props")) {
				let keys = Object.keys(component.props);
				if (keys.includes("components")) {
					keys = keys.filter((key) => key !== "components");
					keys.push("components");
				}
				for (let i = 0; i < keys.length; i++) {
					if (keys[i] !== "components" && keys[i] !== "template") {
						if (typeof component.props[keys[i]] == "number") {
							console.log(keys, component.props.text);

							slot.push(":" + keys[i] + "='" + component.props[keys[i]] + "'");
						} else if (
							component.props[keys[i]] == "false" ||
							component.props[keys[i]] == "true" ||
							component.props[keys[i]] == "this.$options.name"
						) {
							slot.push(":" + keys[i] + "='" + component.props[keys[i]] + "'");
						} else {
							slot.push(keys[i] + "='" + component.props[keys[i]] + "'");
						}
					} else if (keys[i] == "components" && i == keys.length - 1) {
						if (component.type !== "Combinations") {
							slot.push(">");
						}

						writeAllComponentsToTemplate(component.props[keys[i]]);
					} else if (keys[i] == "template" && i == keys.length - 1) {
						slot.push(">");
						component.props[keys[i]].forEach((templ) => {
							slot.push("<template " + templ.name + ">");
							writeAllComponentsToTemplate(templ.components);
							slot.push("</template>");
						});
					}
					if (
						!keys.includes("components") &&
						i == keys.length - 1 &&
						!keys.includes("template")
					) {
						slot.push(">");
					}
				}
			} else {
				slot.push(">");
			}
			if (
				component.hasOwnProperty("type") &&
				component.type !== "Combinations"
			) {
				slot.push("</" + component.type + ">");
			}
		});
	};
	writeAllComponentsToTemplate(fileParsed.pages[key].components);
	let writeTemplate = "<template>" + slot.join(" ") + "</template>";
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
