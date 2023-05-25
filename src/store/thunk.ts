import { createAsyncThunk } from "@reduxjs/toolkit";
import { projectService } from "../services/project";

export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async (id: string, { rejectWithValue }) => {
    let projectTD = "";
    try {
      if (!id) {
        const initResponse = await projectService.getProject("/init");
        projectTD = await initResponse.data.id;
      } else {
        projectTD = id;
      }

      const response = await projectService.getProject(`/project/${projectTD}`);
      if (response.status !== 200) {
        throw new Error("Something vent wrong!!!");
      }
      return response.data;
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
