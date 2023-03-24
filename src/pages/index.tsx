import { FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Header, InfoTask, SearchTask, TaskTable } from "../components";
import { TaskSearch } from "../interfaces";
import { Main } from "../layouts";
import { appRoutes } from "../routes";

const App = () => {
  const onSubmit = (
    values: TaskSearch,
    formikHelpers: FormikHelpers<TaskSearch>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      formikHelpers.setSubmitting(false);
    }, 1000);
  };

  const onQueryTask = () => {};

  return (
    <Main>
      <Header>Tasks Test</Header>
      <SearchTask onSubmit={onSubmit} />
      <InfoTask onSubmit={onQueryTask} />
      <Link to={appRoutes.add.path}>
        <Button>Add Task</Button>
      </Link>
      <TaskTable />
    </Main>
  );
};

export default App;
