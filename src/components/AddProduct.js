import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProducts } from "../Redux/addProducts";
import { toast } from "react-toastify";
import "../styles/addproduct.css";

const AddProduct = () => {
  const [foodType, setFoodType] = useState();

  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: "",
    price: "",
    rating: "",
    link: "",
  });
  console.log(`state of product`, state);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const createProduct = () => {
    try {
      dispatch(addProducts(state));
      toast.success(`Product added successfully`);
      setState({
        title: "",
        price: "",
        rating: "",
        link: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="formm">
        <h2>Add Product</h2>

        <div className="formmm mt-4">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h5 className="mt-2">Product Title</h5>
            <TextField
              name="title"
              id="outlined-basic"
              variant="outlined"
              value={state.title}
              onChange={handleChange}
            />
          </Box>
        </div>
        <br />
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h5 className="mt-2">Product Price</h5>
            <TextField
              name="price"
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={state.price}
              onChange={handleChange}
            />
          </Box>
        </div>
        <br />

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h5 className="mt-2">Product Rating</h5>
          <TextField
            name="rating"
            id="outlined-basic"
            variant="outlined"
            type="number"
            value={state.rating}
            onChange={handleChange}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h5 className="mt-2">Product Image</h5>
          <TextField
            name="link"
            id="outlined-basic"
            variant="outlined"
            value={state.link}
            onChange={handleChange}
          />
        </Box>

        <br />
        <br />
        <br />

        <Button
          className="btn btn-primary text-white bg-primary"
          type="Submit"
          value="SignUp"
          onClick={createProduct}
        >
          Add Now!
        </Button>
      </div>
    </>
  );
};
export default AddProduct;
