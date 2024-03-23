
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // Import thêm combineReducers
import cartReducer from './cart'; // Điều chỉnh đường dẫn nếu cần

const rootReducer = combineReducers({
  cartReducer,

});


const store = configureStore({
  reducer: rootReducer,

});

export default store;
