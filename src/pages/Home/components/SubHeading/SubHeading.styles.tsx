import { Box, styled } from "@mui/material";


export const Root = styled(Box)`
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  padding: 0 10px;
  z-index: 10;
  height: 60px;
  display: flex;
  background: #ffffff;
  align-items: center;
`
export const DataHolder = styled(Box)`
 width: 400px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`
export const ProjectName = styled(Box)`
  font-weight: 800;
  letter-spacing: .07rem;
  margin-left: 5px;
  height: 20px;
`
export const ProjectID = styled(Box)`
  font-weight: 200;
  letter-spacing: .07rem;
  border: 1px solid #9d9999;
  border-radius: 3px;
  padding: 0 3px;
  height: 20px;
  margin-left: 5px;
  font-size: 14px;
  width: 200px;
  overflow: hidden;
  margin-bottom: 5px;

`
