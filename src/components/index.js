import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { CardContent, FormGroup } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Write please")
    .max(100, "Too long")
    .required("Requiered"),
  description: Yup.string()
    .min(1, "Write please")
    .max(280, "Too long")
    .required("Requiered"),
  basePrice: Yup.number().positive().required(),
  taxRate: Yup.number().positive().required(),
  productStatus: Yup.string().required("Requiered"),
  inventoryQuantity: Yup.number().positive().required(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ProductForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      basePrice: 0,
      taxRate: 0,
      productStatus: "",
      inventoryQuantity: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify({ values }, null, 2));
    },
  });

  console.log({
    formik,
    validate: {
      errors: formik.errors.name,
      touched: formik.touched.name,
    },
  });
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4">Register Product</Typography>
        <FormGroup
          onSubmit={formik.handleSubmit}
          fullWidth
          className={classes.margin}
        >
          <TextField
            aria-describedby="my-helper-text"
            name="name"
            type="search"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.name && formik.touched.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          <TextField
            name="description"
            label="Description"
            type="search"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.description && formik.touched.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
          <TextField
            name="basePrice"
            label="Base Price"
            type="number"
            value={formik.values.basePrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.basePrice && formik.touched.basePrice ? (
            <div>{formik.errors.basePrice}</div>
          ) : null}
          <TextField
            name="taxRate"
            type="number"
            label="Tax Rate"
            value={formik.values.taxRate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.taxRate && formik.touched.taxRate ? (
            <div>{formik.errors.taxRate}</div>
          ) : null}
          <TextField
            name="productStatus"
            type="search"
            label="Product Status"
            value={formik.values.productStatus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.productStatus && formik.touched.productStatus ? (
            <div>{formik.errors.productStatus}</div>
          ) : null}
          <TextField
            name="inventoryQuantity"
            label="Inventory Quantity"
            type="number"
            value={formik.values.inventoryQuantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          <CardActions>
            <Button type="submit">Submit</Button>
          </CardActions>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
