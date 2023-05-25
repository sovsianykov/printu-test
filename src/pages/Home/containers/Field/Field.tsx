import React, { FunctionComponent, memo } from "react";
import { Project } from "@pages/Home/containers/Field/FigurItem/models";
import FigureItem from "@pages/Home/containers/Field/FigurItem/FigureItem";
import { Wrapper } from "@pages/Home/containers/Field/Field.styles";

export interface FieldProps {
  project?: Project;
}

const Field: FunctionComponent<FieldProps> = ({ project }) => {
  return (
    <Wrapper project={project}>
      {project?.items.map((item) => (
        <FigureItem item={item} key={`${item.id} + ${Date.now()}`} />
      ))}
    </Wrapper>
  );
};

export default memo(Field);
