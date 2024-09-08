import { camelToKebab } from '../../utils/helpers';
import { generateWrapperStyle } from '../../utils/helpers';

export const generateCss = tree => {
  const generatedCss = generateCssOfAddedElements(tree);
  return `html, body {\n    margin: 0;\n    padding: 0;\n    overflow: hidden\n}\n\n${generatedCss}`;
};

const generateCssOfAddedElements = tree => {
  let generatedCss = '';
  const { id, children = [], attributes = {} } = tree;
  const { style = {} } = attributes;
  if (Object.keys(style).length > 0) {
    const wrapperId = `${id}_wrapper`;
    const wrapperStyle = generateWrapperStyle(style);
    generatedCss += generateCssForOneElement(wrapperId, wrapperStyle);
    generatedCss += generateCssForOneElement(id, style);
  }
  return children.reduce((acc, child) => {
    const newCss = generateCssOfAddedElements(child);
    if (newCss) return acc + newCss;
    return acc;
  }, generatedCss);
};

const generateProperties = style => {
  return Object.keys(style).reduce(
    (acc, property) =>
      acc + `    ${camelToKebab(property)}: ${style[property]};\n`,
    ''
  );
};

const generateCssForOneElement = (id, style) => {
  const properties = generateProperties(style);
  return `#${id} {\n${properties}}\n\n`;
};
