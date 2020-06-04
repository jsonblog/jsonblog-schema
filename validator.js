"use strict";
var fs = require("fs");
var ZSchema = require("z-schema");
var schema = require("./schema");

var example = JSON.parse(
  fs.readFileSync(__dirname + "/sample.blog.json", "utf8")
);

function validate(blog, callback) {
  var callbackWrapper = function(err, valid) {
    if (err) {
      callback(err);
    } else {
      callback(null, { valid: valid });
    }
  };

  new ZSchema().validate(blog, schema, callbackWrapper);
}

module.exports = {
  validate: validate,
  schema: schema,
  example: example
};
