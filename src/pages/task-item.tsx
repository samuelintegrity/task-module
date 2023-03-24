import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components";
import { Main } from "../layouts";
import { appRoutes } from "../routes";

const TaskItem = () => {
  let { taskId } = useParams();
  return (
    <Main>
      <Header>Task Item</Header>
      <p>Here's the new task information {taskId}</p>
      <Link to={appRoutes.home.path}>
        <Button>Back</Button>
      </Link>
    </Main>
  );
};

export default TaskItem;
