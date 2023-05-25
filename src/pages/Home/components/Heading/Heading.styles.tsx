import { Box, Button, styled } from "@mui/material";
import { Form } from "formik";

export const MuiForm = styled(Form)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 50px;
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid gray;
`;
export const Row = styled(Box)`
  width: 260px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: flex;
    height: 100%;
    width: 200px;
    align-items: center;
    font-size: 18px;
    color: #312f2f;
    margin-left: 10px;
  }

  input {
    width: 240px;
    padding: 0 10px;
    height: 30px;
    border-radius: 5px;

    &:focus {
      background: aliceblue;
    }
  }
`;
export const SubmitBtn = styled(Button)`
  font-size: 16px;
  height: 30px;
  padding: 0 10px;
  margin-left: 10px;
`;
