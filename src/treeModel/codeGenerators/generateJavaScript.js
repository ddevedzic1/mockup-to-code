export const generateJavaScript = tree => {
  if (typeof tree === 'string') return;

  let generatedJavaScript = '';

  const { id, children = [], attributes = {} } = tree;
  const { onclick: onclickAttr = null } = attributes;

  if (onclickAttr) generatedJavaScript += generateFunction(id, onclickAttr);

  return children.reduce((acc, child) => {
    const newJS = generateJavaScript(child);
    if (newJS) return acc + newJS;
    return acc;
  }, generatedJavaScript);
};

const generateFunction = (id, functionBody) => {
  return `function ${id}() {\n${functionBody}\n};\n\n`;
};
