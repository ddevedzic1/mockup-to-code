import { createSlice } from '@reduxjs/toolkit';

import {
  getElementById,
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
    addElement(state, action) {
      addDataToHistory(state);
      const {
        parentId = 'rootElement',
        element,
        sibling = {},
      } = action.payload;
      const parentElement = getElementById(state.tree, parentId);
      const parentChildren = parentElement?.children ?? [];
      let index = parentChildren.length;
      if (sibling.id)
        index = parentChildren.findIndex(child => child?.id === sibling.id);
      if (sibling?.edge === 'right') index++;
      const newChildren = [
        ...parentChildren.slice(0, index),
        element,
        ...parentChildren.slice(index),
      ];
      parentElement.children = newChildren;
      if (element?.id) {
        state.activeElementId = element.id;
      }
    },
    deleteElement(state, action) {
      const elementId = action.payload ?? state.activeElementId;
      if (elementId === 'rootElement') return;
      const parentElement = getParentById(state.tree, elementId);
      if (!parentElement || !parentElement?.children) return;
      addDataToHistory(state);
      const parentNewChildren = parentElement.children.filter(
        child => child?.id !== elementId
      );
      parentElement.children = parentNewChildren;
      if (state.activeElementId === elementId)
        state.activeElementId = 'rootElement';
    },
    changeElementAttribute(state, action) {
      const {
        elementId = state.activeElementId,
        attributeKey,
        attributeValue,
      } = action.payload;
      const element = getElementById(state.tree, elementId);
      if (!element) return;
      addDataToHistory(state);
      element['attributes'] = {
        ...element['attributes'],
        [attributeKey]: attributeValue,
      };
    },
    changeElementContent(state, action) {
      const { elementId = state.activeElementId, content } = action.payload;
      const element = getElementById(state.tree, elementId);
      if (!element) return;
      addDataToHistory(state);
      element.children = [content];
    },
    moveElement(state, action) {
      const {
        oldParentId,
        newParentId,
        elementId,
        sibling = {},
      } = action.payload;

      if (elementId === 'rootElement') return;

      let elements, oldParentElement;

      if (!oldParentId) {
        const ids = [newParentId, elementId];
        elements = getElementsByIds(state.tree, ids);
        oldParentElement = getParentById(state.tree, elementId);
      } else {
        const ids = [oldParentId, newParentId, elementId];
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
  addElement,
  deleteElement,
  changeElementAttribute,
  changeElementContent,
  moveElement,
} = treeModelSlice.actions;

export default treeModelSlice.reducer;

export const getTree = state => state.treeModel.tree;
export const getActiveElementId = state => state.treeModel.activeElementId;
export const getHoveredElementId = state => state.treeModel.hoveredElementId;
export const hasPast = state => state.treeModel.past.length === 0;
export const hasFuture = state => state.treeModel.future.length === 0;
export const getActiveElement = state =>
  getElementById(state.treeModel.tree, state.treeModel.activeElementId);
export const findElementById = id => state =>
  getElementById(state.treeModel.tree, id);

function createInitialState() {
  const tree = {
    id: 'rootElement',
    internalTag: 'rootElement',
    internalTitle: 'Root',
    tag: 'div',
    attributes: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '460px',
        height: '600px',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        paddingTop: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        paddingRight: '0',
        fontFamily: 'Times New Roman, serif',
        fontSize: '16px',
        lineHeight: '1.2',
        backgroundColor: '#FFFFFF',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      },
    },
    children: [],
  };

  return {
    tree,
    activeElementId: 'rootElement',
    hoveredElementId: null,
    past: [],
    future: [],
  };
}
