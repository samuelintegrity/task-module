import { useFormik } from "formik";
import { Button } from "@mui/material";
import * as Yup from "yup";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";

interface Props {
  onSubmit: Function;
}

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  date: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  carrier: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  priority: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  agent: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  assignTo: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  insured: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const CreateTask = ({ onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      carrier: "",
      priority: "",
      agent: "",
      assignTo: "",
      insured: "",
    },
    validationSchema: schema,
    onSubmit: (v, fk) => onSubmit(v, fk),
  });
  return (
    <form onSubmit={formik.handleSubmit} className='form-group'>
      <label>Title</label>
      <Input
        id="text"
        name="text"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label>Task Date</label>
      <Input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label>Carrier</label>
      <Input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label>Priority</label>
      <Input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label>Agent</label>
      <Input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label>Assign To</label>
      <Input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label>Insured</label>
      <Input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label>Description</label>
      <Input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <Button type="submit">Save</Button>
      <Link to={appRoutes.home.path}>
        <Button>Cancel</Button>
      </Link>
    </form>
  );
};

export default CreateTask;
