import { nanoid } from 'nanoid';

export const camelToKebab = str => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const generateId = () => {
  return nanoid().replace(/-/g, 'a').replace(/^\d/, 'a');
};

export const generateWrapperStyle = (elementStyle, ownStyle = {}) => {
  const {
    width = null,
    height = null,
    maxWidth = null,
    maxHeight = null,
    minWidth = null,
    minHeight = null,
  } = elementStyle;
  return {
    margin: '0',
    padding: '0',
    width: width === '100%' ? '100%' : 'max-content',
    height: height === '100%' ? '100%' : 'max-content',
    maxWidth: maxWidth ?? 'auto',
    minWidth: minWidth ?? 'auto',
    maxHeight: maxHeight ?? 'auto',
    minHeight: minHeight ?? 'auto',
    display: 'block',
    ...ownStyle,
  };
};

export const getIndexes = length => Array.from({ length }, (_, i) => i);
