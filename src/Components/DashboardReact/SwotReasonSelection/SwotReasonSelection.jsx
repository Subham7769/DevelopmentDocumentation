import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { changeReason } from "../../../Redux/Slices/SwotReasonSlice";
import './SwotReasonSelection.css'

const SwotReasonSelection = () => {
  const dispatch = useDispatch();
  const swotReasons  = useSelector((state) => state.SwotReasonSlice);
  // console.log(swotReasons)

  return (
    <div className="SwotReasonSelection">
       <h4>Product Selection Reason</h4>
      <FormGroup className="SwotReason">
        {swotReasons.map((reason, index) => {
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
    </div>
  );
};

export default SwotReasonSelection;
