import React, { memo } from "react";
import Heading from "@pages/Home/components/Heading/Heading";
import Field from "@pages/Home/containers/Field/Field";
import { Wrapper } from "@pages/Home/containers/Home.styles";
import SubHeading from "@pages/Home/components/SubHeading/SubHeading";
import { useAppSelector } from "@app/hooks";
import { Box } from "@mui/material";

const Home = () => {
  const { data, isLoaded,error } = useAppSelector((state) => state.project);
  return (
    <Wrapper>
      <Heading />
      {isLoaded  && data && !error ? (
        <>
          <SubHeading />
          <Field project={data.project} />
        </>
      ) : (
        <Box height="90vh">EMPTY</Box>
      )}
    </Wrapper>
  );
};

export default memo(Home);
