import { createAsyncThunk } from "@reduxjs/toolkit";
import { projectService } from "../services/project";


export const fetchProject = createAsyncThunk(
  'project/fetchProject',
  async (id:string,{rejectWithValue})=>{
    try {
      const response = await projectService.getProject(`${id}`)
      if (response.status !== 200) {
        throw new Error("Something vent wrong!!!")
      }
      return response.data

    } catch (e) {
      const error = e as Error
      console.log(error.message);
      return   rejectWithValue(error.message)
    }
  }
)
