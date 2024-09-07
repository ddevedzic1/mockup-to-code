import { nanoid } from 'nanoid';

export const camelToKebab = str => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const generateId = () => {
  return nanoid().replace(/-/g, 'a').replace(/^\d/, 'a');
};
