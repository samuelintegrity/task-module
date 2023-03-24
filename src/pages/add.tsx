import { FormikHelpers } from "formik";
import { CreateTask, Header } from "../components";
import { InterfaceCreateTask } from "../interfaces";
import { Main } from "../layouts";
 
const Add =( ) => {
  const onSubmit = (
    values: InterfaceCreateTask,
    formikHelpers: FormikHelpers<InterfaceCreateTask>
  ) => {
    // TODO: 
  };

  return (
    <Main>
      <Header>Add</Header>
      <CreateTask onSubmit={onSubmit} />
    </Main>
  );
};

export default Add;
