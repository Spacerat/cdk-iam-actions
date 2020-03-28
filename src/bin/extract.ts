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

require("./policies.js");

fs.writeFileSync(
  "bin/app.json",
  JSON.stringify(g.app.PolicyEditorConfig.serviceMap, null, 2)
);
