export const generateHtml = tree => {
  const htmlBody = generateHtmlBody(tree);
  return `<!DOCTYPE html>
  <html>
  <head>
  <title>Page title</title>
  <link href="./styles.css" rel="stylesheet" />
  </head>
  <body>${htmlBody}
  <script defer src="./script.js" />
  </body>
  </html>`;
};

const generateHtmlBody = tree => {
  if (typeof tree === 'string') return tree;

  const { id, tag, children = [], attributes = {} } = tree;
  const attributesString = generateAttributesString(id, attributes);

  const generatedChildren = children.map(generateHtmlBody).join('');

  return `\n<div>\n<${tag} id="${id}" ${attributesString}>${generatedChildren}</${tag}>\n</div>`;
};

const generateAttributesString = (id, attributes) => {
  return Object.keys(attributes).reduce((acc, attr) => {
    if (attr === 'style') return acc;
    let attrValue = attributes[attr];
    if (attr === 'onclick') attrValue = `${id}()`;
    if (attr === 'disabled' && attrValue == true) return acc + `${attr} `;
    return acc + `${attr}="${attrValue}" `;
  }, '');
};
