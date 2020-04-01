import * as fs from "fs";

var g = global as any;

g.app = {};
g.EnvInfo = {};
g._ = {
  has: function() {
    return false;
  },
  extend: function() {}
};

require("../data/policies.js");

fs.writeFileSync(
  "data/app.json",
  JSON.stringify(g.app.PolicyEditorConfig.serviceMap, null, 2)
);
