import React from "react";
import ModalPopup from "components/common/ModalPopup";
import {
  createBoardAction,
  createBoardResetAction,
} from "actions/boardManagement.actions";
import { connect } from "react-redux";
import Button from "components/common/Button";
import { Formik, Field } from "formik";
import { Form, ErrorMessage, Note, GenericError } from "components/styled/form";
import * as Yup from "yup";

const validationSchema = Yup.object({
  displayName: Yup.string().required("Required"),
  urlName: Yup.string()
    .required("Required")
    .max(50, "Must be 50 characters or less")
    .matches(/^[a-zA-Z0-9]*$/, "Must be letters and numbers only"),
  userDisplayName: Yup.string().required("Required"),
  password: Yup.string().when("privateBoard", {
    is: true,
    then: Yup.string().required("Required"),
  }),
});

const CreateBoardModal = ({ create, createBoard, resetCreate }) => {
  return (
    <ModalPopup
      trigger={<Button>Create Board</Button>}
      onOpen={() => void resetCreate()}
      title="Create Board"
    >
      {close =>
        create && create.success ? (
          <div>
            Your board has been created successfully!
            <div>
              <Button onClick={close}>Close</Button>
            </div>
          </div>
        ) : (
          <Formik
            initialValues={{
              displayName: "",
              urlName: "",
              userDisplayName: "",
              privateBoard: false,
              password: "",
            }}
            onSubmit={values => createBoard(values)}
            validationSchema={validationSchema}
          >
            {({ values }) => (
              <Form>
                {create && create.error && (
                  <GenericError>{create.error.message}</GenericError>
                )}
                <div>
                  <label htmlFor="displayName">Display Name</label>
                  <Field name="displayName" placeholder="Display Name" />
                  <ErrorMessage name="displayName" component="div" />
                </div>
                <div>
                  <label htmlFor="urlName">URL Name</label>
                  <Field name="urlName" placeholder="URL Name" />
                  <ErrorMessage name="urlName" component="div" />
                </div>
                <div>
                  <label htmlFor="privateBoard">Private?</label>
                  <Field name="privateBoard" type="checkbox" />
                </div>
                {values.privateBoard && (
                  <div>
                    <label htmlFor="password">Board Password</label>
                    <Field name="password" placehold="Password" />
                    <ErrorMessage name="password" component="div" />
                    <Note>
                      This password will need to be provided by users who wish
                      to join this board.
                    </Note>
                  </div>
                )}
                <div>
                  <label htmlFor="userDisplayName">Your Display Name</label>
                  <Field
                    name="userDisplayName"
                    placeholder="User Display Name"
                  />
                  <ErrorMessage name="userDisplayName" component="div" />
                  <Note>This will be your username on the board</Note>
                </div>
                <div>
                  <Button type="submit">Create</Button>
                </div>
              </Form>
            )}
          </Formik>
        )
      }
    </ModalPopup>
  );
};

const mapStateToProps = state => ({
  create: state.boards.create,
});

const mapDispatchToProps = {
  createBoard: createBoardAction,
  resetCreate: createBoardResetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal);
