import { useEffect, useState } from "react";
import EditableList from "../../Common/EditableFields/EditableList";
import "./SWOTComponent.css";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {updateSwot} from "../../../Redux/Slices/ProductSlice"

//we need full product state to update 
//we need updateProduct function to update full product state in save function
//we need swot of selected product based on currentProductId
//
const SWOTComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice.products);
  const currentProductId = useSelector(state => state.ProductSlice.currentProductId);
  const product = products.find(product => product.productId === currentProductId);
  const [swot, setSwot] = useState(product.swot)

    //update swot every time when currentProductId/product changes
  useEffect(() => {
    if (product) {
      setSwot(product.swot);
    }
  }, [currentProductId, product]);

  function saveSwot() {
    dispatch(updateSwot({swot}))
  }


  return (
    
    <div className="Swot">
      <h3>Swot Analysis</h3>
      <div className="SwotComponent">
        <div className="labelTiles"></div>
        <div className="labelTiles" style={{ backgroundColor: "var(--green)" }}>
          <div>
            <h4>Helpful</h4>
            <p>To achieving the objective</p>
          </div>
        </div>
        <div
          className="labelTiles"
          style={{ backgroundColor: "var(--yellow)" }}
        >
          <div>
            <h4>Harmful</h4>
            <p>To achieving the objective</p>
          </div>
        </div>
        <div className="labelTiles" style={{ backgroundColor: "var(--green)" }}>
          <div className="vertical">
            <h4>Internal origin</h4>
            <p>Attribute of the organization</p>
          </div>
        </div>
        <EditableList
          items={swot.strength}
          name={"strength"}
          color={"var(--green)"}
          mainData={swot}
          setMainData={setSwot}
        />
        <EditableList
          items={swot.weakness}
          name={"weakness"}
          color={"var(--yellow)"}
          mainData={swot}
          setMainData={setSwot}
        />
        <div className="labelTiles" style={{ backgroundColor: "var(--blue)" }}>
          <div className="vertical">
            <h4>External origin</h4>
            <p>Attribute of the environment</p>
          </div>
        </div>
        <EditableList
          items={swot.opportunity}
          name={"opportunity"}
          color={"var(--blue)"}
          mainData={swot}
          setMainData={setSwot}
        />
        <EditableList
          items={swot.threat}
          name={"threat"}
          color={"var(--red)"}
          mainData={swot}
          setMainData={setSwot}
        />
      </div>
      <div className="SaveButton">
        <Button
          variant="contained"
          onClick={() => { saveSwot() }}
        >Save</Button>
      </div>
    </div>
  );
};
export default SWOTComponent;
