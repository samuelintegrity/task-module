import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

const TaskTable = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>
            <Link to={appRoutes.taskItem.path.replace(":taskId", "483gew")}>
              New Task 483gew
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={appRoutes.taskItem.path.replace(":taskId", "123abc")}>
              New Task 123abc
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TaskTable;
