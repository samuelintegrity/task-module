import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  onSubmit: Function;
}

const schema = Yup.object().shape({
  status: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  createdBy: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  assignedTo: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const InfoTask = ({ onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      status: "",
      createdBy: "",
      assignedTo: "",
    },
    validationSchema: schema,
    onSubmit: (v, fk) => onSubmit(v, fk),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Status</label>
      <input
        id="status"
        name="status"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.status}
      />
      <label>Assigned To</label>
      <input
        id="assignedTo"
        name="assignedTo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.assignedTo}
      />
      <label>Created By</label>
      <input
        id="createdBy"
        name="createdBy"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.createdBy}
      />
    </form>
  );
};

export default InfoTask;
