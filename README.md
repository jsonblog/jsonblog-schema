# JSON Blog Schema

Standard, Specification, Schema

### Gitter

Everyone working on the early stages of the project should join our gitter channel [gitter.im/jsonblog/public](https://gitter.im/jsonblog/public).

### Getting started

```
npm install --save jsonblog-schema
```

To use

```js
var blogSchema = require("jsonblog-schema");
blogSchema.validate({ site: { title: "My BLog" } }, function(err, report) {
  if (err) {
    console.error("The blog.json was invalid:", err);
    return;
  }
  console.log("blog.json validated successfully:", report);
});
```

The JSON Blog schema is available from:

```js
require("jsonblog-schema").schema;
```

### Contribute

We encourage anyone who's interested in participating in the formation of this standard, to join us on Gitter, and/or to join the discussions [here on GitHub](https://github.com/jsonblog/jsonblog-schema/issues). Also feel free to fork this project and submit new ideas to add to the JSON Blog Schema standard.

### Versioning

JSON Resume Schema adheres to Semantic Versioning 2.0.0. If there is a violation of
this scheme, report it as a bug. Specifically, if a patch or minor version is
released and breaks backward compatibility, that version should be immediately
yanked and/or a new version should be immediately released that restores
compatibility. Any change that breaks the public API will only be introduced at
a major-version release. As a result of this policy, you can (and should)
specify any dependency on JSON Resume Schema by using the Pessimistic Version
Constraint with two digits of precision.
