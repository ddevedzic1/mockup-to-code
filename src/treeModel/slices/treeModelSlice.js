import { createSlice } from '@reduxjs/toolkit';

const initialState = createInitialState();

const treeModelSlice = createSlice({
  name: 'treeModel',
  initialState,
  reducers: {
    setActiveElementId(state, action) {
      state.activeElementId = action.payload;
    },
    setHoveredElementId(state, action) {
      state.hoveredElementId = action.payload;
    },
  },
});

export const { setActiveElementId, setHoveredElementId } =
  treeModelSlice.actions;

export default treeModelSlice.reducer;

export const getTree = state => state.treeModel.tree;
export const getActiveElementId = state => state.treeModel.activeElementId;
export const getHoveredElementId = state => state.treeModel.hoveredElementId;

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
  };
}
