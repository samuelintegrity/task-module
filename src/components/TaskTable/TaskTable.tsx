import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

const TaskTable = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <Link to={appRoutes.taskItem.path.replace(":taskId", "483gew")}>New Task 483gew</Link>
      </tr>
      <tr>
        <Link to={appRoutes.taskItem.path.replace(":taskId", "123abc")}>New Task 123abc</Link>
      </tr>
    </table>
  );
};

export default TaskTable;
