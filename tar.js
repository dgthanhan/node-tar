
// exports.Pack = require("./lib/pack.js")
exports.parse = require("./lib/parse.js")
exports.extract = require("./lib/extract.js")
const fieldInfo = require('./lib/field-info.js')
for (let i in fieldInfo) {
  exports[i] = fieldInfo[i]
}
