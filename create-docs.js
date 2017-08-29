const jsdoc2md = require('jsdoc-to-markdown'); // eslint-disable-line
const fs = require('fs');
const path = require('path');

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({
  files: './lib/endpoints/*.js',
  separators: true
});

/* reduce templateData to an array of class names */
const classNames = templateData.reduce((classNames, identifier) => { // eslint-disable-line
  if (identifier.kind === 'class') classNames.push(identifier.name);
  return classNames;
}, []);

/* create a documentation file for each class */
for (const className of classNames) { // eslint-disable-line
  const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`;
  console.log(`rendering ${className}, template: ${template}`);
  const output = jsdoc2md.renderSync({ data: templateData, template, separators: true });
  fs.writeFileSync(path.resolve('./docs', `${className}.md`), output);
}
