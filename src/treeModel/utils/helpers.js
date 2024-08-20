import _ from 'lodash';

import { HISTORY_LIMIT } from './constants';

export const getElementById = (tree, id) => {
  if (tree?.id === id) return tree;
  const children = tree?.children ?? [];
  return children.slice().reduce((acc, child, _, arr) => {
    acc = getElementById(child, id);
    if (acc) arr.splice(1);
    return acc;
  }, null);
};

export const getParentById = (tree, id) => {
  const children = tree?.children ?? [];
  return children.slice().reduce((_, child, __, arr) => {
    if (child?.id === id) {
      arr.splice(1);
      return tree;
    }
    const parent = getParentById(child, id);
    if (parent) {
      arr.splice(1);
      return parent;
    }
  }, null);
};

export const getElementsByIds = (tree, ids) => {
  const elements = {};
  if (ids.includes(tree?.id)) elements[tree.id] = tree;
  const children = tree?.children ?? [];
  return children.slice().reduce((acc, child) => {
    const newElements = getElementsByIds(child, ids);
    return { ...acc, ...newElements };
  }, elements);
};

export const addDataToHistory = (
  state,
  type = 'past',
  isUndoRedoAction = false
) => {
  state[type].push({
    tree: _.cloneDeep(state.tree),
    activeElementId: state.activeElementId,
  });
  if (!isUndoRedoAction) state.future = [];
  if (state[type].length > HISTORY_LIMIT) state[type].shift();
};

export const getDataFromHistory = (state, type = 'past') => {
  const data = state[type].pop();
  state.tree = data.tree;
  state.activeElementId = data.activeElementId;
  state.hoveredElementId = null;
};
