import styled from "styled-components";

import { ErrorMessage as FormikErrorMessage, Form as FormikForm } from "formik";

export const GenericError = styled.div`
  color: red;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;

export const Form = styled(FormikForm)`
  width: 50%;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin-bottom: 5px;
  }
`;

export const Note = styled.div`
  font-size: 90%;
`;
