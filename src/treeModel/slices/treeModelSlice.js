import { createSlice } from '@reduxjs/toolkit';

const initialState = createInitialState();

const treeModelSlice = createSlice({
  name: 'treeModel',
  initialState,
  reducers: {},
});

export default treeModelSlice.reducer;

export const getTree = state => state.treeModel.tree;

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
  };
}
