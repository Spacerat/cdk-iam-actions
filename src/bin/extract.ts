import * as fs from "fs";

// Set up the global JS environment for policies.js
var g = global as any;

g.app = {};
g.EnvInfo = {};
g._ = {
  has: function() {
    return false;
  },
  extend: function() {}
};

// Import (and run) the policies.js file downloaded from AWS
require("../data/policies.js");

// Extract the policy data into a JSON file.
fs.writeFileSync(
  "data/app.json",
  JSON.stringify(g.app.PolicyEditorConfig.serviceMap, null, 2)
);
