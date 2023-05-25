import React from "react";
import {
  DataHolder,
  ProjectID,
  ProjectName,
  Root,
} from "@pages/Home/components/SubHeading/SubHeading.styles";
import { Box, LinearProgress } from "@mui/material";
import { useAppSelector } from "@app/hooks";

const SubHeading = () => {
  const { data, loading, error } = useAppSelector((state) => state.project);

  return (
    <>
      {loading && !error ? (
        <LinearProgress />
      ) : (
        <Root>
          <DataHolder>
            <Box width="400px" height="20px" display="flex">
              Name: <ProjectName> {data?.project.name}</ProjectName>
            </Box>
            <Box width="400px" height="20px" display="flex">
              ID: <ProjectID>{data?.id} </ProjectID>
            </Box>
          </DataHolder>
        </Root>
      )}
    </>
  );
};

export default SubHeading;
