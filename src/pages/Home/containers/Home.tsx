import React, { memo } from "react";
import Heading from "@pages/Home/components/Heading/Heading";
import Field from "@pages/Home/components/Field/Field";
import { Wrapper } from "@pages/Home/containers/Home.styles";
import SubHeading from "@pages/Home/components/SubHeading/SubHeading";

const Home = () => {
  return (
    <Wrapper>
      <Heading />
      <SubHeading/>
      <Field />
    </Wrapper>
  );
};

export default memo(Home);
