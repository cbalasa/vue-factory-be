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
let routes = [];
let importComponents = [];
pagesKeys.forEach((key) => {
	let route = {};
	route.path = key !== "home" ? "/" + key : "/";
	route.name = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
	route.component = [key];
	importComponents.push(
		"import " + route.name + " from '@/views/" + route.name + "'"
	);
	let test =
		"{" +
		"'path':'" +
		route.path +
		"', 'name':'" +
		route.name +
		"','component':" +
		route.name +
		"}";
	routes.push(test);
});

let writeRoutes =
	"const routes=" + JSON.stringify(routes).replace(/"/g, "") + ";";
let writeIntro =
	"import Vue from 'vue';import VueRouter from 'vue-router';Vue.use(VueRouter);" +
	importComponents.join(";") +
	";";

let writeOutro =
	"const router = new VueRouter({mode: 'history',base: process.env.BASE_URL,routes});export default router";

let writeToPage = writeIntro.concat(writeRoutes).concat(writeOutro);

if (!fs.existsSync(path.join(pathToAppFolder, "src", "router"))) {
	fs.mkdirSync(path.join(pathToAppFolder, "src", "router"));
}
fs.writeFileSync(
	path.join(pathToAppFolder, "src", "router", "index.js"),
	writeToPage
);
