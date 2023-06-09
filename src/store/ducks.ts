import { createSlice } from "@reduxjs/toolkit";
import { fetchProject } from "./thunk";
import { Nullable } from "@shared/models/general";
import { Data } from "@pages/Home/containers/Field/FigurItem/models";


interface projectStore {
   data: Nullable<Data>;
   loading: boolean;
   isLoaded: boolean
   error: Nullable<string>

}

const initialState:projectStore = {
    data: null,
    loading:false,
    isLoaded:false,
    error:null
}
const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProject.pending, (state)=> {
      state.loading = true
      state.isLoaded = false
    });
    builder.addCase(fetchProject.fulfilled, (state,action)=> {
      state.data = action.payload
      state.loading = false
      state.isLoaded = true
      state.error = null
    });
    builder.addCase(fetchProject.rejected, (state,action)=> {
      state.loading = false
      state.isLoaded = false
      state.error = action.payload as string
    });
  }
})


export const projectReducer = projectSlice.reducer
