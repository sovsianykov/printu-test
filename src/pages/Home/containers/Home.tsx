import React, { memo } from "react";
import { Box } from "@mui/material";
import Heading from "@pages/Home/components/Heading";

const Home = () => {
  return (
    <Box width={"100%"}>
       <Heading/>
    </Box>
  );
};

export default memo(Home);
