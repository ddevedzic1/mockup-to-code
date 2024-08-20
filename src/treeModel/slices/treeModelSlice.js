import { createSlice } from '@reduxjs/toolkit';

import {
  getParentById,
  getElementsByIds,
  addDataToHistory,
  getDataFromHistory,
} from '../utils/helpers';

const initialState = createInitialState();

const treeModelSlice = createSlice({
  name: 'treeModel',
  initialState,
  reducers: {
    undoRedo(state, action) {
      const type = action.payload;
      const options = {
        undo: { getDataFrom: 'past', addDataTo: 'future' },
        redo: { getDataFrom: 'future', addDataTo: 'past' },
      };
      const { getDataFrom, addDataTo } = options[type];
      if (state[getDataFrom].length > 0) {
        addDataToHistory(state, addDataTo, true);
        getDataFromHistory(state, getDataFrom);
      }
    },
    setActiveElementId(state, action) {
      state.activeElementId = action.payload;
    },
    setHoveredElementId(state, action) {
      state.hoveredElementId = action.payload;
    },
    moveElement(state, action) {
      const {
        oldParentId,
        newParentId,
        elementId,
        sibling = {},
      } = action.payload;

      let ids, elements, oldParentElement;

      if (!oldParentId) {
        ids = [newParentId, elementId];
        elements = getElementsByIds(state.tree, ids);
        oldParentElement = getParentById(state.tree, elementId);
      } else {
        ids = [oldParentId, newParentId, elementId];
        elements = getElementsByIds(state.tree, ids);
        oldParentElement = elements[oldParentId];
      }

      const newParentElement = elements[newParentId];
      const element = elements[elementId];

      if ([oldParentElement, newParentElement, element].some(e => !e)) return;

      addDataToHistory(state);

      oldParentElement.children = oldParentElement.children.filter(
        child => child?.id !== elementId
      );

      const newParentChildren = newParentElement.children;
      let index = newParentChildren.length;
      if (sibling.id)
        index = newParentChildren.findIndex(child => child?.id === sibling.id);
      if (sibling?.edge === 'right') index++;
      const newChildren = [
        ...newParentChildren.slice(0, index),
        element,
        ...newParentChildren.slice(index),
      ];
      newParentElement.children = newChildren;
    },
  },
});

export const {
  undoRedo,
  setActiveElementId,
  setHoveredElementId,
  moveElement,
} = treeModelSlice.actions;

export default treeModelSlice.reducer;

export const getTree = state => state.treeModel.tree;
export const getActiveElementId = state => state.treeModel.activeElementId;
export const getHoveredElementId = state => state.treeModel.hoveredElementId;
export const hasPast = state => state.treeModel.past.length === 0;
export const hasFuture = state => state.treeModel.future.length === 0;

function createInitialState() {
  const tree = {
    id: 'rootElement',
    tag: 'div',
    attributes: {
      style: {
        width: '460px',
        height: '600px',
        overflow: 'auto',
      },
    },
    children: [
      {
        id: 'firstChild',
        tag: 'div',
        attributes: {
          style: {
            width: '100px',
            height: '100px',
          },
        },
        children: [
          {
            id: '1',
            tag: 'input',
            attributes: {
              style: {
                backgroundColor: 'gray',
              },
            },
            children: [],
          },
          {
            id: '2',
            tag: 'button',
            attributes: {
              style: {
                backgroundColor: 'gray',
                marginLeft: '20px',
                marginTop: '20px',
              },
            },
            children: ['Click 2'],
          },
        ],
      },
    ],
  };

  return {
    tree,
    activeElementId: 'rootElement',
    hoveredElementId: null,
    past: [],
    future: [],
  };
}
