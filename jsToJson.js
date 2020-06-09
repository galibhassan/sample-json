const path = require("path");
const fs = require("fs");

const sampleJson = require("./sample_data");

fs.writeFileSync(path.resolve(__dirname, "sample_data.json"), JSON.stringify(sampleJson, null, 2));
