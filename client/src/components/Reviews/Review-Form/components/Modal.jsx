import React from "react";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { MdClose } from "react-icons/md";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import useReviewPost from "../../hooks/useReviewPost.jsx";
import { useProductContext } from "../../../Context/ContextProvider.jsx";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import {
  FormHelperText,
  Divider,
  Input,
  InputLabel,
  Select,
  FormControlLabel,
  Typography,
  IconButton,
  Grid,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";
const companies = [
  {
    name: "Company A",
    id: "001",
    url:
      "https://docs.google.com/document/d/1czOkRgNba9yqkDzUt5nRzHYIZFllhxz5xlWjwzLtLGg/edit?usp=sharing"
  },
  {
    name: "Company B",
    id: "002",
    url:
      "https://docs.google.com/document/d/1qEZAauyLDN1N9pY6Mn7MZiqlVfVYd3fVRjoG6jQEUOU/edit?usp=sharing"
  },
  {
    name: "Company C",
    id: "003",
    url: "https://facebook.com"
  }
];
const useStyles = makeStyles((theme) => ({
  formControl: { margin: "10px 0", display: "block" },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));
const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup.string("Enter your last name"),
  // .required("Last name is required"),
  email: yup.string("Enter your email").email("Enter a valid email"),
  //.required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required")
});



export default function Modal(props) {
  const { open, handleClose } = props;
  const [link, setLink] = React.useState("http://www.google.com/");
  const { handlePost } = useReviewPost()
  const { currentProductId } = useProductContext();
  const formik = useFormik({
    initialValues: {
      productId: currentProductId,
      firstName: "",
      lastName: "",
      email: "",
      password: "foobar",
      refundForm: null,
      body: '',
      recommend: '',
      summary: '',
      requiredDocument: "",
      requiredFile: "",
      rating: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = Object.keys(values).reduce((formData, key) => {
        formData.append(key, values[key]);
        return formData;
      }, new FormData());

      //console.log(values.refundForm);
      //formData.append("refundForm", values.refundForm);
      // for (let value of formData.values()) {
      //   console.log()
      //   console.log(value);
      // }
      // for (let value of formData.entries()) {
      //   console.log(value);
      // }

      // handlePost(values);
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      handlePost(values);

    }
  });
  const setDownloadForm = (event) => {
    //console.log(e.target.value);
    console.log("here");
    let temp = companies
      .filter((x) => x.id === event.target.value)
      .map((x) => x.url);
    setLink(temp);
    console.log(temp);
  };
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  //<a href='/somefile.txt' download>Click to download</a>
  //<a href="test.txt" download>Click here</a>
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
      >
        <MuiDialogTitle disableTypography className={classes.root}>
          <Typography variant="h6">Add a Review</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <MdClose />
          </IconButton>
        </MuiDialogTitle>
        <DialogContent>
          <div>
            text
            <ul>

            </ul>
          </div>
          <Divider />
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>

              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.formControl}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Recommend</FormLabel>
                  <RadioGroup
                    aria-label="recommend"
                    name="recommend"
                    value={formik.values.recommend}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.formControl}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.formControl}
                  variant="outlined"
                  label="Date of Purchase"
                  fullWidth
                  id="effectiveDate"
                  name="effectiveDate"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.formControl}
                  variant="outlined"
                  label="summary"
                  fullWidth
                  id="summary"
                  name="summary"
                  multiline
                  // rows={4}
                  value={formik.values.summary}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.formControl}
                  variant="outlined"
                  label="body"
                  fullWidth
                  id="body"
                  name="body"
                  multiline
                  // rows={4}
                  value={formik.values.body}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>

            {/* <FormControl className={classes.formControl} component="fieldset">
              <FormLabel component="legend">Refund</FormLabel>
              <RadioGroup
                name="fullRefund"
                value={formik.values.fullRefund}
                onChange={(event) => {
                  formik.setFieldValue("fullRefund", event.currentTarget.value);
                }}
              >
                <FormControlLabel
                  value={"1"}
                  control={<Radio />}
                  label="100%"
                />
                <FormControlLabel
                  value={"2"}
                  control={<Radio />}
                  label="Calculate based on the date the refund request is received and the refund fee will apply"
                />
              </RadioGroup>
            </FormControl> */}
            <p>
              Refund amount will be reimbursed within 2 weeks to you via the
              same method as your initial payment for the policy.
            </p>
            <Divider />
            <Grid container spacing={1}>

              <FormHelperText>
                Download refund request form. Fill out the form and upload the
                form
              </FormHelperText>
            </Grid>

            <Grid container spacing={1}>
              <FormControl>
                <FormLabel htmlFor="refundForm">Upload a Photo</FormLabel>
                <input
                  type="file"
                  id="photos"
                  name="photos"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "photos",
                      event.currentTarget.files[0]
                    );
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Rating</FormLabel>
                <RadioGroup
                  aria-label="rating"
                  name="rating"
                  value={formik.values.rating}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Divider />
            <FormControl
              variant="outlined"
              className={classes.formControl}
              style={{ width: "100%" }}
            >

            </FormControl>

            <TextField
              className={classes.formControl}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <button onClick={formik.resetForm} type="button">
              Reset
            </button>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>

          {/* <Formik onSubmit={handleSubmit}>
            {({ values, handleChange, setFieldValue }) => {
              <>
                <Form>
                  <FormControl>
                    <FormLabel>Label</FormLabel>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <Field as="select" name="color">
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                    </Field>
                  </FormControl>
                </Form>
              </>;
            }}
          </Formik> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
