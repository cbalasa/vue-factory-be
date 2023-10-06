const { execSync } = require("child_process");

execSync(
	"node ./create-vue-project-with-real-components/iterateThroughComponents.js",
	{
		stdio: "inherit"
	}
);

execSync("node ./create-vue-project-with-real-components/createNewApp.js", {
	stdio: "inherit"
});
execSync(
	"node ./create-vue-project-with-real-components/installNodeModules.js",
	{
		stdio: "inherit"
	}
);
execSync("node ./create-vue-project-with-real-components/createViews.js", {
	stdio: "inherit"
});
execSync("node ./create-vue-project-with-real-components/createRouter.js", {
	stdio: "inherit"
});
execSync(
	"node ./create-vue-project-with-real-components/copyJsonToNewWebApp.js",
	{
		stdio: "inherit"
	}
);

execSync("node ./create-vue-project-with-real-components/openInVs.js", {
	stdio: "inherit"
});
