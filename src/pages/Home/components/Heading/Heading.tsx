import React from "react";
import { Field, Formik } from "formik";
import { useAppDispatch } from "@app/hooks";
import { fetchProject } from "../../../../store/thunk";
import {
  MuiForm,
  Row,
  SubmitBtn,
} from "@pages/Home/components/Heading/Heading.styles";

const Heading = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{
        projectId: "",
      }}
      onSubmit={(values, { resetForm }) => {
        const newProjectId = {
          projectId: values.projectId,
        };
        dispatch(fetchProject(newProjectId.projectId));
        resetForm();
      }}
    >
      {() => (
        <MuiForm>
          <Row>
            <label htmlFor="projectId">Project ID</label>
            <Field
              name="projectId"
              id="projectId"
              placeholder="for random leave empty"
            />
          </Row>
          <SubmitBtn type="submit" variant="outlined" color="info">
            fetch
          </SubmitBtn>
        </MuiForm>
      )}
    </Formik>
  );
};

export default Heading;
