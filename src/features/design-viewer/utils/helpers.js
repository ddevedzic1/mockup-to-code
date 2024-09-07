import { DISABLED_ATTRIBUTES } from './constants';

export const reduceAttributes = attributes => {
  let newAttributes = {};
  Object.keys(attributes).map(attribute => {
    if (!DISABLED_ATTRIBUTES.includes(attribute))
      newAttributes = {
        ...newAttributes,
        [attribute]: attributes[attribute],
      };
  });
  return newAttributes;
};
