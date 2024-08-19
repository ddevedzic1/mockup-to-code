import { configureStore } from '@reduxjs/toolkit';

import treeModelReducer from '../treeModel/slices/treeModelSlice';

const store = configureStore({
  reducer: {
    treeModel: treeModelReducer,
  },
});

export default store;
