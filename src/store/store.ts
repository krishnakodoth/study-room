
import { configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import documentReducer from './document-slice';


export const store = configureStore({
  reducer:{
    document:documentReducer
  }
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export type RootState = ReturnType<typeof store.getState>;