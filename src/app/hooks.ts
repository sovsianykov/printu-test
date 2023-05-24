import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { useEffect } from "react";
import { fetchProject } from "../store/thunk";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchProjectById = (id:string) => {
  const dispatch = useAppDispatch()
  useEffect(() =>{
    dispatch(fetchProject(id))
  },[dispatch, id])
}
