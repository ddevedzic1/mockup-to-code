export const generateHtml = tree => {
  const htmlBody = generateHtmlBody(tree);
  return `<!DOCTYPE html>
  <html>
  <head>
  <title>Page title</title>
  <link href="styles.css" rel="stylesheet" />
  </head>
  <body>${htmlBody}
  <script src="script.js"></script>
  </body>
  </html>`;
};

const generateHtmlBody = tree => {
  if (typeof tree === 'string') return tree;

  const { id, tag, children = [], attributes = {} } = tree;
  const attributesString = generateAttributesString(id, attributes);

  const generatedChildren = children.map(generateHtmlBody).join('');

  return `\n<div id="${id}_wrapper">\n<${tag} id="${id}" ${attributesString}>${generatedChildren}</${tag}>\n</div>`;
};

const generateAttributesString = (id, attributes) => {
  return Object.keys(attributes).reduce((acc, attr) => {
    if (attr === 'style') return acc;
    if (attr === 'onClick') return acc + `onclick="${id}()" `;
    if (attr === 'disabled' && attributes[attr] == true)
      return acc + 'disabled';
    return acc + `${attr}="${attributes[attr]}" `;
  }, '');
};
