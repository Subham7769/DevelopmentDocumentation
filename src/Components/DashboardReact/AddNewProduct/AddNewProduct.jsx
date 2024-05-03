import { useState } from "react";
import "./AddNewProduct.css";
import { Box, Button, TextField, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetReasons, changeReason } from "../../../Redux/Slices/ReasonSlice";
import { createNewProduct } from "../../../Redux/Slices/ProductSlice"

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [hsCode, setHsCode] = useState("");
  const [productNameError, setProductNameError] = useState(false);
  const [hsCodeError, setHsCodeError] = useState(false);
  const [reasonError, setReasonError] = useState(false);
  const Reasons = useSelector((state) => state.ReasonSlice);
  // console.log(Reasons);

  const handleSubmit = () => {
    // Check if product name is empty
    if (!productName.trim()) {
      setProductNameError(true);
      return;
    }

    // Check if HS code is empty
    if (!hsCode.trim()) {
      setHsCodeError(true);
      return;
    }

    // Check if at least one reason is selected
    const isReasonSelected = Reasons.some((reason) => reason.status);
    if (!isReasonSelected) {
      setReasonError(true);
      return;
    }

    //add product in Product Array
    dispatch(createNewProduct({ productName, hsCode, Reasons }));

    // Reset form
    setProductName("");
    setHsCode("");
    setProductNameError(false);
    setHsCodeError(false);

    // Reset Redux state
    dispatch(resetReasons());
  };


  return (
    <div className="AddNewProduct">
      <h3>Product Selection</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
            setProductNameError(false); // Reset error when user types
          }}
          error={productNameError}
          helperText={productNameError ? "Product Name is required" : ""}
        />
        <TextField
          required
          id="outlined-basic"
          label="Product HS Code"
          variant="outlined"
          value={hsCode}
          onChange={(e) => {
            setHsCode(e.target.value);
            setHsCodeError(false); // Reset error when user types
          }}
          error={hsCodeError}
          helperText={hsCodeError ? "Product HS Code is required" : ""}
        />

        <div className="ReasonSelection">
          <h4>Product Selection Reason</h4>
          <FormGroup className="Reason">
            {Reasons.map((reason, index) => {
              return (
                <div className="selection" key={reason.name + index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={reason.status}
                        onChange={() =>
                          dispatch(
                            changeReason({
                              index: index,
                            }),
                          )
                        }
                      />
                    }
                    label={<span style={{ backgroundColor: reason.color, borderRadius: "0.3rem", padding: "0.3rem 0.8rem" }}>{reason.name}</span>}
                  />
                </div>
              );
            })}
          </FormGroup>
          {reasonError && (
            <span style={{ color: "red", fontSize: "0.75rem" }}>
              Please select at least one reason.
            </span>)}
        </div>

        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ padding: "1rem 0" }}
        >
          Add Product
        </Button>
      </Box>
    </div>
  );
};

export default AddNewProduct;
