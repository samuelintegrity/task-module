import { useFormik } from "formik";
import { Button } from "@mui/material";
import * as Yup from "yup";

interface Props {
  onSubmit: Function;
}

const schema = Yup.object().shape({
  date: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  text: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SearchTask = ({ onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      text: "",
    },
    validationSchema: schema,
    onSubmit: (v, fk) => onSubmit(v, fk),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Show tasks through this date</label>
      <input
        id="date"
        name="date"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label>Search For</label>
      <input
        id="text"
        name="text"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.text}
      />
      <Button type="submit">Submit</Button>
      <Button onClick={formik.handleReset}>Reset</Button>
    </form>
  );
};

export default SearchTask;
