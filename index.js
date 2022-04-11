const { execSync } = require("child_process");

let createProjectWithRealComponents = true;

execSync(
	"node ./create-vue-project-with-real-components/iterateThroughComponents.js",
	{
		stdio: "inherit"
	}
);

execSync("node ./create-vue-project-with-real-components/createNewApp.js", {
	stdio: "inherit"
});
// console.log("am creat app");
execSync(
	"node ./create-vue-project-with-real-components/installNodeModules.js",
	{
		stdio: "inherit"
	}
);
// console.log("am instalat librariile");
execSync("node ./create-vue-project-with-real-components/createViews.js", {
	stdio: "inherit"
});
console.log("am creat paginile");
execSync("node ./create-vue-project-with-real-components/createRouter.js", {
	stdio: "inherit"
});
console.log("am creat rutele");
execSync(
	"node ./create-vue-project-with-real-components/copyJsonToNewWebApp.js",
	{
		stdio: "inherit"
	}
);

execSync("node ./create-vue-project-with-real-components/openInVs.js", {
	stdio: "inherit"
});
// console.log("am terminat");

// execSync("node ./scriptsToRun/createNewApp.js");
// console.log("am creat app");
// execSync("node ./scriptsToRun/installNodeModules.js");
// console.log("am instalat librariile");
// execSync("node ./scriptsToRun/createViews.js");
// console.log("am creat paginile");
// execSync("node ./scriptsToRun/createRouter.js");
// console.log("am creat rutele");
// execSync("node ./scriptsToRun/copyJsonToNewWebApp.js");
// console.log("am terminat");
