import { Box, styled } from "@mui/material";
import { FieldProps } from "@pages/Home/containers/Field/Field";


export const Wrapper = styled(Box)<Pick<FieldProps, "project">>`
  width: 100%;
  height: calc(100vh - 110px); 
;
  max-width: ${({ project }) => project?.width}px;
  //height: ${({ project }) => project?.height}px;
  background: #efefef;
  margin:  110px auto 0 auto;
  position: relative;
`;
